# Deploying Future Ready EMBA to Hostinger

Production runs as a managed Node.js application on the existing Hostinger Business
Web Hosting plan. A VPS, Vercel, and Supabase are not required.

## Production resources

- Domain: `futurereadymba.com`
- Hostinger website account: `u606386577`
- Hosting order: `1009802178`
- Data center: Kuala Lumpur
- Runtime: Node.js 22
- Source: `https://github.com/kepala-collab/emba-mba-site`
- Database: `u606386577_emba`
- Database user: `u606386577_emba_app`

## Environment

Configure these values in the Hostinger Node.js application environment. Never
commit the real password or a populated `.env.production` file.

```dotenv
NEXT_PUBLIC_SITE_URL=https://futurereadymba.com
DB_HOST=localhost
DB_PORT=3306
DB_NAME=u606386577_emba
DB_USER=u606386577_emba_app
DB_PASSWORD=<Hostinger database password>
```

The MySQL user is local to the Hostinger account; no public remote-access rule is
needed. The lead API creates its `leads` table on first use and inserts values with
parameterised queries.

## Build and deploy

Use the repository root (the folder containing `package.json`):

```bash
npm ci
npm run lint
npm run build
```

Deploy the source through Hostinger's Node.js application deployment. Exclude
`node_modules`, `.next`, `.git`, local environment files, and every other path
matched by `.gitignore`; Hostinger installs dependencies and builds the app on its
server. The package declares Node.js 22 and uses these scripts:

- Build: `npm run build`
- Start: `npm start`

## Verification

After each deployment:

1. Confirm the Hostinger build state is `completed` and inspect the build log.
2. Open `https://futurereadymba.com` and confirm the real Future Ready EMBA copy loads.
3. Check `/robots.txt`, `/sitemap.xml`, `/zh`, and one insight article.
4. Submit a clearly labelled test enquiry through the form.
5. Confirm the test row exists in the Hostinger MySQL `leads` table, then remove it.

If content looks stale, clear the Hostinger website cache. If the site returns an
application error, inspect the Node.js build/runtime logs and confirm all five
database environment variables are present.
