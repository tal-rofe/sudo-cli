<p align="center">
	<a href="https://github.com/tal-rofe/sudo-cli">
    	<img src="https://img.shields.io/github/actions/workflow/status/tal-rofe/sudo-cli/integrate.yaml?label=CI&logo=GitHub" alt="CI status">
  	</a>
	<a href="https://www.npmjs.com/package/sudo-cli">
    	<img src="https://img.shields.io/npm/dm/sudo-cli?logo=NPM" alt="npm downloads">
  	</a>
	<a href="https://github.com/tal-rofe/sudo-cli">
    	<img src="https://img.shields.io/npm/l/sudo-cli" alt="npm license">
  	</a>
	<a href="https://github.com/tal-rofe/sudo-cli">
    	<img src="https://img.shields.io/npm/v/sudo-cli?label=version" alt="version">
  	</a>
</p>

<p align="center"><img src="assets/logo.jpeg"/></p>

<h1 align="center">sudo-cli</h1>

> Run any script with privileged permissions, prompting the user with a graphical OS dialog if necessary

<p align="center"><img src="assets/example.png" width="200"/></p>

**This package is under development (and slow one.. 😐) so feel free to help it by making a PR**

## Installation

**Globally**

```bash
npm install --global sudo-cli
```

**Locally**

```bash
npm install --save-dev sudo-cli
```

## Usage

You need to provide the name of your application for your application (optional) and the command to be executed with privileged permissions.

```sh
$ sudo-cli --name "[your app name]" "<command to run>"
```

## ESM support

sudo-cli supports **only** ESM modules. For any issue regarding this, please visit this link https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

## Support

For support, email talrofe111@gmail.com or open an issue at [sudo-cli issues](https://github.com/tal-rofe/sudo-cli/issues).

## Contributing

Contributions are always welcome!

See `CONTRIBUTING.md` for ways to get started.

Please adhere to this project's `CODE_OF_CONDUCT.md`.

If you want to make PR please first check your code by:

1. Run `pnpm i` to install dependencies
2. Build your source code by running `pnpm build`
3. Run `node ./bin/sudo-cli.js -n "test" "test"` and check results of your code

## Authors

-   [@tal-rofe](https://github.com/tal-rofe)

## License

[MIT](https://choosealicense.com/licenses/mit/)
