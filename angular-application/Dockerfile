# Stage 1
# BASE IMAGE with an alias #
FROM node:lts as node

WORKDIR /app

# Install Angular CLI to run Build #
RUN npm install -g @angular/cli

COPY package.json /app
RUN npm install
COPY . /app

RUN ng config -g cli.warnings.versionMismatch false
RUN ng build --configuration production
# --base-href

# Stage 2
# BASE IMAGE with an alias #
FROM nginx as runtime
COPY --from=node /app/dist/sae4-angular /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
