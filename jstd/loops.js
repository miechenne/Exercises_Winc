const myColorArray = ["yellow", "blue", "red", "orange"]

let i = 0;
while (i < myColorArray.length) {
    console.log(myColorArray[i]);
    i++;
}

for (let i = 0; i < myColorArray.length; i++) {
    console.log(myColorArray[i]);
}


// new style forEach
myColorArray.forEach(color => console.log(color));

// 1. For loop 3 lines,  while loop 5 lines
// 2. ForEach way 1 line.
// 3. Array methods have following advantages
//      harder to get into an infinite loop
//      you don't have to "manually" remember which iteration of the loop you're in with an index variable like "i".
//      you immediately get the "thing" you're interested in, you do not have to manually grab it from the array
//      the name forEach is more easily readable and understandable

const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
};

for (let property in myColors) {
    console.log(myColors[property]);
}