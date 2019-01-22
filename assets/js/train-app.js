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
var firstTime = "05:00";
var firstTimeConverted = moment(firstTime, "HH:mm").substract(1, "years");
var currentTime = moment();
var tFrequency: 10;
var diffTime = moment().diff(moment(firstTimeConverted, "minutes");
var tRemainder = diffTime % tFrequency;
var tMinutestilTrain = tFrequency - tRemainder;
var nextArrival= moment().add(tMinutestilTrain, "minutes");



































































});