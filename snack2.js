// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".

const lanciaDado = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dado = Math.floor(Math.random() * 6) + 1;
            if (Math.random() < 0.2) { 
                reject("Dado incastrato");
            } else {
                resolve(dado);
            }
        }, 3000);
    });
};
lanciaDado()
.then(dado=>console.log(dado))
.catch(error=>console.error(error));