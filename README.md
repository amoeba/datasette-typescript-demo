# datasette-typescript-demo

Future place for a demo showing how to integrate Datasette into a frontend
framework like Nuxt.

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
