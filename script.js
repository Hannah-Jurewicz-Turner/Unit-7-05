// Connects the button to the funtion with the user input.
document.getElementById('button').addEventListener('click', schoolWork)
let userAge = 0
let userDate = 'Friday'

function schoolWork () {
  // Connects the input boxes to the user's input and makes program read numbers as integers.
  userAge = document.getElementById('input-one').value
  userAge = parseInt(userAge)

  userDate = document.getElementById('input-two').value

  // Checks the age and day of week entered by user and checks if they have to go to school, work or if it's the weekend.
  if ((userAge < 18) && (userDate !== 'Saturday' && userDate !== 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Time for school!'
  } else if ((userAge < 18) && (userDate === 'Saturday' || userDate === 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Relax for the weekend!'
  } else if ((userAge >= 18) && (userDate !== 'Saturday' && userDate !== 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Go to work!'
  } else if ((userAge >= 18) && (userDate === 'Saturday' || userDate === 'Sunday')) {
    document.getElementById('answer').innerHTML = 'Relax for the weekend!'
  } else {
    document.getElementById('answer').innerHTML = 'Invalid. Enter age and day of week to see your schedule.'
  }
}
