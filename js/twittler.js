$(document).ready(function () {

	//swoop the robot logo in on load
	$('.logo').addClass('animated fadeInUp');

	// bounce the robot logo on hover
	$('.logo').hover(function () {
		$('.logo').removeClass('animated fadeInUp');
		$('.logo').addClass('animated bounce');
	}, function () {
		$('.logo').removeClass('animated bounce');
	});

	(function ($, window, document, undefined) {
		// -------------

		var streams = {
			home: [],
			users: {
				shawndrost: [],
				sharksforcheap: [],
				mracus: [],
				douglascalhoun: []
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
			setTimeout(scheduleNextTweet, Math.random() * 1500);
		};
		scheduleNextTweet();

		// utility function for letting students add "write a tweet" functionality
		// (note: not used by the rest of this file.)
		var writeTweet = function (message) {
			if (!visitor) {
				throw new Error('set the global visitor property!');
			}
			var tweet = {};
			tweet.user = visitor;
			tweet.message = message;
			addTweet(tweet);
		};

		var $body = $('body');

		var index = streams.home.length - 1;
		while (index >= 0) {
			var tweet = streams.home[index];
			var $tweet = $('<div></div>');
			$tweet.text('@' + tweet.user + ': ' + tweet.message + "[" + tweet.created_at.humane + "]");
			$tweet.appendTo($body);
			index -= 1;
		}
	})(jQuery, window, document);

});