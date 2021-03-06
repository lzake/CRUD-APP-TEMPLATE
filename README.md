# CRUD APP TEMPLATE

## Use this template to make a CRUD app.


## Setup

### Fork and Clone this repository

```sh
npm install
```

```sh
createdb name_of_database
```

# MAKE A MIGRATION


## Go to your terminal, make sure you are in your 'server' directory, run:
```sh
knex migrate make: <name_of_your_migration_file>
```
```sh
knex migrate make: create_movie
```

## This will create a migrations directory and place a migration file inside of it.
## Go to the new migrations file that was just created and apply your knex schema functions.
## Apply your new migration, in the terminal, run:

```sh
knex migrate:latest
```

# CREATE A SEED

## After you have already made a migration, applied your desired knex schema functions to it, and 'knex migrated:latest', we need to create a seed for it. In your terminal, run:

```sh
knex seed:make 01_<seed_name>
```
- i.e.
```sh
knex seed:make 01_movie
```

## This will create a seeds directory and place a seed file inside of it.
## Go to the new seeds file that was just created and apply knex logic to populate your database   with test or seed data independent of your migration files.
## Apply your new migration, in the terminal, run:

```sh
knex seed:run
```

## Repeat these steps as needed for your app:
- First: migrate
- Update that migration
```sh
knex migrate:latest
```
- Second: Seed
- Update that seed
```sh
knex seed:run
```

# KNEX COMMANDS
---------------------------------------------------------------------------------
Commands:

    init [options]                         Create a fresh knexfile.
    migrate:make [options] <name>         Create a named migration file.
    migrate:latest                         Run all migrations that have not yet been run.
    migrate:rollback                       Rollback the last set of migrations performed.
    migrate:currentVersion                View the current version for the migration.
    seed:make [options] <name>            Create a named seed file.
    seed:run                              Run seed files.

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    --debug            Run with debugging.
    --knexfile [path]  Specify the knexfile path.
    --cwd [path]       Specify the working directory.
    --env [name]       environment, default: process.env.NODE_ENV || development
---------------------------------------------------------------------------------

# ROUTE TEMPLATES ALREADY INCLUDED

- GET /movies   _lists all movies_
- POST /movies  _create a movie_
- GET /movies/:id  _show a movie_
- PUT /movies/:id _edit a movie_
- DELETE /movies/:id _delete a movie_


# DEPLOY TO HEROKU

## Install the herkou CLI
```sh
brew install heroku
```

## Signup and login to heroku
```sh
heroku login
```
## Create a heroku app
```sh
heroku create
```
## Push to heroku
```sh
git push heroku master
```
## Open the URL from the command line
```sh
heroku open
```
## View heroku logs
```sh
heroku logs --tail
```
# Add Postgres DB to Heroku

## Add postgres addon
```sh
heroku addons:create heroku-postgresql:hobby-dev
```

# Add production connection to knex

## Add a production enviornment to the knex.js file in your root directory. The connection should be set to process.env.DATABASE_URL
## Look in your db/knex.js file and ensure your connection variable is set to process.env.NODE_ENV || developement
## Add a .env file
## Download the npm package dotenv
```sh
npm install dotenv
```

## Require the pacakge in your knexfile.js
## require('dotenv').config()

## Make a .env file
## touch .env

## Add your .env file to your .gitignore file

## Add your database url to your .env file

## Find your app on heroku > settings > config variables
## DATABASE_URL=<your database url here>

# Run migrations on production DB

## Use psql to examine tables and data on the production DB
```sh
heroku pg:psql
```

## Run seed on production DB
```sh
heroku run knex seed:run
```
