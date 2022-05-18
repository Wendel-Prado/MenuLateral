/**
 * Embed do atendimento.
 *
 * @author Wendel Prado <wendel.prado@nvoip.com.br>
 * @date 12/05/2022
 * @version 12/05/2022
 */

 'use strict';



function handleClick(){
    var wpp = document.getElementById("div-wpp")
    var maisIm = document.getElementById("div-maisIm")
    var callMe = document.getElementById("div-callMe")
    if ( wpp.style.display === "none" ){
        wpp.style.display = "block";
    } else {
        wpp.style.display = "none";
    }
    if ( maisIm.style.display === "none" ){
        maisIm.style.display = "block";
    } else {
        maisIm.style.display = "none";
    }if ( callMe.style.display === "none" ){
        callMe.style.display = "block";
    } else {
        callMe.style.display = "none";
    }

    // wpp.addEventListener('onload')
}

function clickMaisIm(){
    closeModal()
    const preventClick = document.querySelector('#mais-support-widget')
    const teste = document.querySelector('#mais-support-app')
    
    if (preventClick === null){
    var elem = document.createElement('script');
    var script = document.getElementsByTagName('script')[0];

    elem.async=!0;
    elem.src="https://app.mais.im/support/assets/js/core/embed.js";
    elem.id='maisim';
    elem.charset='utf-8';
    elem.setAttribute('data-token', "75ee4623a9a19e098718a830adabf6e4");
    elem.setAttribute('data-maximized',true);
    elem.setAttribute('data-untracked-visitor', true);
    script.parentNode.insertBefore(elem,script);

    } else if (preventClick !== null){
        document.querySelector('#mais-support-header').click()
        
    }
    
}
     
function clickCallme(){
    closeModal()
    closeMaisIm()
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
        window.nvoipcallpage.init("900150983cd24fb0d6963f7d28e17f72");
    }
   
    
    document.body.insertAdjacentElement('beforeend',script)
    
   
        }
    }
    automatic ()
    
    setTimeout(()=>{
        document.querySelector("._6h2kp91").click()
    
    },300);
    
}

function closeMaisIm(){
    
    if(document.querySelector('.hide') != null){
        if(document.querySelector('.minimized.closed') === null){
    document.querySelector('.hide').click()}
    }
}
function openModal(){
    closeMaisIm()
    if(document.querySelector('.popupFormWpp.active') === null){
    let open = document.getElementById("popupFormWpp")
    open.classList.add("active");
    const formulario = document.querySelector('#formulario');
    const buttonSubmit = document.querySelector('#submit');
    const urlDesktop = 'https://web.whatsapp.com/';
    const urlMobile = 'whatsapp://';
    const telefone = '551141186267';

    formulario.addEventListener('submit', (event) => {
        event.preventDefault()
        buttonSubmit.disabled = true
        const data = new FormData(event.target);
        const teste = Object.fromEntries(data.entries());
        teste.topics = data.getAll("topics");
        setTimeout(() => {
            let nome = document.querySelector('#nome').value
            let celular = document.querySelector('#telefone').value
            let email = document.querySelector('#email').value
        //     document.querySelector("#rd-text_field-lPgGDLCONuYA1j31y6Fl4Q").value = nome
        //     document.querySelector("#rd-phone_field-gkJfI91Ixmun-bPXKf7Cyg").value = "+55 " + celular
        //     document.querySelector("#rd-email_field-zDp4PJd28U3WZWW92N9qDw").value = email
            
            

            buttonSubmit.disabled = false
            document.getElementsByClassName("box").click()
        }, 300);
        
    });
        const masks = {
        phone (value) {
            return value
            .replace(/\D+/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1')
        }
        }
        document.querySelectorAll('input').forEach($input => {
            const field = $input.dataset.js
        
            $input.addEventListener('input', e => {
            e.target.value = masks[field](e.target.value)
            }, false)
        })
    } else {
        closeModal()
    }
        
        
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
// const saveForm = useCallback (async () => {
//     await api
//         .post("/formDb", {
//             name,
//             email,
//             phone,
//         })
// })




