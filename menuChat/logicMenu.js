/**
 * Embed do atendimento.
 *
 * @author Wendel Prado <wendel.prado@nvoip.com.br>
 * @date 12/05/2022
 * @version 27/05/2022
 */

 'use strict';
let counter = 0;
let tempRender = null;
function handleClick(){
    var wpp = document.getElementById("div-wpp")
    var maisIm = document.getElementById("div-maisIm")
    var callMe = document.getElementById("div-callMe")
    if ( wpp.style.display === "none" &&  document.querySelector('#chatNvoip').getAttribute('wpp-visible') !== 'false'){
        wpp.style.display = "block";
    } else {
        wpp.style.display = "none";
    }
    if ( maisIm.style.display === "none" && document.querySelector('#chatNvoip').getAttribute('mais-im-visible') !== 'false'){
        maisIm.style.display = "block";
    } else {
        maisIm.style.display = "none";
    }
    if ( callMe.style.display === "none" && document.querySelector('#chatNvoip').getAttribute('callme-visible') !== 'false'){
        callMe.style.display = "block";
    } else {
        callMe.style.display = "none";
    } 
    
    if (document.querySelector('#chatNvoip').getAttribute('mais-im-visible') === 'false' 
    && document.querySelector('#chatNvoip').getAttribute('callme-visible') !== 'false'){

        wpp.style.bottom = "109px"
    } else if (document.querySelector('#chatNvoip').getAttribute('mais-im-visible') !== 'false' 
    && document.querySelector('#chatNvoip').getAttribute('callme-visible') === 'false'){
        wpp.style.bottom = "108px"
        maisIm.style.bottom = "60px"
    }else if (document.querySelector('#chatNvoip').getAttribute('mais-im-visible') === 'false' 
    && document.querySelector('#chatNvoip').getAttribute('callme-visible') === 'false'){
        wpp.style.bottom = "55px"
    }
    document.querySelector('.expand').removeAttribute('original-title')

}

function requestMaisIm(){
const scriptNvoip = document.querySelector('#chatNvoip')
const preventClick = document.querySelector('#mais-support-widget')

if (preventClick === null){
var elem = document.createElement('script');
var script = document.getElementsByTagName('script')[0];
elem.async=!0;
elem.src="https://beta-app.mais.im/support/assets/js/core/embed.js";
elem.id='maisim';
elem.charset='utf-8';
elem.setAttribute('data-partner', 'nvoip')
elem.setAttribute('data-token', scriptNvoip.getAttribute('tokenmaisim'));
elem.setAttribute('data-untracked-visitor', true);
script.parentNode.insertBefore(elem,script);

} else {
    
}

}
requestMaisIm()
function clickMaisIm(){
    
    closeModal()
    const scriptNvoip = document.querySelector('#chatNvoip')
    const preventClick = document.querySelector('#mais-support-widget')
    
    if(document.querySelector('#chatNvoip').getAttribute('position') === 'left'){
        preventClick.setAttribute('style','left:90px')
    }

    if (preventClick === null){
    var elem = document.createElement('script');
    var script = document.getElementsByTagName('script')[0];
    elem.async=!0;
    elem.src="https://beta-app.mais.im/support/assets/js/core/embed.js";
    elem.id='maisim';
    elem.charset='utf-8';
    elem.setAttribute('data-maisim-partner', 'nvoip')
    elem.setAttribute('data-token', scriptNvoip.getAttribute('tokenmaisim'));
    elem.setAttribute('data-maximized',true);
    elem.setAttribute('data-untracked-visitor', true);
    script.parentNode.insertBefore(elem,script);
    document.querySelector(".boxTxtT12").style.display = 'none'
   
    } else if (preventClick !== null){
        document.querySelector('#mais-support-header').click()
       
        if (document.querySelector('#mais-support-widget.opened.minimized') !== null){
            document.querySelector(".boxTxtT12").style.display = 'none'
        } else {
            document.querySelector(".boxTxtT12").style.display = 'flex'
            document.querySelector('.expand').removeAttribute('original-title')
        }
        document.querySelector('#mais-support-header').addEventListener('click', ()=> {
            if (document.querySelector('#mais-support-widget.opened.minimized') !== null){
                document.querySelector(".boxTxtT12").style.display = 'none'
            } else {
                document.querySelector(".boxTxtT12").style.display = 'flex'
            }
        })
    }
    handleClick()
}
     
function requestCallme(){
    const scriptNvoip = document.querySelector('#chatNvoip')
    
    async function automatic (){
    const preventClick = document.querySelector('#callMe')
    if(preventClick == null){
    const link = document.createElement('link');
		link.id= 'callMe';
		link.href = 'https://nvoipcom.s3-sa-east-1.amazonaws.com/public/callme/dist/main.css';
        link.media='screen';
		link.rel = 'stylesheet';
		link.type = 'text/css';
    
    document.head.append(link)
    const body = document.getElementsByTagName('body')
    const script = document.createElement('script');
    script.src = "https://nvoipcom.s3.sa-east-1.amazonaws.com/public/callme/dist2/bundle.js";
    script.onload = function(){
        window.nvoipcallpage.init(scriptNvoip.getAttribute('tokencallme'));
    }
   
    
    document.body.insertAdjacentElement('beforeend',script)
    
   
        }
    }
    automatic ()
    
   
}
requestCallme()

function clickCallme(){
    closeMaisIm()
    closeModal()
    handleClick()
    document.querySelector("._6h2kp91").click()


}

function closeMaisIm(){
    
    if(document.querySelector('.hide') != null){
        if(document.querySelector('.minimized.closed') === null){
    document.querySelector('.hide').click()
}
        }
}

function openModal(){
    closeMaisIm()
    if(document.querySelector('.popupFormWpp.active') === null){
    const valueTelephone = document.querySelector("#telefoneWPP");
    let open = document.getElementById("popupFormWpp")
    open.classList.add("active");
    const formulario = document.querySelector('#formulario');
    const buttonSubmit = document.querySelector('#submit3');
    const urlDesktop = 'https://web.whatsapp.com/';
    const urlMobile = 'whatsapp://';
    const telefone = '551141186267';
    
    const masksName = {
        nome (nome){
            return nome
            .replace(/[0-9]+/g, '')
            .replace(/[!#$%&'@,.;:+/=?^_`{|}~-]+/g,'')
           
        }
    } 
    document.querySelectorAll('#nomeWPP').forEach($input => {
        const field = $input.dataset.js
    
        $input.addEventListener('input', e => {
        e.target.value = masksName[field](e.target.value)
        }, false)
    })
    
        const masksPhone = {
        phone (celular) {
            return celular
            .replace(/\D+/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
        }

        }
        document.querySelectorAll('#telefoneWPP').forEach($input => {
            const field = $input.dataset.js
        
            $input.addEventListener('input', e => {
            e.target.value = masksPhone[field](e.target.value)
            }, false)
        })

        handleClick()
        
    } else {
        closeModal()
    }

    };

function cleanError(){
        let variavel = document.getElementById("telefoneWPP")
                let variavelMessage = document.querySelector("small")
                variavelMessage.innerText = "";
                variavel.parentElement.className = "form-element-popupFormWpp";
};

function closeModal(){
        let open = document.getElementById("popupFormWpp")
        open.classList.remove("active");
        
                
}
function isMobile() {
        if (sessionStorage.desktop)
            return false;
        else if (localStorage.mobile)
            return true;
        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
        for (var i in mobile)
            if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
        return false;
}

var url_atual = window.location.href;
let ip = '';
   
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", 'https://api.ipify.org?format=json');
xmlhttp.send();
xmlhttp.onload = function(e) {
 ip = xmlhttp.response;
}

function buttonSubmit(){
    let open = document.getElementById("popupFormWpp")
    open.classList.add("active");
    const formulario = document.querySelector('#formulario');
    const urlDesktop = 'https://web.whatsapp.com/';
    const urlMobile = 'whatsapp://';
    const telefone = '551141186267';
     saveForm()
    let nome = document.querySelector('#nomeWPP').value
            let celular = document.querySelector('#telefoneWPP').value
            let email = document.querySelector('#emailWPP').value
            let variavelName = document.querySelector("#warningName")
            let variavelPhone = document.querySelector("#warningPhone")
            let variavelEmail = document.querySelector("#warningEmail")
            if(nome.trim() == '' || nome.length < 4){
                variavelName.style.display = "flex";
                return
            }
            if(email.length == '' || variavelEmail.style.display === 'flex'){
                variavelEmail.style.display = 'flex';
                return
            } 

            if(celular.length !== 15 && celular.length !== 14){
                variavelPhone.style.display = "flex";
                return
            } 
            
            
            

            let mensagem = 'send?phone=' + telefone + '&text=Olá, gostaria de conversar mais sobre como a Nvoip pode ajudar minha empresa!%0AMeu nome é ' + nome + '%0AMeu telefone para contato: ' + celular + '%0AMeu email: ' + email + ''
            if(isMobile()) {
                window.open(urlMobile + mensagem, '_blank')
            }else{
                window.open(urlDesktop + mensagem, '_blank')
                
            }
            event.preventDefault(tempRender)
            buttonSubmit.disabled = false
            document.querySelector(".close-btn").click()

}
    
function saveForm() {
    let nome = document.querySelector('#nomeWPP').value
    let celular = document.querySelector('#telefoneWPP').value
    let email = document.querySelector('#emailWPP').value
    let canReceiveCalls = document.querySelector('#confirm').checked
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "hash": "da580c402098bf8fa907b067720a36566249f94b7c51b45b5a348212daee7174",
      "name": nome,
      "email": email,
      "telephone": celular,
      "ip":JSON.parse(ip).ip,
      "canReceiveCalls": canReceiveCalls,
      "url": url_atual,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("https://api.nvoip.com.br/v2/saveInformations", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

function validacaoEmail(field) {
let usuario = field.value.substring(0, field.value.indexOf("@"));
let dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
        let variavelMessage = document.querySelector("#warningEmail")
        variavelMessage.style.display = 'none';

}
else {
    let variavelMessage = document.querySelector("#warningEmail")
    variavelMessage.style.display = 'flex';

}
}
    

function validacaoNome(field){
    let nome = document.querySelector('#nomeWPP').value
if(nome.trim() == '' || nome.length < 3){
    let variavelMessage = document.querySelector("#warningName")
    variavelMessage.style.display = "flex";
    
}else{
    let variavelMessage = document.querySelector("#warningName")
    variavelMessage.style.display = "none";
}
}
function validacaoCelular(field){
let celular = document.querySelector('#telefoneWPP').value
if(celular.length !== 15 && celular.length !== 14){
    let variavelMessage = document.querySelector("#warningPhone")
    variavelMessage.style.display = "flex";
  
} else{
    let variavelMessage = document.querySelector("#warningPhone")
    variavelMessage.style.display = "none";
}
}



  function timeout(){
  
    tempRender = setInterval(function(){
    counter = counter + 1
    let iconWpp = document.getElementById("div-wpp")
    let iconMaisIm = document.getElementById("div-maisIm")
    let iconCallMe = document.getElementById("div-callMe")
    let iconBoxTxt = document.querySelector(".boxTxtT12")
    let iconBoxNvoip = document.querySelector("#boxNvoip")
    
    if(iconWpp != null || counter > 270){
    clearInterval(tempRender)
    iconBoxTxt.innerHTML =  document.querySelector('#chatNvoip').getAttribute('balloontxt')
    if(document.querySelector('#chatNvoip').getAttribute('position') === 'left' ){
    iconBoxNvoip.setAttribute('style', 'left: 30px')
    iconBoxTxt.setAttribute('style','display:flex; left:95px')
    iconCallMe.setAttribute('style', 'display:none; left: 35px')
    iconMaisIm.setAttribute('style', 'display:none; left: 35px')
    iconWpp.setAttribute('style', 'display:none; left: 35px')


    } else if(document.querySelector('#chatNvoip').getAttribute('position') !== 'left'){
        iconBoxTxt.setAttribute('style', 'display:flex; right: 85px')
    }
    
    if (document.querySelector('#chatNvoip').getAttribute('balloontxt') === ''){
        iconBoxTxt.style.display = 'none'
    }

}

},15)

}


timeout()

  



