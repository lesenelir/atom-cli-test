import {createProject} from './main'
import {parseArgumentsIntoOptions} from "./utils/parse-arguments-into-options"
import {promptForMissingOptions} from "./utils/prompt-for-missing-options"

import type {Args, Options, RawOptions} from "./types"

export async function cli(args: Args) {
  const rawOptions: RawOptions = parseArgumentsIntoOptions(args) // string -> raw object

  const options: Options = await promptForMissingOptions(rawOptions) // raw object -> object options

  // console.log(options)
  await createProject(options)
}
