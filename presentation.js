function start() {
    console.log("1. Lister les clients");
    console.log("99. Sortir");

    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Votre choix : ',function(rep) {
        switch (rep) {
            case '1':
                console.log(" >> Liste des clients");
                start();
                break;
            case '99':
                console.log("Aurevoir");
                break;
        }
    });
};



exports.start = start;