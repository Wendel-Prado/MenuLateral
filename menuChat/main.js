

function handleClick(){
    var wpp = document.getElementById("wpp")
    var maisIm = document.getElementById("maisIm")
    var callMe = document.getElementById("callMe")
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
}


function clickMaisIm(){
    document.getElementById('mais-support-compact').click();
}
function clickCallme(){
    document.querySelector("._6h2kp91").click();
}

function openModal(){
    let open = document.getElementById("popup")
    open.classList.add("active");
    console.log(open)
};

function closeModal(){
    let open = document.getElementById("popup")
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


const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefone = '551141186267';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nome = document.querySelector('#nome').value
        let celular = document.querySelector('#telefone').value
        let email = document.querySelector('#email').value
        document.querySelector("#rd-text_field-lPgGDLCONuYA1j31y6Fl4Q").value = nome
        document.querySelector("#rd-phone_field-gkJfI91Ixmun-bPXKf7Cyg").value = "+55 " + celular
        document.querySelector("#rd-email_field-zDp4PJd28U3WZWW92N9qDw").value = email
        
        

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Iniciar a conversa'
        buttonSubmit.disabled = false
        console.log(document.querySelector("#rd-text_field-lPgGDLCONuYA1j31y6Fl4Q").value)
        document.querySelector("#rd-button-ks4re99u").click()
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