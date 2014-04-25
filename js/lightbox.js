$.fn.lightbox = function() {

	$(this).click(function(e) {

		e.preventDefault(); //<-- Prevents default functionality of opening a new page //

		var image_href = $(this).attr('href');
		var text = $(this).attr('data-title');

		var lightbox = 
			'<div id="lightbox">' +
				'<div id="content">' +
					'<img src="' + image_href + '" class="active"/>' +
					'<p id="title">' + text + '</p>' +
				'</div>' +
			'</div>';

		$(lightbox).hide().appendTo('body').fadeIn(200);

		var lightbg = $('#lightbox');

		//** onClick close lightbox **//
		lightbg.click(function() {
			$(this).fadeOut (300, function () {
				$(this).remove();
			});
		});

		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				lightbg.fadeOut (300, function() {
					$(this).remove();
				});
			}
		});

	});

}





/*     lvw/.     */