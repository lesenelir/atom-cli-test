import inquirer from 'inquirer'

import type {Options, RawOptions} from '../types'

// default values for unspecified args === default parameter object
const defaultOptions: Options = {
  git: false,
  install: true,
  template: 'javascript'
}

// --yes flag is passed
const skipOptions: Omit<Options, 'template'> = { // delete template property
  git: true,
  install: true
}

// pass an object parameter, and return a Promise<Object> resolved
export async function promptForMissingOptions(options: RawOptions): Promise<Options> {
  if (options.skipPrompts) {
    options = {...options, ...skipOptions}
  }

  // questions array
  const questions = []

  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project template to use',
      choices: [
        { name: 'JavaScript', value: 'javascript' },
        { name: 'TypeScript', value: 'typescript' }
      ],
      default: defaultOptions.template
    })
  }

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?',
      default: defaultOptions.git
    })
  }

  if (!options.install) {
    questions.push({
      type: 'confirm',
      name: 'install',
      message: 'Install packages?',
      default: defaultOptions.install
    })
  }

  const answers = await inquirer.prompt(questions)

  return {
    git: options.git || answers.git,
    install: options.install || answers.install,
    template: options.template || answers.template
  }
}
