# play-library
Ce projet consiste en la création d'une ludothèque. Cette application web est composé d'un client Angular et d'un serveur API REST réalisé avec le framework Laravel.

## Serveur API REST - Laravel

### Mise en route sans Docker en développement

```shell
cd api-server
composer install
php artisan key:generate
touch ./database/database.sqlite
php artisan jwt:secret
php artisan migrate:fresh
php artisan db:seed
php artisan serve --host=0.0.0.0 --port=8000
```

### Mise en route avec Docker en développement

```shell
cd api-server
docker build . -t server-api -f Dockerfile
docker run -p 8000:80 server-api
```

### Mise en route avec Docker en production

```shell
cd api-server
docker build . -t server-api-prod -f Dockerfile-prod
docker run -p 8000:80 server-api-prod
```

## Client - Angular

### Mise en route sans Docker en développement

```shell
cd angular-application
npm install -g @angular/cli
npm install
ng s
```

### Mise en route avec Docker en développement

```shell
cd angular-application
docker build . -t angular-app -f Dockerfile-dev
docker run -p 4200:4200 angular-app
```

### Mise en route avec Docker en production

```shell
cd angular-application
docker build . -t angular-app-prod -f Dockerfile
docker run -p 8080:80 angular-app-prod
```
