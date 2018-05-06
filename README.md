<p align="center">
  <img align="center" src="./vichurch.png" width="256" alt="ViChurch" />
</p>

Each Church has many things to be managed, such as: disciples, rooms, facilities, schedules. This project was built aim to solves these common management problems in Church. ViChurch is under heavy development.

## Table of contents:

* [Features](#features)
* [Tech Stacks](#tech-stacks)
* [Getting Started](#getting-started)
    * [Software Requirements](#software-requirements)
    * [Internet Accounts](#internet-accounts)
    * [Up and Running](#up-and-running)
    * [Environment Variables](#environment-variables)
    * [Build and Deployment](#build-and-deployment)

## Features

* Manage Church rooms and schedules.
* Manage different departments.
* More is coming soon...

## Tech Stacks

| Concern               | Solution                     |
| --------------------- | ---------------------------- |
| Monorepo              | Docker                       |
| Scripting Language    | TypeScript, JavaScript, Bash |
| Server                | NodeJS in Typescript         |
| Server Framework      | Koa                          |
| Database              | MySQL                        |
| Database Access Layer | GraphQL with Prisma          |
| Client                | React, React Native          |
| Unit Testing          | Jest, WallabyJS              |
| Design                | Balsamiq Mockup, Sketch      |

## Getting Started

### Software Requirements:

* Docker: All the micro services is run in its Docker container.
* NodeJS 9+: We choose the latest stable version.
* Yarn: Package manager from Facebook.
* VSCode (recommended for TypeScript) or any others IDE.

### Internet Accounts:

* Expo: This account is required for mobile app developement. Hit to the official site https://expo.io and sign up one.
* Docker Hub: This account is required if you use Docker CE for Mac when you first install Docker.

### Up and Running:

* Fork and clone this repo to your account.
* Cd to project directory and run initial installation script:

```bash
# Recommended
yarn
# Or
npm install
```

* Modify environment value in these files: `build.env` and `container.env`. See [Environment Variables](#environment-variables) for more details.

* Build docker image using `docker-compose`:

```bash
yarn build
```

* The first time run: `yarn start`

This process will initialize the database which take a few seconds, that Prisma service won't wait enough for MySQL service to be ready. What you have to do is wait until every service go to idle state (not emitting new log in console) and press `Ctrl + C` to stop all the running services and restart it again by going to next step below.

* Start all development services:

```bash
# Recommended
yarn start
# Or
npm run start
```

Run Expo application on your mobile phone with the Expo account that you've specified in `build.env` file.

* After start development services first time, let's deploy GraphQL Schema to Prisma local server:

```bash
yarn deploy:graph
# Or
npm run deploy:graph
```

This will deploy database schema and seed the database with some datasets. If you didn't run this, the GraphQL server is not accessible because there is no project deployed.

### Environment Variables:

| ENV                            | DESCRIPTION                                                         | FILE          |
| ------------------------------ | ------------------------------------------------------------------- | ------------- |
| EXPO_USERNAME                  | Expo username credentials                                           | build.env     |
| EXPO_PASSWORD                  | Expo password credentials                                           | build.env      |
| IMPORT_PORT                    | Port of import micro-service                                        | container.env |
| PRISMA_PROXY_ENDPOINT          | Revert proxy server url Docker should bind to localhost for `graph` | container.env |
| PRISMA_ENDPOINT                | Url of Prisma server for this project (locally)                     | container.env |
| GRAPH_ENDPOINT                 | Url of GraphQL service (this will be published to the internet)     | container.env |
| PRISMA_SECRET                  | Secret string for Prisma application                                | container.env |
| APP_SECRET                     | App authentication secret                                           | container.env |
| AIRTABLE_API_KEY               | AirTable API access key for the importer                            | container.env |
| EXPO_HOST                      | Which host Expo should run (tunnel, lan, localhost)                 | container.env |
| REACT_NATIVE_PACKAGER_HOSTNAME | Local development machine IP                                        | container.env |

### Build and Deployment:

This project will be build in Travis. The deployment script is not yet developed!
