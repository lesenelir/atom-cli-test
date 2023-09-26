import chalk from 'chalk';
import Listr from 'listr';
import path from 'path';
import { fileURLToPath } from 'url';
import { copyTemplateFiles } from './utils/copy-template-files';
import { initGitRepo } from './utils/init-git-repo';
import { installPackages } from './utils/install-packages';
export async function createProject(options) {
    const targetDirectory = process.cwd();
    const currentFileUrl = import.meta.url;
    const templateDirectory = path.resolve(decodeURI(fileURLToPath(currentFileUrl)), '../../templates', options.template.toLowerCase());
    const tasks = new Listr([
        {
            title: 'copy project files',
            task: () => copyTemplateFiles(templateDirectory, targetDirectory)
        },
        {
            title: 'initial git',
            task: () => initGitRepo(targetDirectory),
            enabled: () => options.git
        },
        {
            title: 'install dependencies',
            task: () => installPackages(targetDirectory),
            skip: () => {
                if (!options.install) {
                    return 'Pass --install or -i to automatically install dependencies';
                }
            }
        }
    ]);
    try {
        await tasks.run();
        console.log('%s Project ready', chalk.green.bold('DONE'));
    }
    catch (error) {
        console.log('%s Error occurred', chalk.red.bold('ERROR'));
    }
}
