$(document).ready(function() {
	$('iframe.iframe_auto').iframeAutoHeight({
		minHeight: 240, // Sets the iframe height to this value if the calculated value is less
		heightOffset: 50 // Optionally add some buffer to the bottom
	});
});