function escopo(){
    eventoIMC();
    function eventoIMC(){
        const formulario = document.querySelector('.calculo_imc_formulario');
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            salvaValores();
        })
        

    }


function salvaValores(){
    const peso = document.querySelector('.peso').value
    const altura = document.querySelector('.altura').value
    calculaIMC(peso, altura);
}

function calculaIMC(peso, altura){
    const imc_conta = (peso/(altura*altura)).toFixed(2);
    imc(imc_conta);

}

function imc(imc){
    let imc_valor = imc;
    let nivel;
    const nivel_imc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3','Digite um valor válido']
    if(imc >= 39.9) nivel = nivel_imc[5];
    if(imc >= 34.9) nivel = nivel_imc[4];
    if(imc >= 29.9) nivel = nivel_imc[3];
    if(imc >= 24.9) nivel = nivel_imc[2];
    if(imc >= 18.5) nivel = nivel_imc[1];
    if(imc < 18.5)  nivel = nivel_imc[0];
    if (isNaN(imc)) nivel = nivel_imc[6];
    if (isNaN(imc)) imc_valor = "0,00";
    
    resultadoIMC(nivel, imc_valor);
   
}

function resultadoIMC(nivel, imc){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = `Seu IMC é ${imc} (${nivel})`


}}
escopo();