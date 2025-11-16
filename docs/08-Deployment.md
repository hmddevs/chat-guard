# Deployment

This guide covers local, server, and Heroku deployments.

## Local / Development

```bash
npm install
npm start
```

Keep a terminal open; logs will stream to stdout.

## Production (Node process manager)

Use a process manager such as PM2 for resilience:

```bash
npm install -g pm2
pm2 start app.js --name chat-guard
pm2 save
pm2 startup
```

Ensure environment variables or `src/config.js` are correctly set on the host.

## Heroku

This repository includes a `Procfile`:

```
worker: node app.js
```

Steps:
1. Create a Heroku app.
2. Set Config Vars: `CLIENT_TOKEN`, `MONGODB_CONNECTURL`, etc., and inject into `src/config.js` via build or use an env‑based config variant.
3. Deploy the repo.
4. Scale worker: `heroku ps:scale worker=1`.

## Docker (Example)

Create a simple Dockerfile:

```Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "app.js"]
```

Build and run:

```bash
docker build -t chat-guard .
docker run --env-file .env --name chat-guard --restart unless-stopped chat-guard
```

Provide env vars in `.env` or bake a config loader to read from env.

## Observability

- Forward stdout/stderr to your platform logs.
- Configure a dedicated moderation log channel in Discord for auditability.
