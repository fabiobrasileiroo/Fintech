// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("fullname");
let usernameLabel = document.querySelector('label[for="fullname"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
    usernameInput.classList.add("custom-placeholder")
    inputsCorretos.username = false

  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true
    usernameInput.classList.remove("custom-placeholder")
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
    emailInput.classList.add("custom-placeholder")
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    emailInput.classList.remove("custom-placeholder")
    inputsCorretos.email = false

  }
})     

// Função para validar CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
  if (cpf === '' || cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  soma = 0;

  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
}

// ---------- VALIDAÇÃO CPF ---------- //
let cpfInput = document.getElementById("cpf");
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfHelper = document.getElementById("cpf-helper");

togglePopup(cpfInput, cpfLabel);

// Validar valor do input
cpfInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.length !== 11 || !validarCPF(valor)) {
    // Adicionar estilos dinâmicos se o valor não for um CPF válido
    cpfHelper.innerText = "Digite um CPF válido";
    estilizarInputIncorreto(cpfInput, cpfHelper);
    inputsCorretos.cpf = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(cpfInput, cpfHelper);
    inputsCorretos.cpf = true;
  }
});

// Adicione "cpf" ao objeto inputsCorretos
//inputsCorretos.cpf = false;



// -----------Validacão senha ----//
let senhaInput = document.getElementById("password")
let senhaLabel = document.querySelector("label[for='password'")
let senhaHelper = document.getElementById("senha-helper")
console

togglePopup(senhaInput,senhaLabel)

let confirmarSenha = document.getElementById("cpassword")
let confirmarSenhaHelper = document.getElementById("confirma-senha-helper")
let confirmarSenhaLabel = document.getElementById('label[for="[cpassword]]')
senhaInput.addEventListener("blur", (e)=> {
    let valor1 = e.target.value
    if(valor1 == "") {
        senhaHelper.innerText = "O campo senha não pode estar vazio"
        estilizarInputIncorreto(senhaInput, senhaHelper)
        inputsCorretos.senha = false
        console.log("dando ruim")
        senhaInput.classList.add("custom-placeholder")
    } else {
        estilizarInputCorreto(senhaInput,senhaHelper)
        inputsCorretos.senha = true
        senhaInput.classList.add("custom-placeholder")
    }

    confirmarSenha.addEventListener("change", (e)=> {
        let valor2 = e.target.value
        if(valor2 == valor1) {
            estilizarInputCorreto(confirmarSenha,confirmarSenhaHelper)
            inputsCorretos.confirmarSenha = true
            confirmarSenha.classList.remove("custom-placeholder")
        } else {
            confirmarSenhaHelper.innerText = "As senhas precisam ser iguais!"
            estilizarInputIncorreto(confirmarSenha,confirmarSenhaHelper)
            inputsCorretos.confirmarSenha = false
            confirmarSenha.classList.add("custom-placeholder")

        }
    });
});

//desafio o valor do campo de confirmar senha tem que ser igual campo senha


// senhaInput.value dessa forma poderia pegar o valor

// -------------- Evitar Envio Do Formulario -------//
let btnSubmit = document.querySelector("button[type='submit'")
let inputsCorretos = { 
    username: false,
    email: false,
    senha: false,
    confirmarSenha: false,
    cpf: false
}
/*
btnSubmit.addEventListener("click", (e)=> {
    if(inputsCorretos.username == false || 
        inputsCorretos.email == false || 
        inputsCorretos.senha ==false || 
        inputsCorretos.confirmarSenha == false ||
        inputsCorretos.cpf == false) {
        e.preventDefault()
    } else {
        alert("formulario completo envidado com sucesso")
       window.location.href = '../Pages/dashboard.html';
    }
})
*/
btnSubmit.addEventListener("click", function (e) {
    console.log("Botão Clicado");

    if (
        !inputsCorretos.username ||
        !inputsCorretos.email ||
        !inputsCorretos.senha ||
        !inputsCorretos.confirmarSenha ||
        !inputsCorretos.cpf
    ) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos corretamente.");
    } else {
        // unicar forma que achei de entra na pagina é travando ela
        e.preventDefault()
        window.location.href = '../Pages/dashboard.html';
    }
});

// se preencher o formulario ele entra no core da aplicacao
/*
btnSubmit.addEventListener("click", function(e) {
    // Verificar se todos os campos estão preenchidos corretamente
    if(inputsCorretos.username &&
        inputsCorretos.email &&
        inputsCorretos.senha &&
        inputsCorretos.confirmarSenha &&
        inputsCorretos.cpf) {
        // Navegar para a página de destino
        window.location.href = '../Pages/dashboard.html';
    } else {
        // Exibir alerta ou mensagem informando sobre campos incorretos
        alert("Por favor, preencha todos os campos corretamente.");
    }
});
*/