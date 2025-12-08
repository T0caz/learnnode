import boxen from 'boxen';
import chalk from 'chalk';

console.log(boxen(chalk.red('unicorn'), { padding: 1 }));

console.log(boxen('unicorn', { 
    padding: 1, 
    margin: 1, 
    borderStyle: 'double' 
}));

console.log(boxen('unicorns love rainbows', { 
    title: 'magical', 
    titleAlignment: 'center' 
}));


console.log(boxen(chalk.blue('Sinine kastike'), { 
    padding: 1, 
    borderColor: 'blue', 
    borderStyle: 'round' 
}));


console.log(boxen('Paks raam', { 
    padding: 1, 
    borderStyle: 'bold' 
}));


console.log(boxen('Kastike varjuga', { 
    padding: 1, 
    margin: 1, 
    borderStyle: 'classic', 
    backgroundColor: 'black', 
}));


console.log(boxen(
    chalk.red('v') + chalk.yellow('i') + chalk.green('k') + chalk.cyan('e') + chalk.blue('r') + chalk.magenta('k') + 'aare tekst',
    { padding: 1, borderStyle: 'single' }
));
