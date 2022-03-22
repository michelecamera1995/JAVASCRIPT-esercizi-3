console.log("js-ok")


//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

let zucchine = [
    {
        varietà: 'Zucchina nera',
        peso: 80,
        lunghezza: 22,
    },
    {
        varietà: 'Zucchino romanesco',
        peso: 65,
        lunghezza: 17,
    },
    {
        varietà: 'Zucchino fiorentino',
        peso: 50,
        lunghezza: 14,
    },
    {
        varietà: 'Zucchina napoletana',
        peso: 55,
        lunghezza: 16,
    },
    {
        varietà: 'Zucchine tonde',
        peso: 57,
        lunghezza: 19,
    },
    {
        varietà: 'Zucchine trombetta',
        peso: 58,
        lunghezza: 12,
    },
    {
        varietà: 'Zucchina pâtisson',
        peso: 59,
        lunghezza: 10,
    },
    {
        varietà: 'Zucchino giallo',
        peso: 45,
        lunghezza: 13,
    },
    {
        varietà: 'Zucchino rugoso friulano',
        peso: 68,
        lunghezza: 10,
    },
    {
        varietà: 'Zucchina Crookneck',
        peso: 70,
        lunghezza: 11,
    },
];

const pesozucchine = somma(zucchine);

function somma(sum) {
    let somma = 0;
    for (let i = 0; i < sum.length; i++) {
        const classe = sum[i];
        somma += classe.peso;
    }
    return somma;
}



console.log('il peso totale di tutte le zucchine è ' + pesozucchine + ' grammi');