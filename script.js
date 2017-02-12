var firstInput = document.getElementById('firstName')
var lastInput = document.getElementById('lastName')
var description = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var preview = document.getElementById('preview')
var generated = document.getElementById('generated')

var makeProfile = function () {
  var firstName = firstInput.value
  var lastName = lastInput.value
  var desc = description.value
  var email = emailInput.value
  var phone = phoneInput.value
  var paragraph =
  '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
  '<p>' + desc + '</p>' +
  '<p> If you\'re interested in a date, you can email me at ' +
  '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
  ' or give me a call at ' +
  '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>' +
  '. </p>'

  preview.textContent = paragraph
  generated.innerHTML = paragraph
}

firstInput.addEventListener('input', makeProfile)
lastInput.addEventListener('input', makeProfile)
description.addEventListener('input', makeProfile)
emailInput.addEventListener('input', makeProfile)
phoneInput.addEventListener('input', makeProfile)
