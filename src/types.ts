// Types of terminal input parameters
// create-atom-project --git --install --skipPrompts
// create-atom-project -g -i -y
export type Args = string[]


// Parse the terminal input parameters into an object type.
export type RawOptions = {
  git: boolean,
  install: boolean,
  project: string,
  skipPrompts: boolean,
  template?: string,
}


export type Options = Omit<RawOptions, 'skipPrompts'> & { // delete skipPrompts property
  template: string
}

export const templates = ['javascript', 'typescript'] as const

export type Template = typeof templates[number]

