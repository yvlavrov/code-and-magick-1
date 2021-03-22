'use strict'
// Отображение блока персонажа

var userDialog = document.querySelector ('.setup');
 userDialog.classList.remove('hidden');


 // База данных персонажей

var WIZARDS_LIST = {
    names:['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    surnames:['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColor:['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor:['black', 'red', 'blue', 'yellow', 'green']
};


// Создание случайно сгенерированных данных персонажей

var randomNameWizards = function () {
    var randomNames = Math.floor(Math.random() * WIZARDS_LIST.names.length);
    var randomSurname = Math.floor(Math.random() * WIZARDS_LIST.surnames.length);
    return WIZARDS_LIST.names[randomNames] + ' ' +  WIZARDS_LIST.surnames[randomSurname];
}
var randomCoatColor = function () {
    var randomCoat = Math.floor(Math.random() * WIZARDS_LIST.coatColor.length);
    return WIZARDS_LIST.coatColor[randomCoat] ;
} 

var randomEyesColor = function () {
    var randomEyes = Math.floor(Math.random() * WIZARDS_LIST.eyesColor.length );
    return WIZARDS_LIST.eyesColor[randomEyes];
}


// Поиск шаблона для копирования и элемента для вставки шаблона.

var similarWizardTemplate = document.querySelector ('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector ('.setup-similar-list');


// Создание функции генерации случайных персонажей 

var renderWizard = function (wizard){
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = randomNameWizards();
    wizardElement.querySelector('.wizard-coat').style.fill = randomCoatColor();
    wizardElement.querySelector('.wizard-eyes').style.fill = randomEyesColor();
 
    return wizardElement
}


// Групировка элемантов

 var fragment = document.createDocumentFragment();
for (var i = 0 ; i < 4; i++){
  fragment.appendChild(renderWizard());
}


// Добавление сгрупированного элемента

similarListElement.appendChild(fragment);


// Отображение блока выбора персонажей 

userDialog.querySelector('.setup-similar').classList.remove('hidden');