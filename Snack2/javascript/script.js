console.log("js-ok")

//Crea 10 oggetti che rappresentano una zucchina. 
//Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.


const lengthUp = [];

const lengthDwn = [];

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

const list = confront(zucchine)
const weightone = somma(lengthUp);
const weighttwo = somma(lengthDwn);


console.table(lengthUp);
console.table(lengthDwn);
console.log(weightone + '  grammi totali zucchine con lunghezza superiore a 15 cm');
console.log(weighttwo + '  grammi totali zucchine con lunghezza inferiore a 15 cm');



function confront(object) {
    for (let i = 0; i < object.length; i++) {
        const zucchine = object[i];
        // distinguo le zucchine nei due array
        if (object[i].lunghezza > 15) {
            lengthUp.push(object[i]);
        } else {
            lengthDwn.push(object[i]);
        }
    }
    return { lengthUp, lengthDwn };
}


function somma(sum) {
    let somma = 0;
    for (let i = 0; i < sum.length; i++) {
        const classe = sum[i];
        somma += classe.peso;
    }
    return somma;
}

