# React tutorial with modern structure

## How to create this project

Execute this command:

```sh
npx create-react-app react_tutorial_typescript --template typescript
```

## Directory structure

| directory       | detail                                               |
| --------------- | ---------------------------------------------------- |
| `node_modules`  | Imported modules                                     |
| `public`        | Static files                                         |
| `src`           | Source codes                                         |
| `.eslintrc.js`  | Config file of `ESLint`                              |
| `.gitignore`    | `.gitignore` file to avoid tracing specific packages |
| `.prettierrc`   | Config file of `Prettier`                            |
| `package.json`  | Config file of dependencies, npm-scripts...          |
| `tsconfig.json` | Config file of `TypeScript`                          |
| `yarn.lock`     | Version lists of imported dependencies               |

## How to set up ESLint and Prettier with Typescript

1. Install following dependencies about `ESLint`

```sh
# In this command, Typescript will also be upgraded
yarn add eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --dev
```

2. Configure files of `ESLint`

```sh
yarn run eslint --init
```

3. Install following dependencies about `ESLint` and `Prettier`

```sh
yarn add prettier eslint-config-prettier --dev
```

4. Edit `.eslintrc.js` as follows (Add `prettier` in extends)

```js
extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
],
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
