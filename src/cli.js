import { createProject } from './main';
import { parseArgumentsIntoOptions } from "./utils/parse-arguments-into-options";
import { promptForMissingOptions } from "./utils/prompt-for-missing-options";
export async function cli(args) {
    const rawOptions = parseArgumentsIntoOptions(args); // string -> raw object
    const options = await promptForMissingOptions(rawOptions); // raw object -> object options
    // console.log(options)
    await createProject(options);
}
