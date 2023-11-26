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
    emailInput.classList.remove("custom-placeholder")
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    emailInput.classList.add("custom-placeholder")
    inputsCorretos.email = false

  }
})     

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

// -----------Validacão senha ----//
let senhaInput = document.getElementById("password")
let senhaLabel = document.querySelector("label[for='password'")
let senhaHelper = document.getElementById("senha-helper")

togglePopup(senhaInput,senhaLabel)

senhaInput.addEventListener("blur", (e)=> {
    let valor1 = e.target.value
    if(valor1 == "") {
        senhaHelper.innerText = "O campo senha não pode estar vazio"
        estilizarInputIncorreto(senhaInput, senhaHelper)
        inputsCorretos.senha = false
        senhaInput.classList.add("custom-placeholder")
    } else {
        estilizarInputCorreto(senhaInput,senhaHelper)
        inputsCorretos.senha = true
        senhaInput.classList.remove("custom-placeholder")
    }
});

// -------------- Evitar Envio Do Formulario -------//
let btnSubmit = document.querySelector("button[type='submit'")
console.log(btnSubmit)
let inputsCorretos = { 
    email: false,
    senha: false,
}

btnSubmit.addEventListener("click", (e)=> {
    if( inputsCorretos.email == false || 
        inputsCorretos.senha ==false)
        {
        e.preventDefault()
    } else {
        // unicar forma que achei de entra na pagina é travando ela
        e.preventDefault()
        window.location.href = '../Pages/dashboard.html';
    }
})