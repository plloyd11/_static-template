const scale = document.querySelector('#scale')
const tempNumber = document.querySelector('#temperature-number')
const submit = document.querySelector('#submit-btn')
const tempOutput = document.querySelector('#temp-output')

const convert = () => {
  const currentNumber = tempNumber.value

  if (scale.options[scale.selectedIndex].value === 'fahrenheit') {
    return Math.round((5 / 9) * (currentNumber - 32))
  }
  if (scale.options[scale.selectedIndex].value === 'celsius') {
    return Math.round((currentNumber * 9) / 5 + 32)
  }
  alert('Pick a scale!')
}

submit.addEventListener('click', e => {
  e.preventDefault()
  tempOutput.innerHTML = `${convert()}`
})
