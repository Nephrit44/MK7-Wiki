const mainContent = document.querySelector('.main-content'); //Сюда вставляем все, что генерируется
const getDefault_mainContent = document.querySelector("#default_main-content"); //Макет заголовков

const getTemplate_ROW = document.querySelector('#defaultRow');
const getList = document.querySelector('.list');
const defaultCounter = 1; //Число счётчика с которого начинается отсчёт

const getLi = document.querySelector("#li"); //Поиск макета элементов li

loadContents(contents, defaultCounter); //Загрузка оглавлений


/*
    На вход имя массива и число для счётчка.
    1. Клонируется элемент с заголовком и UL для подсписка
    2. Ищется в клонированном элементе заголовок и вводится в него содержимое из базы
    3. Вызывается функция фильтр, которая ищет всё, что связано с текущим разделом.
    4. Добавляется на экран
*/
function loadContents(dataBase, counter) {
    dataBase.forEach((element) => {
        let newElement = getDefault_mainContent.content.cloneNode(true); //Клонируем
        newElement.querySelector('.main-content__title').textContent = element.titleName;
        filterNavigation(navigation, element.recID, newElement.querySelector('.main-content__list'));
        mainContent.append(newElement);
    });
};

/*
Функция фильтр: 
1. На вход получает, базу сподразделами
2. значение с котором быдет сравнивать. Берётся из 
элемент в который вставит найденые данные.
*/
function filterNavigation(navigation, valueID, list) {
    const result = navigation.filter(nav => nav.valueID == valueID);
    result.forEach((element) => {
        let newElement = getLi.content.cloneNode(true); //Клонируем

        newElement.querySelector(".main-content__item").textContent = element.subtitleName;
        list.append(newElement);
    });
};


//Загрузка инструкции
function loadInstruction(dataBase, counter) {
    dataBase.forEach((element) => {
        let newElement = getTemplate_ROW.content.cloneNode(true); //Клонируем
        const templateIMG = newElement.querySelector('.block-img');
        const blockCode = newElement.querySelector('.block-code');

        newElement.querySelector('.counter').textContent = counter;
        newElement.querySelector('.block-content').innerText = element.textContent;
        if (element.blockCode == "") {
            blockCode.className = "visible";
        } else {
            blockCode.textContent = element.blockCode;
        }
        templateIMG.src = element.blockImg;
        if (element.typeImg != "") {
            templateIMG.classList.add(element.typeImg);
        }
        templateIMG.setAttribute('alt', element.altImg);
        counter++;
        getList.append(newElement);
    });
};
