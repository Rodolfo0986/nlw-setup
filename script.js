//Registro de memória
const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

// Criou evento de click e adição
button.addEventListener('click', add)

// criou evento: sempre que houver mudança ele salva
form.addEventListener("change", save)

//Função de adição
function add() {

  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já Incluso")
    return
  }  

  alert("Adicionado com Sucesso")
  nlwSetup.addDay(today)
}

//Função para salvamento
function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()