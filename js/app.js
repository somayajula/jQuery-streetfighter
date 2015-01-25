/**
 * This is an assignment for Thinkful Frontend Developer Bootcamp.
 * Uses basic jQuery DOM to hide and show element as well as event handling.
 */
$(document).ready(function () {
	function playHadouken() {
		$("#hadouken-sound")[0].volume = 0.5;
		$("#hadouken-sound")[0].load();
		$("#hadouken-sound")[0].play();
	}

	$(".ryu").mouseenter(function () {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	}).mouseleave(function () {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	}).mousedown(function () {
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate(
			{
				"left" : "1000px"
			},
			500,
			function() {
				$(this).hide();
				$(this).css("left", "480px");
			}
		);
	}).mouseup(function(){
		$(".ryu-throwing").hide();
		$("ryu-still").show();
		$(".hadouken").hide();
	});

	$(document).keydown(function (event) {
		var keycode = (event.keycode ? event.keycode : event.which);
		if(keycode == "88") {
			$(".ryu-ready").hide();
			$(".ryu-still").hide();
			$(".ryu-cool").show();
		}
	}).keyup(function (event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == "88") {
			$(".ryu-still").show();
			$(".ryu-cool").hide();
		}
	});
});