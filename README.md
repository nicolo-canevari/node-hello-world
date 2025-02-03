# node-hello-world
Esercizio: node-hello-world

Consegna:
1.Creiamo la prima applicazione con NodeJs e inizializziamola con npm init

2. Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”. Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.
   
3. Impostiamo ora uno script “start” in package.json e facciamo in modo di lanciare il nostro script con npm run start
   
4. Impostiamo un nuovo script “watch” in package.json che possa essere lanciato con npm run watch e che aggiorni in tempo reale le modifiche ai nostri file. Lanciamolo e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. Dovremmo vedere il terminale senza fermare e rilanciare il server.
   
Bonus
Proviamo a installare un pacchetto, (tipo chalk) proviamo ad utilizzarlo e aggiungere la cartella dei moduli scaricati in .gitignore

---------------------------------------------------------------------------

Svolgimento:
1. Eseguo il comando "npm init" per inizializzare un nuovo progetto Node.js (nella cartella dell'esercizio).

2. Quando mi viene chiesto il "package-name" inserisco "hello-world-app".

3. Durante la procedura di inizializzazione salto tutte le domande per generare il package.json con i valori predefiniti e alla fine confermo.

4. Una volta creato il file "package.json" creo il file index.js e scrivo un consol.log per stampare il risultato sul terminale, con "node index.js" verifico se appare la scritta "Hello World".

5. Modifico il file "package.json" e aggiungo uno script "start" per eseguire facilmente il file con l'inserimanto di "npm run start" sul terminale.

6. Installo la libreria nodemon ( npm install --save-dev nodemon ) che mi permette di monitorare le modifiche ai file in tempo reale. Per configurare watch lo nello script di package.json

7. Eseguo watch con il comando ( npm run watch ) 

---- Bonus ----
 Installo il pacchetto "chalk" (npm install chalk)

1. All'interno del file index.js modifico il codice per utilizzare chalk e colorare il testo. Visto che chack è una versione "^5.4.1" uso import anzichè require (CommonJS) e aggiungo "type": "module" nel .json abilitare il supporto ai moduli ES6 in Node.js (ES6: definisce le regole e le funzionalità che devono essere implementate dai motori JavaScript per garantire che il codice scritto in JavaScript sia compatibile tra diversi ambienti (browser, Node.js, ecc.).)

2. Creo il file .gitignore ( New-Item .gitignore -ItemType File )

3. Aggiungo il file.gitignore ( git add .gitignore ), faccio il commit delle modifiche ( git commit -m "Aggiunto .gitignore per ignorare la cartella node_modules/" ) e infine eseguo il push del commit su GitHub ( git push ).