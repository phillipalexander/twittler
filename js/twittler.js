// // Sweet animated logo
// jQuery(document).ready(function ($) {
// 	$('.logo').addClass('animated fadeInUp');
// 	var robotAngrify = function () {
// 		console.log('robot=ANGRY');
// 	};
// 	$('.logo').mouseenter(robotAngrify);
// });

$(document).ready(function () {
	$('.logo').addClass('animated fadeInUp');
	$('.logo').hover(function () {
		$('.logo').removeClass('animated fadeInUp');
		$('.logo').addClass('animated bounce');
	}, function () {
		$('.logo').removeClass('animated bounce');
	});
});

/*===================================
=            animate.css            =
===================================*/

// $(document).ready(function () {
// 	$('.checks :checkbox').attr('checked', true);
// 	$('.checks label').hover(function () {
// 		var anim = $(this).html();
// 		$(this).addClass(anim);
// 	}, function () {
// 		$(this).removeClass();
// 	});
// });

/*-----  End of animate.css  ------*/

/*==================================================
=            original twittler goodness            =
==================================================*/

// Original Twittler goodness
// $(document).ready(function () {
// 	debugger;
// 	var $body = $('body');
// 	// $body.html('');

// 	var index = streams.home.length - 1;
// 	while (index >= 0) {
// 		var tweet = streams.home[index];
// 		var $tweet = $('<div></div>');
// 		$tweet.text('@' + tweet.user + ': ' + tweet.message);
// 		$tweet.appendTo($body);
// 		index -= 1;
// 	}
// });

/*-----  End of original twittler goodness  ------*/

/*=====================================
=            JQuery table?            =
=====================================*/

// Trying to build a table with JQuery
//
// $(document).ready(function () {
// 	// create table
// 	var $table = $('<table>');
// 	// caption
// 	// $table.append('<caption>MyTable</caption>')
// 	// thead
// 	.append('<thead>').children('thead')
// 		.append('<tr />').children('tr').append('<th>A</th><th>B</th><th>C</th><th>D</th>');

// 	//tbody
// 	var $tbody = $table.append('<tbody />').children('tbody');

// 	// add row
// 	$tbody.append('<tr />').children('tr:last')
// 		.append("<td>val</td>")
// 		.append("<td>val</td>")
// 		.append("<td>val</td>")
// 		.append("<td>val</td>");

// 	// add another row
// 	$tbody.append('<tr />').children('tr:last')
// 		.append("<td>val</td>")
// 		.append("<td>val</td>")
// 		.append("<td>val</td>")
// 		.append("<td>val</td>");

// 	// add table to dom
// 	$table.appendTo('body');
// });

/*-----  End of JQuery table?  ------*/