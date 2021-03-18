/* Descrizione
chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */

/* prova 
console.log('Hello World')
*/
//CHIEDI IL NOME 
var nome = prompt('Qual è il tuo nome?');
console.log(nome);
console.log(typeof(nome));

//Chiedi il suo cognome
var cognome = prompt('Qaul è il tuo cognome?')
console.log(cognome);
console.log(typeof(cognome));

//Colore preferito
var colore = prompt('Qual è il tuo colore preferito?')
console.log(colore);
console.log( typeof (colore));


//infine scrivi sulla pagina nome/cognome/colore-preferito/21
document.getElementById('box-j').innerHTML = ('IvaDociPetrolio21')