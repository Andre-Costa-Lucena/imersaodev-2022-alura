const calcular = document.getElementById('calcular');

function media () {
    const primeiroBimestre = parseFloat(document.getElementById('primeiro-bimestre').value);
    const segundoBimestre = parseFloat(document.getElementById('segundo-bimestre').value);
    const terceiroBimestre = parseFloat(document.getElementById('terceiro-bimestre').value);
    const quartoBimestre = parseFloat(document.getElementById('quarto-bimestre').value);
    const resultado = document.getElementById('resultado');

    if (primeiroBimestre !== '' && segundoBimestre !== '' && terceiroBimestre !== '' && quartoBimestre !== '') {

        const mediaFinal = ((primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre) / 4).toFixed(1);

        let pontuacao = '';

        if (mediaFinal < 5){

            pontuacao = 'Sinto muito você está reprovado!';

        }else if (mediaFinal < 7){

            pontuacao = 'Você está em recuperação!';

        }else if (mediaFinal >= 7  &&  mediaFinal < 10){

            pontuacao = 'Voçê foi aprovado, parabéns!';

        }else if(mediaFinal == 10){

            pontuacao = 'Parabéns vodÊ foi aprovado com nota máxima!';

        }

        resultado.textContent = `Sua média é ${mediaFinal}. ${pontuacao}`;

    }else{
        resultado.textContent = 'Prencha todos os campos!!!'
    }
}

calcular.addEventListener('click', media);

