const alrt = document.getElementById('message');
const message_text = document.getElementById('message-text');

function closeAlert(){
    if(alrt.classList.contains('_active')){
        alrt.classList.remove('_active');
    }
}

function openAlert(message){
    message_text.innerText = message;
    if(!alrt.classList.contains('_active')){
        alrt.classList.add('_active');
        setTimeout(closeAlert, 3000);
    }
}