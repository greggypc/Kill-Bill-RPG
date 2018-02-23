// RPG Game

//Those of you lucky enough to still have their lives, take them with you! However, leave the limbs you've lost. They belong to me now
//We have unfinished business.


$(document).ready(function() {
// Sound effect
    var openingTheme = document.createElement("audio");
    openingTheme.setAttribute("src", "assets/audio/kill_bill_trimmed.mp3");
    openingTheme.play();
	
	
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
        counterAttackPower: 7,
        role: "player"
      }, {
        name: "Elle Driver",
        healthPoints: 133,
        attackPower: 3,
        counterAttackPower: 9,
        role: "player"
      }, {
      	name: "O Ren Ishi",
        healthPoints: 139,
        attackPower: 4,
        counterAttackPower: 11,
        role: "player"
      }, {
      	name: "Vernita Green",
        healthPoints: 135,
        attackPower: 3,
        counterAttackPower: 7,
        role: "player"
      }]
    };

    var player;
    var opponent;
    var charactersToBattle = [];
    var role = null;
    var fighterImgSrc = ["../week-4-rpg-game/assets/images/kill-beatrix-kiddo.jpg",
     "../week-4-rpg-game/assets/images/kill-elle-driver.jpg",
      "../week-4-rpg-game/assets/images/kill-o-ren-ishii.jpg", 
      "../week-4-rpg-game/assets/images/kill-vernita-green.jpg"];
    // var fighterImg2 = "../week-4-rpg-game/assets/images/kill-elle-driver.jpg";
    // var fighterImg3 = "../week-4-rpg-game/assets/images/kill-o-ren-ishii.jpg";
    // var fighterImg4 = "../week-4-rpg-game/assets/images/kill-vernita-green.jpg";

	//Initialize Game
	//========================================
	function layoutGame() {
		
		// $("#fighterImages").html('<img value="characters.fighter[0]" id="fighterImg" src=' + fighterImg1 + ' />');
		// $("#fighterImages").append('<img value="characters.fighter[1]" id="fighterImg" src=' + fighterImg2 + ' />');
		// $("#fighterImages").append('<img value="characters.fighter[2]" id="fighterImg" src=' + fighterImg3 + ' />');
		// $("#fighterImages").append('<img value="characters.fighter[3]" id="fighterImg" src=' + fighterImg4 + ' />');
		$("#choosePlayerThenOpponent").html('<h2>SELECT YOUR FIGHTER!</h2>');
		console.log(characters.fighter[0].name);
		console.log(characters.fighter[1].name);
		console.log(characters.fighter[2].role);
	}

	$(".fighterImg").click(function() {
    	player = $(this).attr('id');
    	
    	if (role === null) {
    		charactersToBattle[0] = player;
    		$("#playerChosen").html('<img class="fighterImg" src=' + fighterImgSrc + ' />');
    		$(".playerName").html('<p>Beatrix Kiddo</p>');
    		$("#fighterImg1").fadeTo(500,0.4);
    		role = "enemy";
    		$("#choosePlayerThenOpponent").html('<h2>SELECT YOUR OPPONENT!</h2>');
    		console.log("just picked our player");
    		console.log(characters.fighter[0].name);
    		//playersToBattle.push() ;
		
    	} else {
    		opponent = this.id;
    		charactersToBattle[1] = opponent;
    		$("#enemyChosen").html('<img class="fighterImg" src=' + fighterImgSrc + ' />');
    		$(".enemyName").html('<p>Beatrix Kiddo</p>');
    		$("#fighterImg1").fadeTo(500,0.4);
    		$("#choosePlayerThenOpponent").html('<h2>SELECT YOUR OPPONENT!</h2>');
    		console.log("just picked our enemy");
    		attack();
    		
    	}
    });


    $(".crystalImg").click(function(){
	  if (this.id === "billy") {
		scoreCount += num1;
		$("#scoreCountHolder").html("<h1>" + scoreCount + "</h1>");
		} else if (this.id === "light") {
		scoreCount += num2;
		$("#scoreCountHolder").html("<h1>" + scoreCount + "</h1>");
		} else if (this.id === "gayle") {
		scoreCount += num3;
		$("#scoreCountHolder").html("<h1>" + scoreCount + "</h1>");
		} else if (this.id === "pepsi") {
		scoreCount += num4;
		$("#scoreCountHolder").html("<h1>" + scoreCount + "</h1>");
		} 
		gameResults();
	});  //end click function






	 function attack() {
    	// Sound effect
    	
    	openingTheme.pause();
           	var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/kill_bill_alarm-trimmed.mp3");
            audioElement.play();
            
    	console.log("battle begins");
    	$("#choosePlayerThenOpponent").html('<h2>THE BATTLE BEGINS! CLICK ATTACK!</h2>');
    	$("#buttonAttack").click(function() {
    		// Sound effect
            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/sword-slash-trimmed.mp3");
            audioElement.play();
    	});
    }

	// $("#fighterImg1").click(function() {
 //    	if (role === null) {
 //    		$("#playerChosen").html('<img id="fighterImg" src=' + fighterImg1 + ' />');
 //    		$(".playerName").html('<p>Beatrix Kiddo</p>');
 //    		$("#fighterImg1").fadeTo(500,0.4);
 //    		role = "enemy";
 //    		$("#choosePlayerThenOpponent").html('<h2>SELECT YOUR OPPONENT!</h2>');
 //    		console.log("just picked our player");
 //    		console.log(characters.fighter[0].name);
 //    		//playersToBattle.push() ;
		
 //    	} else {
 //    		$("#enemyChosen").html('<img id="fighterImg" src=' + fighterImg1 + ' />');
 //    		$(".enemyName").html('<p>Beatrix Kiddo</p>');
 //    		$("#fighterImg1").fadeTo(500,0.4);
 //    		$("#choosePlayerThenOpponent").html('<h2>SELECT YOUR OPPONENT!</h2>');
 //    		console.log("just picked our enemy");
 //    		attack();
    		
 //    	}
 //    });

 //    $("#fighterImg2").click(function() {
 //    	if (role === null) {
 //    		$("#playerChosen").html('<img id="fighterImg" src=' + fighterImg2 + ' />');
 //    		$(".playerName").html('<p>Elle Driver</p>');
 //    		$("#fighterImg2").fadeTo(500,0.4);
 //    		role = "enemy";
 //    		$("#choosePlayerThenOpponent").html('<h2>SELECT YOUR OPPONENT!</h2>');
 //    		console.log("just picked our player");
 //    	} else {
 //    		$("#enemyChosen").html('<img id="fighterImg" src=' + fighterImg2 + ' />');
 //    		$(".enemyName").html('<p>Elle Driver</p>');
 //    		$("#fighterImg2").fadeTo(500,0.4);
 //    		console.log("just picked our enemy");
 //    		console.log(characters.fighter[1].name);
		
 //    		attack();
    		
 //    	}
 //    });

 //    $("#fighterImg3").click(function() {
 //    	if (role === null) {
 //    		$("#playerChosen").html('<img id="fighterImg" src=' + fighterImg3 + ' />');
 //    		$(".playerName").html('<p>O-Ren Ishii</p>');
 //    		$("#fighterImg3").fadeTo(500,0.4);
 //    		role = "enemy";
 //    		$("#choosePlayerThenOpponent").html('<h2>SELECT YOUR OPPONENT!</h2>');
 //    		console.log("just picked our player");
 //    	} else {
 //    		$("#enemyChosen").html('<img id="fighterImg" src=' + fighterImg3 + ' />');
 //    		$(".enemyName").html('<p>O-Ren Ishii</p>');
 //    		$("#fighterImg3").fadeTo(500,0.4);
 //    		console.log("just picked our enemy");
 //    		attack();
    		
 //    	}
 //    });

 //    $("#fighterImg4").click(function() {
 //    	if (role === null) {
 //    	$("#playerChosen").html('<img id="fighterImg" src=' + fighterImg4 + ' />');
 //        $(".playerName").html('<p>Vernita Green</p>');
 //        $("#fighterImg4").fadeTo(500,0.4);
 //        $("#choosePlayerThenOpponent").html('<h2>SELECT YOUR OPPONENT!</h2>');
 //    		role = "enemy";
 //    		//pickedPlayer();
 //    		console.log("just picked our player");
 //    	} else {
 //    	  $("#enemyChosen").html('<img id="fighterImg" src=' + fighterImg4 + ' />');
 //      	  $(".enemyName").html('<p>Vernita Green</p>');
 //      	  $("#fighterImg4").fadeTo(500,0.4);
 //      	  console.log("just picked our enemy");
 //      	  attack();
 //    		//pickedOpponent();
    		
 //    	}
 //    });

   
    // function pickedPlayer() {
    //   $("#playerChosen").html('<img id="fighterImg" src=' + fighterImg4 + ' />');
    //   $(".playerName").html('<p>Vernita Green</p>');
    //   $("#fighterImg4").hide();	
    //   $("#choosePlayerThenOpponent").html('<h2>SELECT YOUR OPPONENT!</h2>');
    // };

    // function pickedOpponent() {
    //   $("#enemyChosen").html('<img id="fighterImg" src=' + fighterImg4 + ' />');
    //   $(".enemyName").html('<p>Vernita Green</p>');
    //   $("#fighterImg4").hide();	
    // };


layoutGame();
}); //end document.ready