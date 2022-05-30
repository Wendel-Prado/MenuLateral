/**
 * Embed do atendimento.
 *
 * @author Wendel Prado 
 * @date 12/05/2022
 * @version 27/05/2022
 */

 const chatNvoip = {
	id: 'chatNvoip',

	url: '', // Vai ser sobrescrito.

	// Ambiente da aplicação.
	// --START_JS-- //
	environment: { },
	// --END_JS-- //

	// params: {},

	prepare: function() {

		const self = this;
		const body = document.getElementsByTagName('body');


		

		const script = document.createElement('script');

		script.async = !0;
		script.charset = 'UTF-8';
		script.src = `https://menulateralnvoip.s3.sa-east-1.amazonaws.com/logicMenu.js`;

	

		body[0].insertAdjacentElement('beforeend',script);
		script.onload = function() {
			self.init();
		}
	},

	init: function() {
		console.log(window)
		const self = this;
		const chatNvoipElement = document.getElementsByClassName('chat-menu-Nvoip');
		const link = document.createElement('link');
		link.id= 'menu-nvoip'
		link.href = 'https://menulateralnvoip.s3.sa-east-1.amazonaws.com/styleWP.css';
		link.rel = 'stylesheet';
		link.type = 'text/css';
		

		document.head.append(link);

		let teste = document.querySelector('#menu-nvoip')
		teste.addEventListener("load",()=>{self.render();})
	
	},

	
	render: function() {
		const self = this;
		const body = document.getElementsByTagName('body');
		

		const div = document.createElement('div');

		div.className = 'chat-menu-Nvoip';

		body[0].insertAdjacentElement('afterbegin',div)

		function load(url, callback){
			var xhr = new XMLHttpRequest();
			xhr.onloadend = function(e){
				callback(xhr);
			};
			
			xhr.open('GET', url);
			xhr.send();
			
		}
		
		
		load('https://menulateralnvoip.s3.sa-east-1.amazonaws.com/template.html', function (data) {
			let template = data.responseText
		  div.innerHTML = template
		});
		
		
	},
};
chatNvoip.prepare();