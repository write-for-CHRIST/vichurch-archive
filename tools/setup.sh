#!/bin/bash -e
echo "Setting up environment..."

# Prepare required environments
command -v docker >/dev/null 2>&1 || {
  echo >&2 "ERROR: No docker found. Please install Docker first!"
  exit 1;
}

# Make sure Prisma is installled globally
command -v prisma >/dev/null 2>&1 || {
  echo >&2 "ERROR: Node module Prisma is not found globally, installing it..."
  npm install -g prisma;
}

# Make copy of sample.container.env file to .env for docker-compose.
build_env_file=$(pwd)build.env
container_env_file=$(pwd)/container.env

if [ -f $(pwd)/build.env ]; then
  echo "build.env file already existed, skip copy!";
else
  cp sample.build.env build.env;
  echo "Copied build.env file: "$build_env_file;
fi;

if [ -f $(pwd)/container.env ]; then
  echo "container.env file already existed, skip copy!";
else
  cp sample.container.env container.env
  echo "Copied container.env file: "$container_env_file;
fi;

# Deploy graphql project

deploy_graphql_prisma() {
    export $(cat .env | xargs)
    cd server/graph && prisma deploy
}

read -p "Do you want to deploy graph project to local Prisma server? (Y/n) " yn
case $yn in
    [Yy]* ) deploy_graphql_prisma;;
    [Nn]* ) echo "";;
    * ) echo "Please answer yes or no.";;
esac