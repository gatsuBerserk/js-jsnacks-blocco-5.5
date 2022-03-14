/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */
const ortaggi =[
    {
        tipo : "zucchine", 
        varietà : "calabrese", 
        peso: "1000g", 
        lunghezza : "50cm",
    },
    {
        tipo : "zucchine", 
        varietà : "siciliana", 
        peso: "500g", 
        lunghezza : "30cm",
    }, 
    {
        tipo : "zucchine", 
        varietà : "trentina", 
        peso: "15g", 
        lunghezza : "20cm",
    }, 
    {
        tipo : "zucchine", 
        varietà : "lucana", 
        peso: "24g", 
        lunghezza : "20cm",
    }, 
    {
        tipo : "zucchine", 
        varietà : "romana", 
        peso: "200g", 
        lunghezza : "10cm",
    }, 
    {
        tipo : "zucchine", 
        varietà : "fiorentina", 
        peso: "10g", 
        lunghezza : "5cm",
    }, 
    {
        tipo : "zucchine", 
        varietà : "piemontese", 
        peso: "3g", 
        lunghezza : "1cm",
    }, 
    {
        tipo : "zucchine", 
        varietà : "genovese", 
        peso: "89g", 
        lunghezza : "50cm",
    }, 
    {
        tipo : "zucchine", 
        varietà : "veneziana", 
        peso:"3g", 
        lunghezza : "10cm",
    }, 
    {
        tipo : "zucchine", 
        varietà : "ascolana", 
        peso: "50g", 
        lunghezza : "5cm",
    },  
] 

console.log(ortaggi) 

 
let pesoTot= 0;
const zucchineMature = []; 
const zucchinePiccole= []; 
let pesoZucchineMature= 0;
let pesoZucchinePiccole= 0;
ortaggi.forEach((element) => { 
    // peso totale
    pesoTot += parseInt(element.peso); 
    // dimensione 
    if (parseInt(element.lunghezza) >= 15){
        zucchineMature.push(element) 
        // peso selezione
        pesoZucchineMature += parseInt(element.peso);
    }else{
        zucchinePiccole.push(element) 
        pesoZucchinePiccole += parseInt(element.peso);
    }
}); 

console.log(pesoTot, zucchineMature, zucchinePiccole, pesoZucchineMature, pesoZucchinePiccole) 
