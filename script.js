
let contadorAcerto = 0;

let contadorErro = 0;

function Validacao1() {
    const options = document.getElementsByName('A');
    let selectedOption = null;

    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    if (selectedOption) {
        alert("Você acertou");
        contadorAcerto = contadorAcerto++;

    } else {
        alert("Alternativa errada");
        contadorErro = contadorErro++;

    };

    manterPosicao();
}



function Validacao2() {
    const options = document.getElementsByName('C');
    let selectedOption = null;

    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    if (selectedOption) {
        alert("Você acertou");
        contadorAcerto = contadorAcerto++;

    } else {
        alert("Alternativa errada");
        contadorErro = contadorErro++;

    }

    manterPosicao();
}



function Validacao3() {
    const options = document.getElementsByName('C');
    let selectedOption = null;

    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    if (selectedOption) {
        alert("Você acertou");
        contadorAcerto = contadorAcerto++;

    } else {
        alert("Alternativa errada");
        contadorErro = contadorErro++;

    }

    manterPosicao();
}


function Validacao4() {
    const options = document.getElementsByName('A');
    let selectedOption = null;

    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    if (selectedOption) {
        alert("Você acertou");

        contadorAcerto = contadorAcerto++;
        
        alert("Total de acertos: " + contadorAcerto);

        alert("Total de erros: " + contadorErro);

    } else {
        alert("Alternativa errada");

        contadorErro = contadorErro++;

        alert("Total de acertos: " + contadorAcerto);

        alert("Total de erros: " + contadorErro);

    }

    manterPosicao();
    
}


function manterPosicao() {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    const posicaoAtual = window.scrollY;
    window.scrollTo(0, posicaoAtual);
}