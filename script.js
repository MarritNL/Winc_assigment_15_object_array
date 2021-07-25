
// object
/* let person= {
    name: 'John',
    age: 30
}
// dot notation
person.name = 'Mary';
// bracket notation
person ['name']= 'Mary';

// dynamic selector
let selection = 'name';
person[selection]= 'Mary';

// array

let selectedColours =['red', 'blue'];
selectedColours[2]='green'
console.log (selectedColours.length)
*/

let person = {
    name: 'Marrit',
    age: 38,
    evaluation: [7,10,9]
}
console.log (person);
console.log (person.name);
console.log (person.age);
console.log (person.evaluation);

console.log (person);
console.log (person['name']);
console.log (person['age']);

// de waarde van person.evaluation is een array met length=3 

let selectedColours = ['green', 'blue', 'red'];
console.log (selectedColours);
console.log (selectedColours.length);

let first = selectedColours [0];
console.log (first);
let last = selectedColours [selectedColours.length-1];
console.log (last);

let newlength = selectedColours.push ('yellow');
console.log (selectedColours);
let newlength2 = selectedColours.push (5);
console.log (selectedColours);
let newlength3 = selectedColours.push ({greeting: "hi, ik ben een object", })
let last2 = selectedColours [selectedColours.length-1];
console.log (last2);

// deel 3 kattenrassen
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]
console.log (catBreeds);
//1  Naam kattensoort 3: American Bobtail
console.log("Naam kat 3:", catBreeds[2].name);
//2  Energylevel kattensoort 1: 5
console.log("energylevel kat 1:", catBreeds[0].energy_level);
//3  Eerste temperament kat 2: Affectionate
console.log("eerste temperament kat 2:", catBreeds[1].temperament[0]);
//4 Laatste temperament kat 3: Sensitive
console.log("laatste temperament kat 3:", catBreeds[2].temperament[catBreeds[2].temperament.length-1]);
//5  Favo voedsel van kat 3: meaty things
console.log("favoriet voedsel kat 3:", catBreeds[2].food.favourite_food);