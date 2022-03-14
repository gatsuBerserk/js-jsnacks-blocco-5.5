/**
    *  Dato un array, genera randomicamente due numeri:
    *   il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
    *   il secondo numero che dovrà essere sempre minore del primo numero
    *
    * Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
    * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
*/ 

const char = ["parole", "senza", "senso"]; 
const numbers1 = randomNumber(0, char.length - 1);
const numbers2 =randomNumber(0, numbers1 -1); 

function arraySplit(array, numA, numB){
    if (numA >= array.length || numB >= array.lenght ){
        return false;
    }else{ 
        const newArray=[];
        for (let i = numB; i <= numA; i++){
            newArray.push(array[i]);
        }
    } return newArray;
};

function randomNumber(min, max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
} 
console.log(char); 
console.log(numbers1, numbers2)
console.log(arraySplit(char, numbers1, numbers2))