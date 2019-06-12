var extra = 0;

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


database.ref().set({
    user: extra
})

connectedRef.on("value", function(snaps){
    if (snaps.val()){
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
    }
});

connectionsRef.on("value", function(snapshot) {
    var numb = snapshot.numChildren();
    console.log(numb);

    database.ref().on("value", function(pic){
        extra = pic.val().user;
    });

    if( numb == 1 && extra == 1 ){
        next2();
    } else if (numb == 1){
        extra++;
        database.ref().set({
            user: extra
        })
        next();
    }
});

function next(){
    window.open("user1.html");
}

function next2(){
    window.open("user2.html");
}