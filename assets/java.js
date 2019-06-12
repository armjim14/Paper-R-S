var one = true;
var two = true;
var data1 = "";
var data2 = "";
var count = 0;
var scoreone = 0;
var scoretwo = 0;
var stage1 = "Not Ready";
var stage2 = "Not Ready";

  var firebaseConfig = {
    apiKey: "AIzaSyCPMikfMV7LY137C_HWvupzsEpGqoBJ8KQ",
    authDomain: "first-project-1589b.firebaseapp.com",
    databaseURL: "https://first-project-1589b.firebaseio.com",
    projectId: "first-project-1589b",
    storageBucket: "first-project-1589b.appspot.com",
    messagingSenderId: "432852980347",
    appId: "1:432852980347:web:64b38bfb1ddfa6b2"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

// connectedRef.on("value", function(snaps){
//     if (snaps.val()){
//         var con = connectionsRef.push(true);
//         con.onDisconnect().remove();
//     }
// });

// connectionsRef.on("value", function(snapshot) {
//     var numb = snapshot.numChildren();
//     console.log(numb);
//     if( numb == 2 ){
// 		window.open("user2.html");
// 		break;
//     }
// });

database.ref().set({
FirstPlayer: stage1,
SecondPlayer: stage2,
scoreOne: scoreone,
scoreTwo: scoretwo
})

database.ref().on("value", function(snap){
	FirstPlayer = snap.val().FirstPlayer;
	SecondPlayer = snap.val().SecondPlayer;
	scoreOne = snap.val().scoreOne;
	scoreTwo = snap.val().scoreTwo;
	$("#status1").text(FirstPlayer);
	$("#status2").text(SecondPlayer);
	$("#onescore").text(scoreOne);
	$("#twoscore").text(scoreTwo);
})

$(".first").on("click", function(){
	if(one){
		data1 = $(this).attr("data-value");
		one = false;
		count++;
		stage1 = "Ready";

		database.ref().set({
		FirstPlayer: stage1,
		SecondPlayer: stage2
		})

		database.ref().on("value", function(snap){
		FirstPlayer = snap.val().FirstPlayer;
		SecondPlayer = snap.val().SecondPlayer;
		$("#status1").text(FirstPlayer);
		$("#status2").text(SecondPlayer);
		})

		if(count == 2){
			checkResults();
		}
	}
})

$(".second").on("click", function(){
	if(two){
		data2 = $(this).attr("data-value");
		two = false;
		count++;
		stage2 = "Ready";

		database.ref().set({
		FirstPlayer: stage1,
		SecondPlayer: stage2
		})

		database.ref().on("value", function(snap){
		FirstPlayer = snap.val().FirstPlayer;
		SecondPlayer = snap.val().SecondPlayer;
		$("#status1").text(FirstPlayer);
		$("#status2").text(SecondPlayer);
		})

		if(count == 2){
			checkResults();
		}
	}
})

function checkResults() {
	if (data1 == data2){
        $("#who").text("It is a tie!");
        count = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})
	} else if (data1 == "1" && data2 == "2"){
		scoreone++;
        $("#who").text("Player 1 Won!");
        count = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})
	}  else if (data1 == "2" && data2 == "3"){
		scoreone++;
        $("#who").text("Player 1 Won!");
        count = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

	}  else if (data1 == "3" && data2 == "1"){
		scoreone++
        $("#who").text("Player 1 Won!");
        count = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

	}  else if (data1 == "1" && data2 == "3"){
		scoretwo++;
        $("#who").text("Player 2 Won!");
        count = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})
	}  else if (data1 == "2" && data2 == "1"){
		scoretwo++;
        $("#who").text("Player 2 Won!");
        count = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

	}  else if (data1 == "3" && data2 == "2"){
		scoretwo++;
        $("#who").text("Player 2 Won!");
        count = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})
	}
}