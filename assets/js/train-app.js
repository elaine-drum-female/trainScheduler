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
var firstTime = "05:25";
var timeFormat = moment().format("h:mm a");
var firstTimeConverted = moment(timeFormat);
// var currentTime = moment();
var tFrequency=20;
var diffTime = moment().diff(moment(firstTimeConverted, "minutes"));
var tRemainder = diffTime % tFrequency;
var tMinutestilTrain = tFrequency - tRemainder;
var nextArrival= moment().add(tMinutestilTrain, "minutes");

var database = firebase.database();

$('#submit').on("click", function (event) {
    event.preventDefault();

    trainName = $('#name').val().trim();
    destination = $('#destination').val().trim();
    firstTime = moment($('#first-train-time').val().trim(), "MM/DD/YYYY").format('X');
    tFrequency = $('#frequency').val().trim();

    var trainData = {
        train: trainName,
        destination: destination,
        firstTrainTime: timeFormat,
        frequency: frequency
    };

    database.ref().push(trainData);

    console.log(trainData.train);
    console.log(trainData.destination);
    console.log(trainData.firstTrainTime);
    console.log(trainData.frequency);
});


































































});