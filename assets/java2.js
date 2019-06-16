
// var firebaseConfig = {
//     apiKey: "AIzaSyCPMikfMV7LY137C_HWvupzsEpGqoBJ8KQ",
//     authDomain: "first-project-1589b.firebaseapp.com",
//     databaseURL: "https://first-project-1589b.firebaseio.com",
//     projectId: "first-project-1589b",
//     storageBucket: "first-project-1589b.appspot.com",
//     messagingSenderId: "432852980347",
//     appId: "1:432852980347:web:64b38bfb1ddfa6b2"
//   };

// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();

// var connectionsRef = database.ref("/connections");
// var connectedRef = database.ref(".info/connected");

// database.ref().on("value", function(snap){
//     extra = snap.val().user;
// })

// connectedRef.on("value", function(snaps){
//     if (snaps.val()){
//         var con = connectionsRef.push(true);
//         con.onDisconnect().remove();
//     }
// });

// connectionsRef.on("value", function(snapshot) {
//     var numb = snapshot.numChildren();
//     console.log(numb);
//     if( numb == 1 ){
//         alert("one");
//     } else if (numb == 2){
//         alert("two");
//     }
// });