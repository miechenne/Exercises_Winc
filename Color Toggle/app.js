function myFunction() {
    // function
    let x = document.getElementById("myLinks")
    // select element in html
    if (x.style.display === "block") {
        // check to see which style is applied
        x.style.display = "none"

    } else {
        x.style.display = "block"
    }
}


// feedback was given that there needed to be listeners and no JS in the HTML,
// so now there is a listener on the LIs that is triggered if the right one is clicked.
document.getElementById('red').onclick = function (){
    // listener for the onclick
    console.log("red")
    // shows in the console red is clicked
    document.body.style.backgroundColor = 'red'; this.style.color = '#FFF';
    // changes the body color of the page and the style of the current LI
    myFunction()
    // closes the nav/menu again.
}
document.getElementById('green').onclick = function (){
    console.log("green")
    document.body.style.backgroundColor = 'green'; this.style.color = '#FFF';
    myFunction()
}
document.getElementById('blue').onclick = function (){
    console.log("blue")
    document.body.style.backgroundColor = 'blue'; this.style.color = '#FFF';
    myFunction()
}






