var currentEvent = null;
var resources = 100;
var control = 0;
var population = 10000;

var time = 0;
setInterval(myTimer, 1000); // Counts time

var events = [new Event(1, 4, 3, 2, 0, 0, 3, "Bombings are increasing, enemies are winning!"), 
			new Event(1, 4, 3, 3, 2, 3, 3, "Three-Minutes Hate is soon! Be there!"),
			new Event(1, 3, 0, 4, 0, 2, 4, "Big Brother is watching you! (Propoganda)")];

var $game = $('#game');
var handle = $( "#custom-handle" );

window.onload = function () {
	startGame();
}

function startGame() {
	currentEvent = getRandomEvent();
	displayEvent(currentEvent);

	addVariableSliders();
}

//BAD but it's late and time's almost up, didn't think ahead 
function checkEventCondition() {
	var newspeakVal = $('#newspeak-slider').slider("option", "value");
	var fearVal = $('#fear-slider').slider("option", "value");
	var unityVal = $('#unity-slider').slider("option", "value");
	var educationVal = $('#education-slider').slider("option", "value");
	var needsVal = $('#needs-slider').slider("option", "value");
	var pastVal = $('#past-slider').slider("option", "value");
	var monitoringVal = $('#monitoring-slider').slider("option", "value");

	if(currentEvent['newspeak'] == newspeakVal 
		&& currentEvent['fear'] == fearVal 
		&& currentEvent['unity'] == unityVal
		&& currentEvent['education'] == educationVal
		&& currentEvent['needs'] == needsVal
		&& currentEvent['past'] == pastVale
		&& currentEvent['monitor'] == monitoringVal) {
			alert("Correct!");
			currentEvent = getRandomEvent();
			displayEvent(currentEvent);
	}

}

function addVariableSliders() {
	$('#fear-slider').slider( {
		max: 4,
		min: 0,
		change : function(event, ui) { 
        			changeVariableValueText($('#fear'), ui.value);
   				} 
	});
	$('#unity-slider').slider( {
		max: 4,
		min: 0,
		change : function(event, ui) { 
        			changeVariableValueText($('#unity'), ui.value);
   				} 
	});
	$('#education-slider').slider( {
		max: 4,
		min: 0,
		change : function(event, ui) { 
        			changeVariableValueText($('#education'), ui.value);
   				} 
	});
	$('#needs-slider').slider( {
		max: 4,
		min: 0,
		change : function(event, ui) { 
        			changeVariableValueText($('#needs'), ui.value);
   				} 
	});
	$('#newspeak-slider').slider( {
		max: 4,
		min: 0,
		change : function(event, ui) { 
        			changeVariableValueText($('#newspeak'), ui.value);
   				} 
	});

	$('#past-slider').slider( {
		max: 4,
		min: 0,
		change : function(event, ui) { 
        			changeVariableValueText($('#past'), ui.value);
   				} 
	});
	$('#monitor-slider').slider( {
		max: 4,
		min: 0,
		change : function(event, ui) { 
        			changeVariableValueText($('#monitor'), ui.value);
   				} 
	});
}

function changeVariableValueText($variable, value) {
	if(value == 0) {
		$variable.text("very low");
	} else if(value == 1) {
		$variable.text("low");
	} else if(value == 2) {
		$variable.text("medium");
	} else if(value == 3) {
		$variable.text("high");
	} else if(value == 4) {
		$variable.text("very high")
	} else {
		$variable.text("uuhhhhhh what? " + value);
	}

	checkEventCondition();
}

function displayEvent(currentEvent) {
	$('#events').text(currentEvent.eventText);
}

function getRandomEvent() {

	return events[Math.floor((Math.random() * events.length))];
}

function Event(newspeak, fear, unity, education, needs, past, monitor, eventText) {
    this.newspeak = newspeak;
    this.fear = fear;
    this.unity = unity;
    this.education = education;
    this.needs = needs;
    this.past = past;
    this.monitor = monitor;
    this.eventText = eventText; 
} 

function Slider(newspeak, fear, unity, education, needs, past, monitor, eventText) {

}

