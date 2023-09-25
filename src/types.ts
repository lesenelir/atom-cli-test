// Types of terminal input parameters
// create-atom-project --git --install --skipPrompts
// create-atom-project -g -i -y
export type Args = string[]


// Parse the terminal input parameters into an object type.
export type RawOptions = {
  git: boolean,
  install: boolean,
  skipPrompts: boolean,
  template?: string,
}
