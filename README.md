# turborepo-tailwindcss-storybbok-vca

This version of TurboRepo includes a complete Visual Component Architecture, which supports the separation of visual content and state management. Developers can follow these steps to extend the existing components or create new ones:

Run the npm run storybook command to launch Storybook server.
Choose the relevant component(s) you want to modify.
Modify the component(s) in isolation.
View the changes in real-time through the Storybook interface.

## Installation

1. To get this project files locally on your machine, you can clone this repository by running the following command on your terminal or command line:

```sh
git clone https://github.com/erickpeixoto/complete-turborepo-boilerplate
```

2. Install all the dependency packages found in the `package.json` files across the monorepo apps by running `npm install` from the project root directory.
3. To start the development servers of all the applications in your monorepo in parrallel

## Apps & Packages

- `apps/portfolio`: a sample documentation [Next.js]() app
- `apps/web`: a sample web [Next.js]() app
- `packages/ui`: a stub React component library shared by both `web` and `docs` applications
- `packages/config`: shared `tailwindcss`, `eslint` configurations (includes `eslint-config-next`, `eslint-config-prettier`, `eslint-plugin-prettier` etc..)
- `packages/tsconfig`: `tsconfig.json`s which can be used by extending them throughout the monorepo
