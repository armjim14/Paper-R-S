var one = true;
var two = true;
var three = true;
var data1 = "";
var data2 = "";
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

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snaps){
    if (snaps.val()){
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
    }
});

connectionsRef.on("value", function(snapshot) {
	var numb = snapshot.numChildren();
	console.log(numb);
    if( numb == 1 ){
        alert("one");
    } else if (numb == 2){
        alert("two");
    }
});

database.ref().set({
	what: whoWon,
	dataone: data1,
	datatwo: data2,
	FirstPlayer: stage1,
	SecondPlayer: stage2,
	scoreOne: scoreone,
	scoreTwo: scoretwo
})

database.ref().on("value", function (snap) {
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

$(".first").on("click", function () {
	if (one) {
		data1 = $(this).attr("data-value");
		one = false;
		stage1 = "Ready";

		database.ref().set({
			what: whoWon,
			dataone: data1,
			datatwo: data2,
			FirstPlayer: stage1,
			scoreOne: scoreone,
			scoreTwo: scoretwo
		})
		// getting info from firebase
		database.ref().on("value", function (snap) {

			FirstPlayer = snap.val().FirstPlayer;
			SecondPlayer = snap.val().SecondPlayer;
			count = snap.val().count;
			data1 = snap.val().dataone;
			data2 = snap.val().datatwo;
			whoWon = snap.val().what;
			$("#status1").text(FirstPlayer);
			$("#status2").text(SecondPlayer);

		})
	}
})

$(".second").on("click", function () {
	if (two) {
		data2 = $(this).attr("data-value");
		two = false;
		stage2 = "Ready";

		database.ref().set({
			what: whoWon,
			dataone: data1,
			datatwo: data2,
			SecondPlayer: stage2,
			scoreOne: scoreone,
			scoreTwo: scoretwo
		})
		//getting info from firebase
		database.ref().on("value", function (snap) {

			FirstPlayer = snap.val().FirstPlayer;
			SecondPlayer = snap.val().SecondPlayer;
			count = snap.val().count;
			data1 = snap.val().dataone;
			data2 = snap.val().datatwo;
			whoWon = snap.val().what;
			$("#status1").text(FirstPlayer);
			$("#status2").text(SecondPlayer);

		})
	}
})

$("#run").on("click", function () {
	database.ref().on("value", function (snapp) {
		data1 = snapp.val().dataone;
		data2 = snapp.val().datatwo;
		// if both user responded then if statment will run
		if (data1 !== "" && data2 !== "") {
			checkResults();
		}
	})
})

function checkResults() {
	console.log("data1 = " + data1);
	console.log("data2 = " + data2);

	// database.ref().on("value", function(snapps){
	// 	data1 = snapps.val().dataone;
	// 	data2 = snapps.val().datatwo;
	// })

	if (data1 == data2) {
		if (three) {
			whoWon = "It is a tie!";
			count = 0;
			one = true;
			two = true;
			three = false;

			database.ref().set({
				what: whoWon,
				dataone: data1,
				datatwo: data2,
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				scoreOne: scoreone,
				scoreTwo: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				$("#who").text(whoWon);
			})
		}
	} else if (data1 == "1" && data2 == "2") {
		if (three) {
			scoreone++;
			whoWon = "Player 1 Won!";
			one = true;
			two = true;
			three = false;

			database.ref().set({
				what: whoWon,
				dataone: data1,
				datatwo: data2,
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				scoreOne: scoreone,
				scoreTwo: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				scoreone = snapp.val().scoreOne;
				$("#who").text(whoWon);
				$("#onescore").text(scoreone);
			})
		}

	} else if (data1 == "2" && data2 == "3") {
		if (three) {
			scoreone++;
			whoWon = "Player 1 Won!";
			one = true;
			two = true;
			three = false;

			database.ref().set({
				what: whoWon,
				dataone: data1,
				datatwo: data2,
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				scoreOne: scoreone,
				scoreTwo: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				scoreone = snapp.val().scoreOne;
				$("#who").text(whoWon);
				$("#onescore").text(scoreone);
			})
		}

	} else if (data1 == "3" && data2 == "1") {
		if (three) {
			scoreone++
			whoWon = "Player 1 Won!";
			one = true;
			two = true;
			three = false;

			database.ref().set({
				what: whoWon,
				dataone: data1,
				datatwo: data2,
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				scoreOne: scoreone,
				scoreTwo: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				scoreone = snapp.val().scoreOne;
				$("#who").text(whoWon);
				$("#onescore").text(scoreone);
			})
		}

	} else if (data1 == "1" && data2 == "3") {
		if (three) {
			scoretwo++;
			whoWon = "Player 2 Won!";
			one = true;
			two = true;
			three = false;

			database.ref().set({
				what: whoWon,
				dataone: data1,
				datatwo: data2,
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				scoreOne: scoreone,
				scoreTwo: scoretwo
			})

			database.ref().on("value", function (snapp) {
				scoretwo = snapp.val().scoreTwo;
				whoWon = snapp.val().what;
				$("#who").text(whoWon);
				$("#twoscore").text(scoretwo);
			})
		}
	} else if (data1 == "2" && data2 == "1") {
		if (three) {
			scoretwo++;
			whoWon = "Player 2 Won!";
			one = true;
			two = true;
			three = false;

			database.ref().set({
				what: whoWon,
				dataone: data1,
				datatwo: data2,
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				scoreOne: scoreone,
				scoreTwo: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				scoretwo = snapp.val().scoreTwo;
				$("#who").text(whoWon);
				$("#twoscore").text(scoretwo);
			})
		}

	} else if (data1 == "3" && data2 == "2") {
		if (three) {
			scoretwo++;
			whoWon = "Player 2 Won!";
			one = true;
			two = true;
			three = false;

			database.ref().set({
				what: whoWon,
				dataone: data1,
				datatwo: data2,
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				scoreOne: scoreone,
				scoreTwo: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				scoretwo = snapp.val().scoreTwo;
				$("#who").text(whoWon);
				$("#twoscore").text(scoretwo);
			})
		}
	}
}

// function runset() {
// 	database.ref().set({
// 		what: whoWon,
// 		dataone: data1,
// 		datatwo: data2,
// 		FirstPlayer: stage1,
// 		SecondPlayer: stage2,
// 		scoreOne: scoreone,
// 		scoreTwo: scoretwo
// 		})
// }
