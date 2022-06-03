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
		script.src = `logicMenu.js`;

	

		body[0].insertAdjacentElement('beforeend',script);
		script.onload = function() {
			self.init();
		}
	},

	init: function() {
		const self = this;
		const chatNvoipElement = document.querySelector('#chatNvoip');
		const link = document.createElement('link');
		link.id= 'menu-nvoip'
		if(chatNvoipElement.getAttribute('iswordpress') === 'true')
		{
		link.href = 'styleWP.css';}
		else{
		link.href = 'style.css';
		}
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
		
		
		load('template.html', function (data) {
			let template = data.responseText
		  div.innerHTML = template
		});
		
		
	},
};
chatNvoip.prepare();