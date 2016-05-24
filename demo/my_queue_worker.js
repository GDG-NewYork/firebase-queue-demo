// my_queue_worker.js

var Queue = require('firebase-queue');
var firebase = require('firebase');

firebase.initializeApp({
    serviceAccount: 'key.json',
    databaseURL: 'https://fir-queue.firebaseio.com/'
    //serviceAccount: 'path/to/serviceAccountCredentials.json',
    //databaseURL: '<your-database-url>'
});

var ref = firebase.database().ref('queue');
var queue = new Queue(ref, function(data, progress, resolve, reject) {
    // Read and process task data
    console.log('>>>>>DATA',data);

    // Do some work
    progress(50);

    // Finish the task asynchronously
    setTimeout(function() {
        resolve();
    }, 1000);
});