$(document).ready(function(){
	$("#color-button").on("click", function(event) {
		event.preventDefault()
		$.ajax({
			url: "/colors/random",
			type: "get"
		})

		.done(function(response) {
			values = JSON.parse(response)
			var cell = values[0].cell
			var color = values[0].color
			$($(".cells")[cell]).css("background-color", color)
		})
	})
});