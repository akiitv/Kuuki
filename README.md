# Kuuki

## Tools used:

### Monorepo

Kuuki uses turborepo as it's build system.
This turborepo uses [pnpm](https://pnpm.io) as a package manager.

### Apps

- `backend`: a [NestJS](https://nestjs.com/) app
- `eslint-config-custom`: `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Backend

Backend app is built using [NestJS](https://nestjs.com/) framework, which by default works on [Express](https://expressjs.com/).
It uses [MongoDB](https://www.mongodb.com/) as a database.

### Utilities

This project uses these tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
