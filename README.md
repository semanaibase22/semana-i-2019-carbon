# semana-i-starter-app

This repo contains a bare-bones example of how to create an application using Webpack, including importing a module from `node_modules`.

## Getting started

Clone this repository and install its dependencies:

```bash
npm install
```

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`. The `webpack.config.js` file tells Webpack how to create this bundle, starting with `src/main.js` and including all its dependencies, including [carbonldp](https://carbonldp.com).


`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:3000](http://localhost:3000).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## License

[MIT](LICENSE).
