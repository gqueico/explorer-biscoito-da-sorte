const fortuneCookiePhrases = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
  'Siga os bons e aprenda com eles.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.',
  'O bom-senso vale mais do que muito conhecimento.',
  'Quem quer colher rosas tem de estar preparado para suportar os espinhos.'
]

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const newCookie = document.querySelector("#newCookie")
let randomPhrase = Math.round(Math.random() * fortuneCookiePhrases.length)

fortuneCookie.addEventListener('click', handleCookieClick)
newCookie.addEventListener('click', handleNewCookieClick)
document.addEventListener('keydown', handleKeydownEnter)

function handleCookieClick() {
  toggleScreen()

  if(randomPhrase == fortuneCookiePhrases.length) {
    randomPhrase = randomPhrase - 1
  }

  screen2.querySelector("p").innerText = fortuneCookiePhrases[randomPhrase]
}

function handleNewCookieClick() {
  toggleScreen()
  randomPhrase = Math.round(Math.random() * fortuneCookiePhrases.length)
}

function handleKeydownEnter(event) {
  if(event.key == 'Enter' && screen2.classList.contains("hide")) {
    handleCookieClick()
  } else if(event.key == 'Enter' && screen1.classList.contains("hide")) {
    handleNewCookieClick()
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}