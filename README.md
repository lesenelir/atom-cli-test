# atom-cli-test

> A Cli for Atom Test

Thanks for [How to Create Your Own CLI with Node.js](https://javascript.plainenglish.io/how-to-create-your-own-cli-with-node-js-9004091a64d5) article.


### two steps
- Creating a cli npm package.

- Packaging, setting up template projects.


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


### Libraries
- arg: parse command line parameters.

- inquirer: create an interactive command line interface.

- execa: is used to run commands.

- chalk: is a terminal string styling tool.

- listr: is a terminal task list.

- ncp: is a tool for asynchronous and recursive copying.

- pkg-install: provides a platform-independent package installer.


