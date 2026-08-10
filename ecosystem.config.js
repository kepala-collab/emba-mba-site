// PM2 process config for the Future Ready EMBA site on the Hostinger VPS.
// Usage:  pm2 start ecosystem.config.js   (run from the repo root)
// The Next.js server listens on port 3000; Nginx reverse-proxies 80/443 -> 3000.
module.exports = {
  apps: [
    {
      name: "futurereadymba",
      cwd: "/var/www/future-ready-emba",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
