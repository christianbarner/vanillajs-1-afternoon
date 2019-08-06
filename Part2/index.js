console.log('The house always wins!')


const idInput = document.getElementById('cardId')
const colorInput = document.getElementById('styleAttribute');


function setCard() {
  const card = document.getElementById(idInput.value)
  card.style.color = colorInput.value
}