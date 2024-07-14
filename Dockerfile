FROM node:20.15.1-alpine3.19 as base

# Set environment variables
ARG PORT=3000
ENV NODE_ENV=production
WORKDIR /src

# Build stage
FROM base as build
COPY --link package.json package-lock.json ./
RUN npm install --production=false
COPY --link . .
RUN npm run build
RUN npm prune

# Expose the host and port
ENV HOST 0.0.0.0
EXPOSE 3000

# Run the built project with Node.js
ENTRYPOINT ["node", ".output/server/index.mjs"]
