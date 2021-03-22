


// Подготовка
// В ф орке учебного проекта создайте ветку module3-task1 и в этой ветке выполните
// следующие шаги:
// 1. Создайте ф айл js/setup.js в вашем учебном проекте. Это ф айл, в котором вы
// будете вести работу со всплывающим окном настройки персонажа.
// 2. В ф айле index.html подключите ваш ф айл при помощи тега script .
// Задача
// В ф айле setup.js :
// 1. Покажите блок .setup , убрав в JS-коде у него класс hidden .
// 2. Создайте массив, состоящий из 4-х сгенерированных JS объектов, которые
// будут описывать похожих персонажей. Объекты должны содержать следующие
// поля:
// o name , строка — случайно сгенерированное имя персонажа. Имя генерируется
// из массивов имён и ф амилий: нужно случайным образом выбрать из массива
// имён имя, а из массива ф амилий ф амилию и сложить их. При желании имя и
// ф амилию можно в случайном порядке менять местами:
// Имена:
// • Иван
// • Хуан Себастьян
// • Мария
// • Кристоф
// • Виктор
// • Юлия
// • Люпита
// • Вашингтон
// Фамилии :
//  да Марья
//  Верон
//  Мирабелла
//  Вальц
//  Онопко
//  Топольницкая
//  Нионго
//  Ирвинг
// o coatColor , строка — случайный цвет мантии на выбор из следующих:
//  rgb (101, 137, 164)
//  rgb (241, 43, 107)
//  rgb (146, 100, 161)
//  rgb (56, 159, 117)
//  rgb (215, 210, 55)
//  rgb (0, 0, 0)
// o eyesColor , строка — случайный цвет глаз персонажа на выбор из следующих:
//  bla ck
//  re d
//  blue
//  yellow
//  gre e n
// 3. На основе данных, созданных в предыдущем пункте и шаблона #similarwizard-template создайте DOM-элементы, соответствующие случайно
// сгенерированным волшебникам, и заполните их данными из массива:
// o имя персонажа name запишите как текст в блок .setup-similar-label ;
// o цвет мантии coatColor задайте как цвет заливки fill в стилях
// элемента .wizard-coat ;
// o цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizardeyes .
// 4. Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list . Для
// вставки элементов используйте DocumentFragment .
// 5. Покажите блок .setup-similar , удалив у него CSS-класс hidden .
// Требования к коду
// Код должен быть разделён на отдельные ф ункции.
// Стоит отдельно объявить ф ункцию генерации случайных данных, ф ункцию
// создания DOM-элемента на основе JS-объекта, ф ункцию заполнения блока DOMэлементами на основе массива JS-объектов.
// Пункты задания примерно соответствуют ф ункциям, которые вы должны создать.






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