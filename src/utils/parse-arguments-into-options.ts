import arg from "arg"
import chalk from "chalk"

import {checkTemplateValidity} from "./check-template-validity"
import type {Args, RawOptions} from "../types" // type
import {templates} from "../types" // value

// parse arguments function
// input is an array of strings, and output is an object
export function parseArgumentsIntoOptions(rawArgs: Args): RawOptions {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '--template': String,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install',
      '-t': '--template'
    },
    {
      argv: rawArgs.slice(2)
    }
  )

  // const template = args._[0]?.toLowerCase();
  const template = args['--template']?.toLowerCase()
  const isTemplateValid = checkTemplateValidity(template)

  if (!isTemplateValid) {
    console.log(
      `%s You passed incorrect template: ${
        // args._[0]
        args['--template']
      }. List of supported templates: ${templates.join(', ')}`,
      chalk.yellow.bold('WARNING')
    )
  }

  const project = args._[0]?.toLowerCase()

  return {
    git: args['--git'] || false,
    install: args['--install'] || false,
    project,
    skipPrompts: args['--yes'] || false,
    template: args._[0]
  }

}


