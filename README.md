# atom-cli-test

> A CLI for Atom Test

Thanks for [How to Create Your Own CLI with Node.js](https://javascript.plainenglish.io/how-to-create-your-own-cli-with-node-js-9004091a64d5) article.


### some command line:

```
npm link
```

```
npx rollup -c rollup.config.js
```

```
npx atom-cli-test
```


### some rollup parameters:
```
"scripts": {
"build": "rollup -c rollup.config.js",
"dev": "rollup -c rollup.config.js -w"
},
```

- `-c` or `--config` - path to a rollup config file (if omitted, rollup looks for `rollup.config.js` in the current directory)
- `-w` or `--watch` - watch files in bundle and rebuild on changes


### Library
- arg: parse command line parameters

- inquirer: create an interactive command line interface

