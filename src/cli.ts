import {parseArgumentsIntoOptions} from "./utils/parse-arguments-into-options"

import {Args} from "./types"

export function cli(args: Args) {
  const options = parseArgumentsIntoOptions(args) // object
  console.log(options)
}
