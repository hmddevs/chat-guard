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

Ensure the required environment variables are set on the host. See
[Configuration](03-Configuration.md).

## Heroku

This repository includes a `Procfile`:

```
worker: node app.js
```

Steps:
1. Create a Heroku app.
2. Set Config Vars: `DISCORD_BOT_TOKEN`, `MONGODB_URI`, `BOT_OWNERS`.
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

[Back to Docs Index](README.md) · [Next: Operations →](09-Operations.md) · [See also: Getting Started](02-Getting-Started.md)
