#!/usr/bin/env node
// The first line is called shebang,
// and it tells the shell which interpreter to use to execute the file.
// This file is executable, which is entry point of the cli tool.

console.log(2)

import {cli} from "../dist/cli.js"

cli(process.argv)

