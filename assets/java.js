var one = true;
var two = true;
var data1 = "";
var data2 = "";
// var count = 0;
var scoreone = 0;
var scoretwo = 0;
var stage1 = "Not Ready";
var stage2 = "Not Ready";
var whoWon = ""

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

database.ref().set({
what: whoWon,
dataone: data1,
datatwo: data2,
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
	count = snap.val().count;
	data1 = snap.val().dataone;
	data2 = snap.val().datatwo;
	whoWon = snap.val().what;

	$("#status1").text(FirstPlayer);
	$("#status2").text(SecondPlayer);
	$("#onescore").text(scoreOne);
	$("#twoscore").text(scoreTwo);
})
	
// database.ref().set({
// 	what: whoWon,
// 	count: count,
// 	dataone: data1,
// 	datatwo: data2,
// 	FirstPlayer: stage1,
// 	SecondPlayer: stage2,
// 	scoreOne: scoreone,
// 	scoreTwo: scoretwo
// 	})

$(".first").on("click", function(){
	if(one){
		data1 = $(this).attr("data-value");
		one = false;
		stage1 = "Ready";

		database.ref().set({
		what: whoWon,
		dataone: data1,
		datatwo: data2,
		FirstPlayer: stage1
		})

		database.ref().on("value", function(snap){
		FirstPlayer = snap.val().FirstPlayer;
		SecondPlayer = snap.val().SecondPlayer;
		count = snap.val().count;
		data1 = snap.val().dataone;
		data2 = snap.val().datatwo;
		whoWon = snap.val().what;
		$("#status1").text(FirstPlayer);
		$("#status2").text(SecondPlayer);
		})

		// if(count == 2){
		// 	checkResults();
		// }
	}
})

$(".second").on("click", function(){
	if(two){
		data2 = $(this).attr("data-value");
		two = false;
		stage2 = "Ready";

		database.ref().set({
		what: whoWon,
		dataone: data1,
		datatwo: data2,
		SecondPlayer: stage2
		})

		database.ref().on("value", function(snap){
		FirstPlayer = snap.val().FirstPlayer;
		SecondPlayer = snap.val().SecondPlayer;
		count = snap.val().count;
		data1 = snap.val().dataone;
		data2 = snap.val().datatwo;
		whoWon = snap.val().what;
		$("#status1").text(FirstPlayer);
		$("#status2").text(SecondPlayer);
		})

		// if(count == 2){
		// 	checkResults();
		// }
	}
})

$("#run").on("click", function(){
	database.ref().on("value", function(snapp){
		data1 = snapp.val().dataone;
		data2 = snapp.val().datatwo;
		if (data1 !== "" && data2 !== ""){
			checkResults();
		}
	})
})

function checkResults() {
	console.log("data1 = " + data1);
	console.log("data2 = " + data2);

	database.ref().on("value", function(snapps){
		data1 = snapps.val().dataone;
		data2 = snapps.val().datatwo;
	

	if (data1 == data2){
        whoWon = "It is a tie!";
        count = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		what: whoWon,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snapp){
			whoWon = snapp.val().what;
			$("#who").text(whoWon);
		})

	} else if (data1 == "1" && data2 == "2"){
		scoreone++;
        whoWon = "Player 1 Won!";
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		what: whoWon,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snapp){
			whoWon = snapp.val().what;
			$("#who").text(whoWon);
		})

	}  else if (data1 == "2" && data2 == "3"){
		scoreone++;
        whoWon = "Player 1 Won!";
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		what: whoWon,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snapp){
			whoWon = snapp.val().what;
			$("#who").text(whoWon);
		})

	}  else if (data1 == "3" && data2 == "1"){
		scoreone++
		whoWon = "Player 1 Won!";
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		what: whoWon,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snapp){
			whoWon = snapp.val().what;
			$("#who").text(whoWon);
		})

	}  else if (data1 == "1" && data2 == "3"){
		scoretwo++;
		whoWon = "Player 2 Won!";
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		what: whoWon,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snapp){
			whoWon = snapp.val().what;
			$("#who").text(whoWon);
		})

	}  else if (data1 == "2" && data2 == "1"){
		scoretwo++;
		whoWon = "Player 1 Won!";
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		what: whoWon,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snapp){
			whoWon = snapp.val().what;
			$("#who").text(whoWon);
		})

	}  else if (data1 == "3" && data2 == "2"){
		scoretwo++;
		whoWon = "Player 1 Won!";
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		what: whoWon,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snapp){
			whoWon = snapp.val().what;
			$("#who").text(whoWon);
		})
	}
})
}