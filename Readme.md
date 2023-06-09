# Tasking Users Readme

## Intro

TODO:

## Prerequisites

1. Nodejs
2. Instance MongoDb Running

## Getting started

1. Create a file in the project root and populate it as follows. Substituting your dev environment values.

```env
#.env file
MONGO_DB_URL=<mongodb connection string>
```

- You may use a container by creating a `docker-compose.yaml` file as below and running it with `docker-compose up -d`.
```yaml
# docker-compose.yaml
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

    
