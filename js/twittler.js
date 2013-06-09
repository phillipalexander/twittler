$(document).ready(function () {

	/*==========  Handle User input  ==========*/

	/*==========  MODAL WINDOW  ==========*/

	// // publishTweet
	// $('#publishTweet').click(function () {
	// 	var btn = $(this);
	// 	console.log("Tweet Published");
	// });

	// // cancelTweet
	// $('#cancelTweet').click(function () {
	// 	var btn = $(this);
	// 	console.log("Tweet Canceled");
	// });

	// // on 'enter' keystroke, send the message to the server
	// $(".input-block-level").keyup(function (keyStroke) {
	// 	// if key wasn't 'Enter'
	// 	if (keyStroke.keyCode !== 13) {
	// 		return;
	// 	}
	// 	var username = $("#inputUsername").text();
	// 	var message = $("#inputMessage").text();
	// 	// the default action of the event will not be triggered.
	// 	keyStroke.preventDefault();

	// 	// Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
	// 	keyStroke.stopPropagation();
	// 	//clean up 'dirty' input before posting it to the server
	// 	sendMessage($.trim($(this).val()));
	// 	$(this).val("");
	// });

	/*==========  Auto Refresh of table  ==========*/

	// var auto_refresh = setInterval(function () {
	// 	$('#tweetStream').empty();
	// 	$('#tweetStream').load('index.php?_=' + Math.random() + '#tweetStream').fadeIn("slow");
	// }, 1000); // refresh every 1000 milliseconds

	// -------------

	var streams = {
		home: [],
		users: {
			shawndrost: [],
			sharksforcheap: [],
			mracus: [],
			douglascalhoun: [],
		}
	};

	// utility function for adding tweets to our data structures
	var addTweet = function (newTweet) {
		var username = newTweet.user;
		streams.users[username].push(newTweet);
		streams.home.push(newTweet);
	};

	// utility function
	var randomElement = function (array) {
		var randomIndex = Math.floor(Math.random() * array.length);
		return array[randomIndex];
	};

	var updateStream = function () {
		var $tbody = $('#tweetStream');

		var index = streams.home.length - 1;
		while (index >= 0) {
			var tweet = streams.home[index];
			var $tweet = $('<tr></tr>');
			$tweet.html("<td><strong>@" + tweet.user + "</strong></td><td>" + tweet.message + "</td><td><small class='muted'>" + tweet.created_at.humane + "</small></td>");
			$tweet.appendTo($tbody);
			index -= 1;
		}
	};

	// random tweet generator
	var users = Object.keys(streams.users);
	var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
	var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
	var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
	var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
	var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

	var randomMessage = function () {
		return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
	};

	// generate random tweets on a random schedule
	var generateRandomTweet = function () {
		var tweet = {};
		tweet.user = randomElement(users);
		tweet.message = randomMessage();
		tweet.created_at = {
			'literal': new Date(),
			'humane': moment(this.literal).fromNow()
		};

		addTweet(tweet);
	};

	for (var i = 0; i < 10; i++) {
		generateRandomTweet();
	}

	var scheduleNextTweet = function () {
		generateRandomTweet();
		setTimeout(scheduleNextTweet, Math.random() * 3000);

	};

	scheduleNextTweet();
	updateStream();
	// utility function for letting students add "write a tweet" functionality
	// (note: not used by the rest of this file.)
	var writeTweet = function (vistermessage) {
		if (!visitor) {
			throw new Error('set the global visitor property!');
		}
		var tweet = {};
		tweet.user = visitor;
		tweet.message = message;
		addTweet(tweet);
	};

	// userPicker
	$('.pickUser').click(function () {
		var btnUser = $(this).attr('id');
		window.btnUser = btnUser;
		console.log("Stream Switch: " + btnUser);

		if (btnUser) {

			var $tbody = $('#tweetStream');
			$tbody.children().remove();
			var index = streams.users[btnUser].length - 1;
			while (index >= 0) {
				var tweet = streams.users[btnUser][index];
				var $tweet = $('<tr></tr>');
				$tweet.html("<td><strong>@" + tweet.user + "</strong></td><td>" + tweet.message + "</td><td><small class='muted'>" + tweet.created_at.humane + "</small></td>");
				$tweet.appendTo($tbody);
				index -= 1;
			}
		} else {
			updateStream();
		}

	});

	$('#refresh')
		.click(function () {
		var btn = $(this);
		updateStream();
		btn.button('loading');
		setTimeout(function () {
			btn.button('reset');
		}, 2000);
	});

});