var playerName = window.prompt("What is your robot's name?");
// What is this?

var playerHealth = 100;
// check to see if the value of playerHealth is greater than 0
if (playerHealth > 0) {
   console.log("Your player is still alive!");
}
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this console.log(PlayerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Create Function
var fight = function() {
    //Alert players they are starting the round
    window.alert("Welcome to Robot Gladiators!");

 var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
   // If player chooses to fight, then fight
   if (promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;

     // Log a resulting message to the console so we know that it worked.
        console.log(
        playerName + " attacked" + enemyName + ". " + enemyName + " now has" + enemyHealth + " health remaining."
        );

     // Check enemy's health.
     if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
     }
     else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
     }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
         playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
        console.log(
        enemyName + " attacked" + playerName + ". " + playerName + " now has" + playerHealth + " health remaining."
        );
    
     //check player's health
     if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
     }
     else window.alert(playerName + " still has " + playerHealth + " health left.");

  //if player chooses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?")

      //if yes(true), leave fight {
     if (confirmSkip) {
     window.alert(playerName + " has chosen to skip the Fight. Goodbye!");
     //subtract money from playerMoney for skipping
     playerMoney = playerMoney - 2;
     }

     //if no (false), ask question again by running fight() again
    else {
        fight();
    }

  } else { window.alert("You need to choose a valid option. Try again!");
  }
}
// Execute Function
fight();
