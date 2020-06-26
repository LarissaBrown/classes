// Requirements:
const  readline = require('readline-sync')
const chalk = require('chalk');
// Create a class for a player that has the following properties:

class Player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
    this.name = name //typeof === "string"
    this.totalCoins = totalCoins //typeof === "number"
    this.status =  status //of type String (options are Powered Up, Big,Small, and Dead)
    this.hasStar = hasStar  // hasStar of type Boolean (Is a star active?)
    
    this.gameActive = gameActive //typeof === "boolean"// gameActive of type Boolean, true by default, becomes false when status is Dead
    

}
    setName(namePicked) {
        namePicked = readline.question("Which name do you want? Type in 'Mario' or 'Luigi'.")
        this.name = namePicked
    }// setName of type function - sets 'name' to "Mario" or "Luigi". Has a parameter called namePicked where you pass in "Mario" or "Luigi"
    
    gotHit() {
        if(status = "") {
            this.status = "Powered Up"
        }else if(status === "Powered Up") {
            this.status = "Big"
        }else if (status === "Big") {
            this.status = "Small"
        }else{
            this.status = "Dead"
        }
        }
    // gotHit of type function - this is called whenever the player is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
    
    gotPowerup() {
        if(status = "Powered Up") {
            this.hasStar = true;
            readline.prompt("You get a star!")
        }else if(status = "Big") {
            this.status = "Powered Up"
        }else if(status = "Small") {
            this.status ="Big"
        }
    }// gotPowerup of type function - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)

    addCoin() {

        this.totalCoins += 1
    }// addCoin of function - adds a coin to totalCoins
    
    print() {

    }// print of type function - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:


}

// Name: Luigi,
// Status: Small, etc, etc
// Use that class to create the object.

// Create a random range function that returns either 0, 1, or 2.
setInterval() {

function randomRange () {
    const randomNum = Math.floor(Math.random)* 3;
    if(randomNum === 0) {
        Player.gotHit()
    }else if(randomNum === 1) {
        Player.gotPowerup()
    }else{
        Player.addCoin()
    }
    Player.print()
}
}
// If the value is 0 call the gotHit() function on the object.
// If the value is 1 call the gotPowerup() function on the object
// If the value is 2 call the addCoin() function

// Then call the print method on the object.

// Now put the random range function inside a setInterval function that ends after gameActive === false

// The end product will look something like this: