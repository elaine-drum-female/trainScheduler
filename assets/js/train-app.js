$(document).ready(function () {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCkEzDr8kSQyMzV6_kQlt-T54QatAFntbY",
    authDomain: "trainscheduler-ae0b5.firebaseapp.com",
    databaseURL: "https://trainscheduler-ae0b5.firebaseio.com",
    projectId: "trainscheduler-ae0b5",
    storageBucket: "trainscheduler-ae0b5.appspot.com",
    messagingSenderId: "911191489095"
  };
  firebase.initializeApp(config);
    
  // add variables

var trainName = "";
var destination = "";
var firstTime;
var firstTimeConverted = moment(firstTime, "HH:mm").substract(1, "years");
var currentTime = moment();
var tFrequency:0;
var diffTime = moment().diff(moment(firstTimeConverted, "minutes");
var tRemainder = diffTime % tFrequency;
var tMinutestilTrain = tFrequency - tRemainder;
var nextArrival= moment().add(tMinutestilTrain, "minutes");

var database = firebase.database();

$('#submit').on("click", function (event) {
    event.preventDefault();

    trainName = $('#name').val().trim();
    destination = $('#destination').val().trim();
    firstTime = moment($('#first-time-train').val().trim(), "MM/DD/YYYY").format('X');
    tFrequency = $('#frequency').val().trim();

    var trainData = {
        train: trainName,
        destination: destination,
        firstTrainTime: firstTime,
        frequency: frequency
    };

    database.ref().push(trainData);
});


































































});