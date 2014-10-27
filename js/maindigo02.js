/*<script>
	$(function(){
		$.stellar({
			horizontalScrolling: false,
			responsive: true,
			horizontalOffset: 0,
			positionProperty: 'transform',
			verticalOffset: 0
		})
	})
</script>*/

$(document).ready(function(){
$('section[data-type="background"]').each(function(){
var $bgobj = $(this); // assigning the object
$(window).scroll(function() {
var yPos = -($window.scrollTop() / $bgobj.data('speed'));
// Put together our final background position
var coords = '50% '+ yPos + 'px';
// Move the background
$bgobj.css({ backgroundPosition: coords });
});
});
});