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

# Make copy of sample.env file to .env for docker-compose.
envfile=$(pwd)/.env
if [ -f $(pwd)/.env ]; then
  echo ".env file already existed, skip copy!";
else
  cp sample.env .env;
  echo "Copie .env file: "$envfile;
fi;