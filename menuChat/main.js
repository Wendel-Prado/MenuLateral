


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
        let celular = document.querySelector('#celular').value
        let email = document.querySelector('#email').value
        let mensagem = 'send?phone=' + telefone + '&text=Gostaria de conversar mais sobre como a Nvoip pode ajudar minha empresa%0AMeu Nome é ' + nome + '%0AMeu telefone para contato:%0A' + celular + '%0AMeu email:%0A' + email + ''
        if(isMobile()) {
            window.open(urlMobile + mensagem, '_blank')
        }else{
            window.open(urlDesktop + mensagem, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Iniciar a conversa'
        buttonSubmit.disabled = false
    }, 3000);
});