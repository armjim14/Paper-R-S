var one = true;
var two = true;
var data1 = "";
var data2 = "";
var scoreone = 0;
var scoretwo = 0;
var countt = 0;
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

database.ref().set({
count: countt,
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
	countt = snap.val().count;

	$("#status1").text(FirstPlayer);
	$("#status2").text(SecondPlayer);
	$("#onescore").text(scoreOne);
	$("#twoscore").text(scoreTwo);
})

$(".first").on("click", function(){
	if(one){
		data1 = $(this).attr("data-value");
		one = false;
		countt++;

		stage1 = "Ready";

		database.ref().set({
		count: countt,
		FirstPlayer: stage1,
		SecondPlayer: stage2
		})

		database.ref().on("value", function(snap){

		FirstPlayer = snap.val().FirstPlayer;
		SecondPlayer = snap.val().SecondPlayer;
		countt = snap.val().count;

		$("#status1").text(FirstPlayer);
		$("#status2").text(SecondPlayer);

		})
		console.log(countt);
		if (countt == 2){
			checkResults();
		}
	}
})

$(".second").on("click", function(){
	if(two){
		data2 = $(this).attr("data-value");
		two = false;
		countt++;
		stage2 = "Ready";

		database.ref().set({
		count: countt,
		FirstPlayer: stage1,
		SecondPlayer: stage2
		})

		database.ref().on("value", function(snap){
			FirstPlayer = snap.val().FirstPlayer;
			SecondPlayer = snap.val().SecondPlayer;
			countt = snap.val().count;

			$("#status1").text(FirstPlayer);
			$("#status2").text(SecondPlayer);

		})
		console.log(countt);
		if (countt == 2){
			checkResults();
		}
	}
})

function checkResults() {

	if (data1 == data2){
		var result = "It is a tie!";
        countt = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		text: result,
		count: countt,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snap){
			result = snap.val().text;
			$("#who").text(result);
		})

	} else if (data1 == "1" && data2 == "2"){
		scoreone++;
		var result = "Player one won!";
        countt = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		text: result,
		count: countt,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snap){
			result = snap.val().text;
			scoreone = snap.val().scoreOne;
			scoretwo = snap.val().scoreTwo;
			$("#who").text(result);
		})

	}  else if (data1 == "2" && data2 == "3"){
		scoreone++;
		var result = "Player one won!";
        countt = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		text: result,
		count: countt,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snap){
			result = snap.val().text;
			scoreone = snap.val().scoreOne;
			scoretwo = snap.val().scoreTwo;
			$("#who").text(result);
		})

	}  else if (data1 == "3" && data2 == "1"){
		scoreone++
		var result = "Player one won!";
        countt = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		text: result,
		count: countt,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snap){
			result = snap.val().text;
			scoreone = snap.val().scoreOne;
			scoretwo = snap.val().scoreTwo;
			$("#who").text(result);
		})

	}  else if (data1 == "1" && data2 == "3"){
		scoretwo++;
		var result = "Player two won!";
        countt = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		text: result,
		count: countt,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snap){
			result = snap.val().text;
			scoreone = snap.val().scoreOne;
			scoretwo = snap.val().scoreTwo;
			$("#who").text(result);
		})

	}  else if (data1 == "2" && data2 == "1"){
		scoretwo++;
		var result = "Player two won!";
        countt = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		text: result,
		count: countt,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snap){
			result = snap.val().text;
			scoreone = snap.val().scoreOne;
			scoretwo = snap.val().scoreTwo;
			$("#who").text(result);
		})

	}  else if (data1 == "3" && data2 == "2"){
		scoretwo++;
		var result = "Player two won!";
        countt = 0;
        one = true;
        two = true;
		stage1 = "Not Ready";
		stage2 = "Not Ready";

		database.ref().set({
		text: result,
		count: countt,
		FirstPlayer: stage1,
		SecondPlayer: stage2,
		scoreOne: scoreone,
		scoreTwo: scoretwo
		})

		database.ref().on("value", function(snap){
			result = snap.val().text;
			scoreone = snap.val().scoreOne;
			scoretwo = snap.val().scoreTwo;
			$("#who").text(result);
		})
	}
}