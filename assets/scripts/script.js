function carregarPagina(){

    let horaView = window.document.querySelector(".horaView");
    let img = window.document.querySelector("img");
    let data = new Date();
    let hora = data.getHours();

    // hora = 22 // Forçando horario.

    horaView.innerHTML = `Agora são ${hora} horas.`

    if( hora >= 0 && hora <= 12){
        img.src = 'assets/img/manha.png'
        document.body.style.backgroundColor = '#af7e35';
    }

    else if (hora >= 12 && hora <= 18){
        img.src = 'assets/img/tarde.png';
        document.body.style.backgroundColor = '#996d61';

    }

    else{
        img.src = 'assets/img/noite.png';
        document.body.style.backgroundColor = '#1b1519';

    }

}