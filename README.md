# datasette-typescript-demo

Future place for a demo showing how to integrate Datasette into a frontend
framework with a good developer experience.

The problem this solves is that there isn't a good pattern for integrating a Datasette instance into a frontend application.

The idea here is:

- The data is served from a Datasette, serving over HTTP
- We generate TypeScript bindings using `@rmp135/sql-ts`
- We generate query strings based on the TypeScript bindings using Knex
- We make a thin wrapper to turn our generated SQL query strings into URLs so we can use `fetch`

This lets us:

- Avoid writing our SQL strings ourselves
- Remove the duplication we'd need to do things like convert a normal SELECT query into a COUNT query (i.e., to get a row count from a normal query to produce pagingation controls).

> ![NOTE]
> This doesn't work yet as it uses Knex.js which doesn't supply a browser build out of the box. Once they do, this will work nicely.

## Requirements

- A Python toolchain, I use rye here
- npm or similar

## Setup

```sh
rye sync
npm i
```

## Running

```sh
# Run Datasette in one shell
rye run datasette legislators.db
# and Nuxt in another
npm run dev
```
