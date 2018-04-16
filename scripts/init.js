$(document).ready(function() {

    // TODO init: initialize all counters
    var deviceCounter = new Counter($('.devices-counter'));
    var arrowsCounter = new Counter($('.arrows-counter'));

    // TODO init: initialize controls
    var controls = new Controls($('#controls'));

    // TODO init: initialize diagram and transfer counters and controls
    new Diagram('#diagram', '#arrow-sidebar-add', deviceCounter, arrowsCounter, controls);

    // TODO init: add drag functionality to devices in sidebar
    $('.device').draggable({
    	helper:  function() {
        	return $(this).children('.device-image').clone();
    	}
	});

    $('#diagram').droppable();

});