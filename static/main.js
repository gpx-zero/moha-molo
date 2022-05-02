// Change lighting mode ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

(function setup_lighting_mode(){

	if( localStorage.getItem('mode') ){
		document.getElementById('lighting_mode').setAttribute('mode', localStorage.getItem('mode'));
		change_lighting_mode();
	}

})();

function change_lighting_mode(){

	let mode = document.getElementById('lighting_mode');

	if( mode.getAttribute('mode') == 'dark' ){
		set_light_mode();
		mode.setAttribute('mode', 'light');
		mode.innerHTML = '☽';
		localStorage.setItem('mode', 'dark');

	}else{
		set_dark_mode();
		mode.setAttribute('mode', 'dark');
		mode.innerHTML = '☀';
		localStorage.setItem('mode', 'light');
	}

}

function set_light_mode(){

	document.getElementById('body').style.color = '#151515';
	document.getElementById('body').style.backgroundColor = '#e2e2e2';
	document.getElementById('main_header').style.backgroundColor = '#e2e2e2';

	let section = document.getElementsByClassName('section');
	for(let id=0; id<section.length; id++){
		section[id].style.backgroundColor = '#f0f0f0';
	}

}

function set_dark_mode(){

	document.getElementById('body').style.color = '#f2f2f2';
	document.getElementById('body').style.backgroundColor = '#222222';
	document.getElementById('main_header').style.backgroundColor = '#222222';

	let section = document.getElementsByClassName('section');
	for(let id=0; id<section.length; id++){
		section[id].style.backgroundColor = '#303030';
	}
	
}

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

(function(){ // Text play

	function rand(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}

	let text_play = document.getElementById('text_play'),
		count = 2022;

	setInterval(()=>{
		text_play.innerHTML = '▼ Download year ' + count++;
		text_play.style.color = 'rgb('
			+rand(50, 255)+','
			+rand(50, 255)+','
			+rand(50, 255)+')';
	}, 50);

})();