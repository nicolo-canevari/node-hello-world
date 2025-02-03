// Stampo il risultato sul terminale => node index.js 
// console.log("Hello World");

// Modifico il codice per utilizzare chalk e colorare il testo, uso require per importare il pacchetto nel mio codice 
// const chalk = require('chalk');

// Uso import al posto di require perchè chalck è in versione "^5.4.1", l'API è cambiata e il modo di usare i colori è diverso rispetto alle versioni precedenti
import chalk from 'chalk';

// Stampo il risultato sul terminale => node index.js / npm run start
console.log(chalk.red.bold('Hello World'));




