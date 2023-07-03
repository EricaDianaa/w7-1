
//1) ESERCIZIO
//creazione della classe
class User{
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName
        this.lastName= _lastName
        this.age= _age
        this.location= _location
    }
    //creazione funzione (differenza d'età) 
    calculationAge(utente){
       
     if (this.age===utente) { 
      return this.firstName   + " " + "ha la stessa età di" + " " + user2.firstName
     }
     else if(this.age > utente){
        return this.firstName   + " " + "è più grande di" + " " + user2.firstName
     }
     else{
        return   this.firstName  + " "+ "è più picColo di"  + " " + user2.firstName
    }
     }
    }
    

const user1= new User("Michele", "Brondi", 15, "Sardegna")
console.log(user1)

const user2= new User("Mario", "Rossi", 10, "Sardegna")
console.log(user2)
console.log(user1.calculationAge(user2.age))


//2) ESERCIZIO 2 

//prendo gli elementi HTML
 let petNameInput=document.getElementById("petName")
 let ownerNameInput=document.getElementById("ownerName")
 let speciesInput=document.getElementById("species")
 let breedInput=document.getElementById("breed")
 let inviaInput=document.querySelector("button")

//creo array per salvare i contatti
const list=[]

//creazione della classe Pet
class Pet{
constructor(_petName, _ownerName, _species, _breed){
    this.petName = _petName
    this.ownerName= _ownerName
    this.species= _species
    this.breed= _breed
}
//creazione funzione (il padrone è lo stesso?)
sameOwnerName(){
  
 if ( this.ownerName===ownerNameInput.value) {
    return true
 }
 else{
   return false
 }

}
}

//creo la funzione che manderà a schermo i contatti
const addList=function(){
    let ul = document.querySelector("ul")//seleziono ul HTML
    ul.innerText= " "//lo svuoto
    list.forEach(Pet => {//creo per ogni pet un li a cui poi assegno il valore 
        const newLi= document.createElement("li")
        newLi.innerText = `${Pet.petName}- ${Pet.ownerName} - ${Pet.species} - ${Pet.breed}`
        ul.appendChild(newLi)
   console.log(newLi)
    });
}
//funzione che si avvia all'invio del bottone
const form=document.querySelector("form")
form.addEventListener("submit", function(e){
e.preventDefault() //serve per bloccare il comportamento del form
const contact= new Pet(petNameInput.value, ownerNameInput.value, speciesInput.value, breedInput.value)
console.log(contact) 
//avvio la funzione  sameOwnerName al click del bottone
 let button=document.querySelector(".inviaForm")
 button.addEventListener("click", function(){
    console.log(contact.sameOwnerName())
 })

list.push(contact)// pusho nell'array
petNameInput.value = ""//svuoto dopo il click del tasto invio 
ownerNameInput.value = ""
speciesInput.value = ""
breedInput.value = ""
addList()

})
