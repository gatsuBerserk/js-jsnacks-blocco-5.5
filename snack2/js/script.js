/**
 * 
    A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
    B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34)
    C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti.
    * 
 */ 
// revers
    function reverse (string){ 
        let splitString = string.split(""); 
        let reverse = splitString.reverse(); 
        let join = reverse.join(""); 
        return join
    }; 

    console.log(reverse("Carmine")); 

// opposto 
function opposto(number){ 
    return -number   
}  

console.log(opposto (21)); 

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "qwerty", "asdf", "asdfghjk", "nkoiuyt"]; 

  console.log(list) 
// uniamo con operatore ternario le deu nuove funzioni per newList
  const newList= list.map ((element) => (isNaN(parseInt(element))) ? reverse(element) : opposto(element))
    console.log(newList)


