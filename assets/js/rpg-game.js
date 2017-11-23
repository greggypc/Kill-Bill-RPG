// RPG Game

$(document).ready(function() {

	// var player;
	// var opponent;
	// var healthPoints = 0;
	// var attackPoints = 0;
	// var counterAttackPoints = 0;

	//Variables
	//========================================
	//may need to add 'type' of defender or opponent
	var characters = {
        fighter: [{
        name: "Beatrix Kiddo",
        healthPoints: 129,
        attackPower: 4,
        counterAttackPower: 7
      }, {
        name: "Elle Driver",
        healthPoints: 133,
        attackPower: 3,
        counterAttackPower: 9
      }, {
      	name: "O Ren Ishi",
        healthPoints: 139,
        attackPower: 4,
        counterAttackPower: 11
      }, {
      	name: "Vernita Green",
        healthPoints: 135,
        attackPower: 3,
        counterAttackPower: 7
      }]
    };

	//Initialize Game
	//========================================
	function layoutGame() {
		$("#presentFourFighters").html('<img src="../week-4-rpg-game/assets/images/kill-beatrix-kiddo.jpg" />');
		$("#presentFourFighters").append('<img src="../week-4-rpg-game/assets/images/kill-elle-driver.jpg" />');
		$("#presentFourFighters").append('<img src="../week-4-rpg-game/assets/images/kill-o-ren-ishii.jpg" />');
		$("#presentFourFighters").append('<img src="../week-4-rpg-game/assets/images/kill-vernita-green.jpg" />');
	}


layoutGame();
}); //end document.ready