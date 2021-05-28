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
   
    


for(var i=0; i < enemyNames.length; i++) {
   var pickedEnemyName = enemyNames[i];
   enemyHealth = 50;
   //Call fight function with enemy-robot
   fight(pickedEnemyName);
}