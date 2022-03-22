console.log("js-ok")


//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)



const x = askUserAText("scrivi una parola!");

function inverser(x) {
    var newString = "";
    var index = (x.length - 1);

    for (var i = index; i >= 0; i--) {
        newString += x[i];
    }
    return (newString);
}

const rotateword = inverser(x);
console.log(rotateword)