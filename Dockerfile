FROM node:20.15.1-alpine3.20 as base

# Set environment variables
ARG PORT=3000
ENV NODE_ENV=production
WORKDIR /src
ARG VITE_GITHUB_TOKEN
ENV VITE_GITHUB_TOKEN=${VITE_GITHUB_TOKEN}

# Create env file
RUN echo "PORT=$PORT" > .env
RUN echo "VITE_GITHUB_TOKEN=$VITE_GITHUB_TOKEN" >> .env


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
