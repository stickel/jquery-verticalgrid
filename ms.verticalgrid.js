(function($) {
	$.fn.verticalGrid = function(options) {
		
		var settings = {
			'lineHeight': 18,
			'lineColor': '#999',
			'container': 'body'
		}
		
		return this.each(
			function() {
				var $this = $(this);
				
				if (options) {
					$.extend(settings, options);
				}
				
				$(document).keypress(function(e) {
					if (e.keyCode === 169) {
						e.preventDefault();
						if (document.getElementById('ms-vertical-grid')) {
							$('#ms-vertical-grid').remove();
						} else {
							// Get the container dimensions
							var containerWidth = $(settings.container).width() + parseInt($(settings.container).css('padding-left')) + parseInt($(settings.container).css('padding-right'));
							var containerHeight = $(settings.container).height() + parseInt($(settings.container).css('padding-top')) + parseInt($(settings.container).css('padding-bottom'));
							// var topPosition = -(parseInt($(settings.container).css('paddingTop')));
							// var leftPosition = -(parseInt($(settings.container).css('paddingLeft')));
							
							if ($(settings.container).css('position') != 'relative' || $(settings.container).css('position') != 'absolute') {
								$(settings.container).css('position', 'relative');
							}
							$(settings.container).append('<canvas id="ms-vertical-grid" width="' + containerWidth + '" height="' + containerHeight + '" style="height:100%;position:absolute;top:0px;left:0px;width:100%;z-index:1000;"></canvas>');
							// $(settings.container).append('<canvas id="ms-vertical-grid" width="' + containerWidth + '" height="' + containerHeight + '" style="height:100%;position:absolute;top:' + topPosition + 'px;left:' + leftPosition + 'px;width:100%;z-index:1000;"></canvas>');
							var lineHeightCanvas = document.getElementById('ms-vertical-grid');
							if (lineHeightCanvas.getContext) {
								var ctxt = lineHeightCanvas.getContext('2d');
								ctxt.strokeStyle = settings.lineColor;
								ctxt.lineWidth = 0.5;
								ctxt.beginPath()
								for (var x = settings.lineHeight; x < containerHeight; x += settings.lineHeight) {
									ctxt.moveTo(0, x);
									ctxt.lineTo(containerWidth, x);
									ctxt.stroke();
								}
							}
						}
					}
				});
			}
		)
	};
})(jQuery);