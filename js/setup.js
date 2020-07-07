'use strict';

var WIZARD_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56,159,117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var displayDialog = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};
displayDialog();

var getRandomElement = function (item) {
  var randomElement = item[Math.floor(Math.random() * item.length)];
  return randomElement;
};

var renderWizard = function (wizard) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  similarListElement.appendChild(wizardElement);
};

var displayWizards = function () {
  for (var i = 0; i < 4; i++) {
    var wizards = {
      name: getRandomElement(WIZARD_FIRST_NAME),
      surname: getRandomElement(WIZARD_SECOND_NAME),
      coatColor: getRandomElement(WIZARD_COLOR),
      eyesColor: getRandomElement(WIZARD_EYES)
    };
    renderWizard(wizards);
  }
};
displayWizards();

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && !setupUserName.matches(':focus')) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireballColorInput = document.querySelector('[name = fireball-color]');
var coatColorInput = document.querySelector('[name = coat-color]');
var eyesColorInput = document.querySelector('[name = eyes-color]');

var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


setupFireballWrap.addEventListener('click', function () {
  var color = getRandomElement(FIREBALL_COLOR);
  setupFireballWrap.style.backgroundColor = color;
  fireballColorInput.value = color;
});

wizardCoat.addEventListener('click', function () {
  var color = getRandomElement(WIZARD_COLOR);
  wizardCoat.style.fill = color;
  coatColorInput.value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = getRandomElement(WIZARD_EYES);
  wizardEyes.style.fill = color;
  eyesColorInput.value = color;
});
