var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this console.log(PlayerName, playerAttack, playerHealth);

var enemyNames = [" Roborto", " Amy Android", " Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Create Function
var fight = function(enemyName) {
   //fight function statements

   //repeat and execute as long as the player and enemy-robot is alive
   while(playerHealth > 0 && enemyHealth>0) {
      //place fight function code block here...
      //Alert players they are starting the round

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      //if player chooses to skip
     if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?")

      //if yes(true), leave fight {
     if (confirmSkip) {
     window.alert(playerName + " has chosen to skip the Fight. Goodbye!");
     //subtract money from playerMoney for skipping
     playerMoney = playerMoney - 10;
     console.log("playerMoney", playerMoney);
     break;
     }
   }
    
      // If player chooses to fight, then fight
       enemyHealth = enemyHealth - playerAttack;
   
        // Log a resulting message to the console so we know that it worked.
           console.log(
           playerName + " attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
           );
   
        // Check enemy's health.
        if (enemyHealth <= 0) {
           window.alert(enemyName + " has died!");
           //award player money for winning
           playerMoney = playerMoney + 20;

           //prevent robot from attacking after dead
           break;

      } else {
           window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
   
       // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
   
       // Log a resulting message to the console so we know that it worked.
           console.log(
           enemyName + " attacked" + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
           );
       
        //check player's health
        if (playerHealth <= 0) {
           window.alert(playerName + " has died!");
           //prevent fighting after dead
           break;
           
        } else {
           window.alert(playerName + " still has " + playerHealth + " health left.");
        }
   }
};
   
    
//function to start a new game
var startGame = function() {
   //reset player stats
   playerHealth = 100;
   playerAttack = 10;
   playerMoney = 10;

   //other logic remains the same
   for(var i=0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
         window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
         var pickedEnemyName = enemyNames[i];
         enemyHealth = 50;
         //Call fight function with enemy-robot
         fight(pickedEnemyName);
      }
      //play again
      else {
         window.alert("You have lost your robot in battle! Game Over!");
         break;
      }
   } 

   //after the loop ends, player is either out of health or enemies to fight, so run the endGame Function
   endGame();
};

//function to end the entire game
var endGame = function() {
   window.alert("the game has now ended. Let's see how you did!");

   //if player is still alive, player Wins!
   if (playerHealth>0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
   }
   else {
   window.alert("You've lost your robot in the battle.");
   }

   //ask player if they'd like to play again
   var playAgainConfirm = window.confirm("Would you like to play again?")

   if (playAgainConfirm) {
      //restart game
      startGame();
   }
   else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon.")
   }
}

// start a new game when the page loads
startGame();