# Deploying Future Ready EMBA to the Hostinger VPS

The site is a Next.js 16 app that runs a small Node server (`next start`). We run it
with **PM2** and put **Nginx** in front for the domain + SSL. Leads keep flowing to
the existing **Supabase** table — nothing changes there.

You only do the first-time setup once. After that, updates are 3 commands (see the
bottom of this file).

---

## What you need before starting

- SSH access to the VPS (Hostinger hPanel → VPS → SSH details, or the browser terminal)
- The Supabase **anon key** (same value as in your local `web/.env.local`)
- The domain `futurereadymba.com` pointing at the VPS IP (Hostinger DNS → A record
  `@` and `www` → your VPS IPv4). DNS can take up to a few hours to propagate.

---

## 1. Point the domain at the VPS

In hPanel → **Domains → DNS / Nameservers** for futurereadymba.com, set:

| Type | Name | Value            |
|------|------|------------------|
| A    | @    | `<your VPS IP>`  |
| A    | www  | `<your VPS IP>`  |

Check it resolves:  `ping futurereadymba.com`  → should show the VPS IP.

---

## 2. Install the runtime (once)

SSH in, then:

```bash
# Node 22 LTS via nodesource
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs nginx git

# PM2 process manager
sudo npm install -g pm2
```

---

## 3. Get the code

The GitHub repo is **private**, so give the VPS read access one of two ways:

**Option A — Deploy key (recommended, read-only):**
```bash
ssh-keygen -t ed25519 -C "vps-futurereadymba" -f ~/.ssh/id_ed25519 -N ""
cat ~/.ssh/id_ed25519.pub
```
Copy that public key into GitHub → repo **future-ready-emba** → Settings → Deploy keys
→ Add. Then:
```bash
sudo mkdir -p /var/www && sudo chown $USER /var/www
cd /var/www
git clone git@github.com:naveenedmarker-cloud/future-ready-emba.git
```

**Option B — HTTPS with a Personal Access Token:** clone
`https://github.com/naveenedmarker-cloud/future-ready-emba.git` and paste a GitHub PAT
when prompted for the password.

---

## 4. Configure environment + build

```bash
cd /var/www/future-ready-emba
cp .env.production.example .env.production
nano .env.production        # paste the real NEXT_PUBLIC_SUPABASE_ANON_KEY, save
```

`.env.production` should read:
```
NEXT_PUBLIC_SITE_URL=https://futurereadymba.com
NEXT_PUBLIC_SUPABASE_URL=https://jqlgtxaultqxdhlrmhwl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your real anon key>
```

Then install and build:
```bash
npm ci
npm run build
```

> The `NEXT_PUBLIC_*` values are baked in at build time, so `.env.production` must
> exist **before** `npm run build`. If you change them later, rebuild.

---

## 5. Start the app under PM2

```bash
pm2 start ecosystem.config.js
pm2 save                       # remember the process across reboots
pm2 startup                    # run the one line it prints, to enable boot autostart
```

Verify it's serving locally:  `curl -I http://127.0.0.1:3000`  → `200 OK`.

---

## 6. Put Nginx in front

```bash
sudo cp deploy/nginx-futurereadymba.conf /etc/nginx/sites-available/futurereadymba
sudo ln -s /etc/nginx/sites-available/futurereadymba /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default   # drop the Nginx welcome page
sudo nginx -t && sudo systemctl reload nginx
```

Now `http://futurereadymba.com` should load the site.

---

## 7. Enable HTTPS (free, auto-renewing)

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d futurereadymba.com -d www.futurereadymba.com
```

Choose "redirect HTTP to HTTPS" when asked. Certbot edits the Nginx config and sets up
auto-renewal. Done — `https://futurereadymba.com` is live.

---

## Updating the site later

Whenever new changes are pushed to GitHub `main`:

```bash
cd /var/www/future-ready-emba
git pull
npm ci && npm run build
pm2 restart futurereadymba
```

That's it — three lines and the update is live with zero downtime on restart.

---

## Troubleshooting

- **502 Bad Gateway** → the Node app isn't running. `pm2 status`, then `pm2 logs futurereadymba`.
- **Leads not saving** → the anon key in `.env.production` is wrong/missing, or you
  didn't rebuild after changing it. Check `pm2 logs` for "Supabase insert failed".
- **Old content still showing** → you pulled but didn't rebuild. Re-run step in "Updating".
- **Domain not resolving** → DNS hasn't propagated yet, or the A records are wrong.
