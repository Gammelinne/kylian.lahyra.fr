FROM node:current-alpine3.20 as base

# Set environment variables
ARG PORT=3000
ENV NODE_ENV=production
ARG NUXT_GITHUB_TOKEN
ENV NUXT_GITHUB_TOKEN=$NUXT_GITHUB_TOKEN

# Create app directory
WORKDIR /src


# Build stage
FROM base as build
COPY --link package.json package-lock.json ./
RUN npm install
COPY --link . .
RUN npm run build
RUN npm prune

# Expose the host and port
ENV HOST 0.0.0.0
EXPOSE $PORT
ENTRYPOINT ["node", ".output/server/index.mjs"]
