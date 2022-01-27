const age = 19
if (age > 18 && age < 26) {
    console.log("allowed as your age is = " + age)
    console.log("You get 50% discount")
} else {
    console.log("not allowed")
}


const isFemale = true
if (isFemale === false){
    console.log("not welcome")
} else{
    console.log("allowed")
}


const driverStatus = "designated"
if (driverStatus === "designated"){
    console.log("allowed to drive")
} else {
    console.log("not allowed to drive")
}


const firstName = "Bram"
if (firstName === "Bram" || firstName === "Sarah"){
    console.log("Free beer")
} else {
    console.log("No free beer")
}

const totalAmount = 57
if (totalAmount > 25 && totalAmount < 50){
    console.log("Free bitterballen")
} else if(totalAmount > 50 && totalAmount < 100){
    console.log("Free Nachos")
} else if(totalAmount > 100){
    console.log("Free champagne")
}


const person = [{
    name : "Miechenne", 
    age : 26
}]

console.log(person)
const evaluations = [7, 10, 9]
console.log(evaluations)

let kees = ['green','blue','red'] 
kees.push("yellow", {greeting: "hi, I am an object"})
console.log(kees[4])


const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {favourite_food: "fish",
    medium_liked_food: "dried fruits", 
    disliked_food: "walnuts"
    }},
    {name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {favourite_food: "tuna",
    medium_liked_food: "canned food", 
    disliked_food: "all fruits"
    }},
    {name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {favourite_food: "meaty things",
    medium_liked_food: "tuna", 
    disliked_food: "canned food"
    }}
    ]

    console.log("origin cat 1:", catBreeds[2].name)
    console.log("origin cat 1:", catBreeds[0].energy_level)
    console.log("origin cat 1:", catBreeds[1].temperament[0])
    console.log("origin cat 1:", catBreeds[2].temperament[4])
    console.log("origin cat 1:", catBreeds[2].food.favourite_food)
    