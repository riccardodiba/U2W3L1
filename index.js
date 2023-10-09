
class User {
  constructor(_firstName, _lastName, _age, _location ) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  show (){
      

return  `mi chiamo ${this.firstName} ${this.lastName},ho ${this.age} e vivo a ${this,this.location}`
}
}

const costantino = new User("costantino","di_bari","23","bari")
const riccardo = new User ("riccardo","di_bari","29","gravina_in_puglia")
console.log(riccardo.show())
console.log(costantino.show())



function confrontoEta (user1,user2) {
    
    if (user1.age > user2.age){
        console.log (`${user1.firstName} ${user1.lastName} è piu vecchio di ${user2.firstName} ,${user2.lastName}` )
    } else { console.log (`${user2.firstName} ${user2.lastName} è piu vecchio di ${user1.firstName} ,${user1.lastName}` )

    }
}

 
confrontoEta(costantino,riccardo)


let petNameField = document.getElementById('petname')
let ownerNameField = document.getElementById('owner')
let speciesField = document.getElementById('species')
let breedField = document.getElementById('breed-')

let petList = document.getElementById('petList')
let addButton = document.getElementById('add')

let pets = []

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }

  checkSameOwner(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true
    } else {
      return false
    }
  }
}

const renderList = function () {
  petList.innerHTML = '' 
  pets.forEach((pet) => {
    const newLi = document.createElement('li')
    newLi.innerText =
      'Nome: ' + pet.petName + ', proprietario: ' + pet.ownerName + ", specie: " + pet.species + ", razza: " + pet.breed
    petList.appendChild(newLi)
  })
}

addButton.onclick = function () {
  let newPet = new Pet(
    petname.value,
    owner.value,
    species.value,
    breed.value
  )
  pets.push(newPet)
  renderList()
  petname.value = '' 
  owner.value = '' 
  species.value = '' 
  breed.value = '' 
}
    
    
    

