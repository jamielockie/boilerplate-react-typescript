# A starting pointt for a ✨ fresh ✨ project with React, and Typescript

The default setup is simply React and Typescript (with Prettier).

To add some other useful stuff:
1) [ESLint](##eslint-with-babel))
2) [Jest](##jest)
3) [Tailwind CSS (with Babel + PostCSS)](##tailwind-css-with-babel-post-css)

## Building and running on your local machine

1) Install dependencies

```sh
yarn
```
or 
```
npm install
```

To run web dev server:

```sh
yarn start
```
or
```sh
npm run start
```

To create a production build:

```sh
yarn build
```

```sh
npm run build
```

## Personalize!
Search globally for `fresh-project` and adjust things accordingly!

# To Run from dist:
```
yarn build
```
and then open the file `dist/index.html` in your browser

# Adding things:

## ESLint

Update package.json:
```json
 "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "@types/react-dom": "^16.9.8",
    "@types/react": "^16.9.43",
    "eslint-config-prettier": "^6.11.0",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-react": "^7.20.3",
    "eslint": "^7.5.0",
    "parcel-bundler": "^1.12.4",
    "prettier": "^2.0.5",
  }
```

create `.eslintrc.json` at root (recommended config):
```json
{
  "rules": {},
  "env": {
    "es6": true,
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "plugins": [
    "react"
  ]
}
```

## Tailwind CSS (with Babel + PostCSS)

Update `package.json`:
```json
"dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "tailwindcss": "^1.5.2"
  },
  "devDependencies": {
    "parcel-bundler": "^1.12.4",
    "@types/react": "^16.9.43",
    "@types/react-dom": "^16.9.8",
    "@babel/core": "^7.10.5",
    "@babel/preset-env": "^7.10.4",
    "@babel/preset-react": "^7.10.4",
    "postcss-modules": "^3.2.0",
    "autoprefixer": "^9.8.5",
    "prettier": "^2.0.5",
  }
```

Create `.babelrc` at root:
```
{
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react'
  ]
}
```


Create `postcss.config.js` in root:
```
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
};
```

## Jest
Update package.json:
```json
  "scripts": {
    "start": "parcel src/index.html",
    "build": "parcel build src/index.html",
    "test": "jest"
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "parcel-bundler": "^1.12.4",
    "@types/react": "^16.9.43",
    "@types/react-dom": "^16.9.8",
    "prettier": "^2.0.5",
    "jest": "^26.1.0"
  }
```


## Credits

Boilerplate inspiration from the excellent:  [createapp.dev](https://createapp.dev/)

