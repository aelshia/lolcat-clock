var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime=false;
var timeEventJs = document.getElementById("timeEvent");
var lolcatimg= document.getElementById('lolcat');
var partyButton= document.getElementById('partyTimeButton');
var selectorWake= document.getElementById('wakeUpTimeSelector');
var selectorLunch = document.getElementById('lunchTimeSelector');
var selectorNap= document.getElementById('napTimeSelector');

var image;
//create clock
var showCurrentTime = function() {
	var clock = document.getElementById('clock');
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";
	
	//set meridian
	if (hours >= noon){
		meridian ="PM";
	}
	//set hours
	if(hours > noon){
		hours = hours-noon;
	}
	if (minutes <10){
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var clocknow = hours+ ":"+minutes+":"+seconds + " "+ meridian;
	clock.innerText = clocknow;
};


//increment clock by one sec

var updates = function(){

if (time == partyTime){
	image= "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "IZ PARTEE TIME!!";
	
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
	
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
	
} else if (time == wakeupTime) {
	image= "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
	
} else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good morning!";
	
} else if (time > evening) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
	
} else {
    messageText = "Good afternoon!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";	
}

timeEventJs.innerText = messageText;
lolcatimg.src = image;
};
showCurrentTime();
	setInterval(updates,sec);
var sec=1000;
updates();
//making the party button work
var partyEvent = function() {
	if (isPartyTime=== false){
		isPartyTime = true;
		time = partyTime;
		partyButton.innerText= "PARTY TIME !";
		partyButton.style.backgroundColor ="#222";
		

	}
	else {
		isPartyTime = false;
		time  = new Date().getHours();
		partyButton.innerText= "PARTY OVER !";
		partyButton.style.backgroundColor = "#0A8DAB";
	}
};
partyButton.addEventListener('click',partyEvent);
// selector

var selectWake = function(){
	wakeupTime = selectorWake.value;
};
var selectLunch = function(){
	lunchTime = selectorLunch.value;
};
var selectNap = function(){
	napTime= selectorNap.value;
};

selectorWake.addEventListener('change',selectWake);
selectorLunch.addEventListener('change',selectLunch);
selectorNap.addEventListener('change',selectNap);
	
