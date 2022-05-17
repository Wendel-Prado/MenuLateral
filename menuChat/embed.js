/**
 * Embed do atendimento.
 *
 * @author Wendel Prado 
 * @date 12/05/2022
 * @version 12/05/2022
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

		// Atualiza o cdn para apontar para a pasta 'support'
		

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
		const chatNvoipElement = document.getElementsByClassName('chat-menu-Nvoip');
		const link = document.createElement('link');
		link.id= 'menu-nvoip'
		link.href = 'style.css';
		link.rel = 'stylesheet';
		link.type = 'text/css';
		// const token = maisimElement.getAttribute('data-token');

		// self.params.maximized = false;

		// if (navbar.hasAttribute('data-maximized')) {
		// 	self.params.maximized = navbar.getAttribute('data-maximized');
		// }


		
		// Carrega os CSS.

		document.head.append(link);

		let teste = document.querySelector('#menu-nvoip')
		console.log(teste)
		teste.addEventListener("load",()=>{self.render();})
	
	},

	
	render: function() {
		const self = this;
		const body = document.getElementsByTagName('body');
		

		// Iframes.
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
			let teste = data.responseText
		  div.innerHTML = teste
		});
		
		
	},
};
chatNvoip.prepare();