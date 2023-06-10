# Tasking Users Readme

## Intro

TODO:

## Prerequisites

1. Nodejs
2. Instance MongoDb Running

## Application Components

![Tasking Users Components](./assets/tasking-users-tech-stack.drawio.svg)

> The application uses `expressjs` as its main engine and also produces the `REST` endpoints. It will `CRUD` data using `mongoose` as its orm to a `mongodb` instance.

## Getting started

1. Create a file in the project root and populate it as follows. Substituting your dev environment values.

```env
MONGO_DB_URL=<mongodb connection string>
```
    - You can use a container by creating a `docker-compose.yaml` file as below and running it with `docker-compose up -d`.
    ```yaml
    # Use root/example as user/password credentials
    version: '3.1'

    services:

    mongo:
        image: mongo
        restart: always
        environment:
        MONGO_INITDB_ROOT_USERNAME: root
        MONGO_INITDB_ROOT_PASSWORD: example

    mongo-express:
        image: mongo-express
        restart: always
        ports:
        - 8081:8081
        environment:
        ME_CONFIG_MONGODB_ADMINUSERNAME: root
        ME_CONFIG_MONGODB_ADMINPASSWORD: example
        ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/
    ```
    - I used mongo atlas as my database host.

