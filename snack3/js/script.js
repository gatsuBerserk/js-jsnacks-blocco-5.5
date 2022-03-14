/**
 * 
 * 
    Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 * 
 */ 

    const numbers =  [1, 2, 3,]; 
    const chars = ["a", "b", "c", "d", "e"];  
    
    function arrayMix (arreyA, arrayB){
        // prendiamo la lunghezza dell'array più piccolo
        const minLenght = Math.min(arreyA.lenght , arrayB.lenght); 
        const newArrayMix = []; 
        for (let i = 0 ; i < minLenght; i++){
            newArrayMix.push(`${arreyA[i]},${arrayB[i]}`)
        }
         
        return newArrayMix;
    }
     console.log(numbers, chars); 
     console.log(arrayMix(numbers, chars))
