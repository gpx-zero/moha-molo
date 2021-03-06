// Change lighting mode ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

(function setup_lighting_mode(){

	if( localStorage.getItem('mode') == 'dark' ){
		set_dark_mode();
		document.getElementById('lighting_mode').innerHTML = '☀';

	}else{
		set_light_mode();
		document.getElementById('lighting_mode').innerHTML = '☽';

	}
})();

function change_lighting_mode(){

	let mode = document.getElementById('lighting_mode');

	if( mode.innerHTML ==  '☽'){
		set_dark_mode();
		mode.innerHTML = '☀';
		localStorage.setItem('mode', 'dark');

	}else{
		set_light_mode();
		mode.innerHTML = '☽';
		localStorage.setItem('mode', 'light');

	}

}

function set_light_mode(){

	document.getElementById('body').style.color = '#151515';
	document.getElementById('body').style.backgroundColor = '#e2e2e2';
	document.getElementById('main_header').style.backgroundColor = '#e2e2e2';
	document.getElementById('footer_header').style.backgroundColor = '#e2e2e2';

	let section = document.getElementsByClassName('section');
	for(let id=0; id<section.length; id++){
		section[id].style.backgroundColor = '#f0f0f0';
	}

}

function set_dark_mode(){

	document.getElementById('body').style.color = '#f2f2f2';
	document.getElementById('body').style.backgroundColor = '#222222';
	document.getElementById('main_header').style.backgroundColor = '#222222';
	document.getElementById('footer_header').style.backgroundColor = '#222222';

	let section = document.getElementsByClassName('section');
	for(let id=0; id<section.length; id++){
		section[id].style.backgroundColor = '#303030';
	}
	
}

// Text play ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

(function(){

	let text_play = document.getElementById('text_play'),
		color_list = ['#d00', '#0d0', '#00d', '#dd0', '#d0d', '#0dd', '#ddd'],
		count = 2022;

	setInterval(()=>{
		text_play.innerHTML = '▼ Download year ' + count++;
		text_play.style.color = color_list[count%7];
	}, 50);

})();

// main ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ...