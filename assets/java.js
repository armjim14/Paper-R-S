var one = true;
var two = true;
var three = true;
var data1 = "";
var data2 = "";
var scoreone = 0;
var scoretwo = 0;
var count = 0;
var stage1 = "Ready";
var stage2 = "Ready";
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
	toReset: count,
	what: whoWon,
	dataone: data1,
	datatwo: data2,
	FirstPlayer: stage1,
	SecondPlayer: stage2,
	scoreuno: scoreone,
	scoredos: scoretwo
})

database.ref().on("value", function (snap) {
	stage1 = snap.val().FirstPlayer;
	stage2 = snap.val().SecondPlayer;
	scoreone = snap.val().scoreuno;
	scoretwo = snap.val().scoredos;
	data1 = snap.val().dataone;
	data2 = snap.val().datatwo;
	whoWon = snap.val().what;
	count = snap.val().toReset;

	$("#status1").text(stage1);
	$("#status2").text(stage2);
	$("#onescore").text(scoreone);
	$("#twoscore").text(scoretwo);
})

$(".first").on("click", function () {
	if (one) {
		data1 = $(this).attr("data-value");
		one = false;
		stage1 = "Ready";

		database.ref().set({
			what: whoWon,
			toReset: count,
			dataone: data1,
			datatwo: data2,
			FirstPlayer: stage1
			// scoreuno: scoreone,
			// scoredos: scoretwo
		})
		// getting info from firebase
		database.ref().on("value", function (snap) {

			stage1 = snap.val().FirstPlayer;
			stage2 = snap.val().SecondPlayer;
			data1 = snap.val().dataone;
			data2 = snap.val().datatwo;
			whoWon = snap.val().what;
			$("#status1").text(stage1);
			$("#status2").text(stage2);

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
			toReset: count,
			dataone: data1,
			datatwo: data2,
			SecondPlayer: stage2
			// scoreuno: scoreone,
			// scoredos: scoretwo
		})
		//getting info from firebase
		database.ref().on("value", function (snap) {

			stage1 = snap.val().FirstPlayer;
			stage2 = snap.val().SecondPlayer;
			data1 = snap.val().dataone;
			data2 = snap.val().datatwo;
			whoWon = snap.val().what;
			$("#status1").text(stage1);
			$("#status2").text(stage2);

		})
	}
})

function testthis() {
	database.ref().on("value", function (snapp) {
		data1 = snapp.val().dataone;
		data2 = snapp.val().datatwo;
		// if both user responded then if statment will run
		if (data1 !== "" && data2 !== "") {
			$("#run").css("display", "none");
			$("#restart").css("display", "block");
			checkResults();
		}
	})
}
// so there is a open function to check the response from the users
testthis();

function checkResults() {
	console.log("data1 = " + data1);
	console.log("data2 = " + data2);

	if (data1 == data2) {
		if (three) {
			whoWon = "It is a tie!";
			three = false;
			stage1 = "Not Ready";
			stage2 = "Not Ready";

			database.ref().set({
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				what: whoWon,
				toReset: count,
				dataone: data1,
				datatwo: data2
				// scoreuno: scoreone,
				// scoredos: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				$("#who").text(whoWon);
				$("#status1").text(stage1);
				$("#status2").text(stage2);
			})
		}
	} else if (data1 == "1" && data2 == "2") {
		if (three) {
			scoreone++;
			whoWon = "Player 1 Won!";
			three = false;
			stage1 = "Not Ready";
			stage2 = "Not Ready";

			database.ref().set({
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				what: whoWon,
				toReset: count,
				dataone: data1,
				datatwo: data2
				// scoreuno: scoreone
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				// scoreone = snapp.val().scoreuno;
				$("#who").text(whoWon);
				$("#status1").text(stage1);
				$("#status2").text(stage2);
				// $("#onescore").text(scoreone);
			})
		}

	} else if (data1 == "2" && data2 == "3") {
		if (three) {
			scoreone++;
			whoWon = "Player 1 Won!";
			three = false;
			stage1 = "Not Ready";
			stage2 = "Not Ready";

			database.ref().set({
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				what: whoWon,
				toReset: count,
				dataone: data1,
				datatwo: data2
				// scoreuno: scoreone,
				// scoredos: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				// scoreone = snapp.val().scoreuno;
				$("#who").text(whoWon);
				$("#status1").text(stage1);
				$("#status2").text(stage2);
				// $("#onescore").text(scoreone);
			})
		}

	} else if (data1 == "3" && data2 == "1") {
		if (three) {
			scoreone++
			whoWon = "Player 1 Won!";
			three = false;
			stage1 = "Not Ready";
			stage2 = "Not Ready";

			database.ref().set({
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				what: whoWon,
				toReset: count,
				dataone: data1,
				datatwo: data2
				// scoreuno: scoreone
				// scoredos: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				// scoreone = snapp.val().scoreuno;
				$("#who").text(whoWon);
				$("#status1").text(stage1);
				$("#status2").text(stage2);
				// $("#onescore").text(scoreone);
			})
		}

	} else if (data1 == "1" && data2 == "3") {
		if (three) {
			scoretwo++;
			whoWon = "Player 2 Won!";
			three = false;
			stage1 = "Not Ready";
			stage2 = "Not Ready";

			database.ref().set({
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				what: whoWon,
				toReset: count,
				dataone: data1,
				datatwo: data2,
				// scoreuno: scoreone,
				scoredos: scoretwo
			})

			database.ref().on("value", function (snapp) {
				// scoretwo = snapp.val().scoredos;
				whoWon = snapp.val().what;
				$("#who").text(whoWon);
				$("#status1").text(stage1);
				$("#status2").text(stage2);
				// $("#twoscore").text(scoretwo);
			})
		}
	} else if (data1 == "2" && data2 == "1") {
		if (three) {
			scoretwo++;
			whoWon = "Player 2 Won!";
			three = false;
			stage1 = "Not Ready";
			stage2 = "Not Ready";

			database.ref().set({
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				what: whoWon,
				toReset: count,
				dataone: data1,
				datatwo: data2
				// scoreuno: scoreone,
				// scoredos: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				// scoretwo = snapp.val().scoredos;
				$("#who").text(whoWon);
				$("#status1").text(stage1);
				$("#status2").text(stage2);
				// $("#twoscore").text(scoretwo);
			})
		}

	} else if (data1 == "3" && data2 == "2") {
		if (three) {
			scoretwo++;
			whoWon = "Player 2 Won!";
			three = false;
			stage1 = "Not Ready";
			stage2 = "Not Ready";

			database.ref().set({
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				what: whoWon,
				toReset: count,
				dataone: data1,
				datatwo: data2
				// scoreuno: scoreone,
				// scoredos: scoretwo
			})

			database.ref().on("value", function (snapp) {
				whoWon = snapp.val().what;
				scoretwo = snapp.val().scoredos;
				$("#who").text(whoWon);
				$("#status1").text(stage1);
				$("#status2").text(stage2);
				// $("#twoscore").text(scoretwo);
			})
		}
	}
}

$("body").on("click", "#restart", function () {
	count++;

	database.ref().set({
		toReset: count
	})

	database.ref().on("value", function (snapp) {

		count = snapp.val().toReset;

		if (count == 1) {
			alert("wait for the reset button to disappear");
		} else if (count == 2) {

			stage1 = "Ready";
			stage2 = "Ready";
			data1 = "";
			data2 = "";
			whoWon = ""
			three = true;
			one = true;
			two = true;
			// scoreone = scoreone;
			// scoretwo = scoretwo;
			count = 0;

			$("#restart").css("display", "none");

			database.ref().set({
				toReset: count,
				what: whoWon,
				FirstPlayer: stage1,
				SecondPlayer: stage2,
				dataone: data1,
				datatwo: data2
				// scoreuno: scoreone,
				// scoredos: scoretwo
			});

			database.ref().on("value", function (snap) {
				stage1 = snap.val().FirstPlayer;
				stage2 = snap.val().SecondPlayer;
				whoWon = snap.val().what;
				scoreone = snap.val().scoreuno;
				scoretwo = snap.val().scoredos;

				$("#status1").text(stage1);
				$("#status2").text(stage2);
				$("#who").text(whoWon);
				$("#onescore").text(scoreone);
				$("#twoscore").text(scoretwo);
			})
		}
	})
})