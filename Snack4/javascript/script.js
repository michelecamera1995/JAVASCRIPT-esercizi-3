console.log("js-ok")


//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro, es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];


function alternatePush(arr1, arr2) {
    let myArray = [];
    for (let i = 0; i < arr2.length; i++) {
        myArray.push(arr1[i]);
        myArray.push(arr2[i]);
    }
    return myArray;
}
const result = alternatePush(arr1, arr2);

console.log(result)
