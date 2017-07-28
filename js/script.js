(function() {
	
	// Initialize Firebase
	const config = {
		apiKey: "AIzaSyB5k2ZiwgxK3y9XI7NviNZ64mlZnWh3gAw",
		authDomain: "fir-test-2e54c.firebaseapp.com",
		databaseURL: "https://fir-test-2e54c.firebaseio.com",
		projectId: "fir-test-2e54c",
		storageBucket: "fir-test-2e54c.appspot.com",
		messagingSenderId: "839768630066"
	};
	firebase.initializeApp(config);
	
	// Get elements
	const preObject = document.getElementById('object');
	
	// Create references
	const dbRefObject = firebase.database().ref().child('object');
	
	// Sync object changes
	/*
	dbRefObject.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});
	*/
}());
