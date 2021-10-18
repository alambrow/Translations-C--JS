// Put your code here

const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
     "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
 ];
 
 console.log("All Pace Names");
 
 for (const name of names) {
   console.log(name);
 }

//  const hasTheInIt = (name) => {
//      if (name)
//  }

//  const theNames = names.filter(hasTheInIt)

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

const theNames = filterItems(names, 'the');
console.log("\n");
console.log("'The' Place Names");

for (let i = 0; i < theNames.length; i++) {
    console.log(theNames[i])
}