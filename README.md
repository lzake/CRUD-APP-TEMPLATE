# CRUD APP TEMPLATE

## Use this template to make a CRUD app.

1. Fork and Clone this repository
1. ```sh npm install```
1. ```sh createdb name_of_database```

IN YOUR TERMINAL, FIRST MAKE SURE YOU ARE IN YOUR 'server' FOLDER.

# MAKE A MIGRATION


## Go to your terminal, make sure you are in your 'server' directory, run:

```sh
$ knex migrate make: <name_of_your_migration_file>
```
- i.e. ```sh knex migrate make: create_movie```

## This will create a migrations directory and place a migration file inside of it.
## Go to the new migrations file that was just created and apply your knex schema functions.
## Apply your new migration, in the terminal, run:

```sh
$ knex migrate:latest
```

# CREATE A SEED

## After you have already made a migration, applied your desired knex schema functions to it, and 'knex migrated:latest', we need to create a seed for it. In your terminal, run:

```sh
$ knex seed:make 01_<seed_name>
```
- i.e. ```sh knex seed:make 01_movie ```

## This will create a seeds directory and place a seed file inside of it.
## Go to the new seeds file that was just created and apply knex logic to populate your database   with test or seed data independent of your migration files.
## Apply your new migration, in the terminal, run:

```sh
$ knex seed:run
```

## Repeat these steps as needed for your app:
- First: migrate
- Update that migration
```sh
$ knex migrate:latest
```
- Second: Seed
- Update that seed
```sh
$ knex seed:run
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
