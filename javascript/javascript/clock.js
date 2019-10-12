function Clock({template}){
	this._template = template;
}

// render() hold clock structure
Clock.prototype.render = function(){

	let today = new Date();

	// hour
	let hrs = today.getHours();
		if(hrs < 10) hrs = '0' + hrs; // 01 02 03 04 05 06 07 08 09  10 11 12 

	// min
	let min = today.getMinutes();
		if(min < 10) min = '0' + min; 

	// sec 
	let sec = today.getSeconds();
		if(sec < 10) sec = '0' + sec;

	 let output = this._template
	 			 .replace('h', hrs)
	 			 .replace('m', min)
	 			 .replace('s', sec);

	document.getElementById('clock').innerHTML = output;

}

// begining of clock
Clock.prototype.start = function() {
	this.render();
	setInterval(() => {this.render(), 1000});
}

// clearing the clock for a moment
Clock.prototype.stop = function() {
	document.getElementById("clock").style.visibility = "hidden";
}