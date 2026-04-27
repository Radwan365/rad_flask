# rad_flask

## Overview

A Node.js web application connected to a MySQL database, managed with Docker Compose.

## Requirements

- Docker
- Docker Compose

## How to Run

1. Clone the repo:

```bash
git clone git@github.com:Radwan365/rad_flask.git
cd rad_flask
```

2. Start the containers:

```bash
docker compose up --build
```

3. Visit the app:

http://localhost:3000

## How to Stop

```bash
docker compose down
```

## Project Structure

```
rad_flask/
├── app.js              # Node.js application
├── package.json        # Node.js dependencies
├── dockerfile          # Docker image instructions
├── docker-compose.yaml # Multi-container setup
└── .dockerignore       # Files to exclude from Docker
```
