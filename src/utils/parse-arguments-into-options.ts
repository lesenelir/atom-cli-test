import arg from "arg"

import type {Args, RawOptions} from "../types"

// parse arguments function
// input is an array of strings, and output is an object
export function parseArgumentsIntoOptions(rawArgs: Args): RawOptions {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install'
    },
    {
      argv: rawArgs.slice(2)
    }
  )

  return {
    git: args['--git'] || false,
    install: args['--install'] || false,
    skipPrompts: args['--yes'] || false,
    template: args._[0]
  }

}


