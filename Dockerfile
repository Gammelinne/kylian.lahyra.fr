# Étape de construction
FROM node:lts-alpine as build-stage

# Définir le répertoire de travail
WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm install

# Copier les fichiers du projet
COPY . .

# Construire l'application
RUN npm run build

# Étape de production
FROM node:lts-alpine as production-stage

# Définir le répertoire de travail
WORKDIR /app

# Copier le build depuis l'étape de construction
COPY --from=build-stage /app/.nuxt /app/.nuxt
COPY --from=build-stage /app/static /app/static
COPY --from=build-stage /app/node_modules /app/node_modules
COPY --from=build-stage /app/.output /app/.output

# Exposer le port (le port par défaut de Nuxt.js est 3000)
EXPOSE 3000

# Définir le point d'entrée
ENTRYPOINT ["node", ".output/server/index.mjs"]
