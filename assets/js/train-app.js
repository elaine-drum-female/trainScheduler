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
            var firstTime = "03:40";
            var timeFormat = moment().format("h:mm a");
            var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
            var currentTime = moment();
            var tFrequency = 20;
            var minutesAway;
            var diffTime = moment().diff(moment(firstTimeConverted, "minutes"));
            var tRemainder = diffTime % tFrequency;
            var tMinutestilTrain = tFrequency - tRemainder;
            var nextArrival;

            var database = firebase.database();

            $('#submit').on("click", function (event) {
                event.preventDefault();

                // grabs user input
                trainName = $('#name').val().trim();
                destination = $('#destination').val().trim();
                Frequency = $('#frequency').val().trim();
                firstTime = moment($('#first-train-time').val().trim(), "MM/DD/YYYY").format('X');
                nextArrival = moment().format('LT');
                minutesAway = moment().endOf('hour').fromNow();

                var newRow = '<div class="row"><div class="col-sm-2">' + trainName + '</div>' + '<div class="col-sm-2"> ' + destination + '</div>' + '<div class="col-sm-2">' + Frequency + '</div>' + '<div class="col-sm-2">' + nextArrival + '</div>' + '<div class="col-sm-2">' + minutesAway + '</div>';

                $('.table-body').append(newRow);

                var trainData = {
                    train: trainName,
                    destination: destination,
                    Frequency: frequency,
                    firstTrainTime: timeFormat,
                    minutesAway: nextArrival
                };

                database.ref().push(trainData);

                console.log(trainData.train);
                console.log(trainData.destination);
                console.log(trainData.firstTrainTime);
                console.log(trainData.frequency);
                console.log(trainData.minutesAway);

                console.log(diffTime);
                console.log(currentTime);
                console.log(tMinutestilTrain);
                console.log(tRemainder);

                // clear all text boxes
                $('#name').val('');
                $('#destination').val('');
                $('#frequency').val('');
                $('#first-train-time').val('');
                $('#minutesAway').val('');


            });

            
































































            });