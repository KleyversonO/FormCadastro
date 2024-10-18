const form = document.querySelector('.formLogin');
const emailInput = document.querySelector('.formLogin input[type="email"]');
const passwordInput = document.querySelector('.formLogin input[type="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('Por favor, preencha os campos de e-mail e senha.');

    if (!email) {
      emailInput.focus();
    } else {
      passwordInput.focus();
    }
    return;
  }

  console.log('Formulário enviado com email:', email, 'e senha:', password);

  window.location.href = "logado.html";
});

'use strict'; //ativa o modo restrito
// Código para consumo de API da ViaCEP
// https://viacep.com.br

// Limpar consulta do form já realizada
const limparformulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('estado').value = '';
}

// Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;    //Coloca o valor de logradouro da API dentro do campo rua do formulario
    document.getElementById('bairro').value = endereco.bairro;    //Coloca o valor de bairro da API dentro do campo bairro do formulario
    document.getElementById('cidade').value = endereco.localidade;    //Coloca o valor de localidade da API dentro do campo cidade do formulario
    document.getElementById('estado').value = endereco.uf;  //Coloca o valor de uf da API dentro do campo estado do formulario

}
//Verifica se o CEP é válido. Esse código tem a função de verificar se o que foi digitado são apenas números.
const eNumero = (numero) => /^[0-9]+$/.test(numero); //Expressão
// Verifica o tamanho do CEP. Esse código tem a função de verificar se o tamanho do código possui 8 digitos.
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Função para consumo de API ViaCep
const pesquisarCep =async() => {   //async é uma função para sincronização 

    //pesquisar daqui
    limparformulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //até aqui 
        const addres = await dados.json();
        
        if(addres.hasOwnProperty('erro')){ //hasOwnProperty
            alert('CEP não encontrado'); 

        }else{
        preencherFormulario(addres);
        }
    }else{
        alert('CEP incorreto');
    }
}

// Executa a ação de preenchimento do formulário ao deixar o campo do CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep); //addEventListener
document.querySelector('.formCep button').addEventListener('click', pesquisarCep);