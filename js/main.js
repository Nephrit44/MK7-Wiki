const getTemplate_ROW = document.querySelector('#defaultRow');
const getList = document.querySelector('.list');

loadDB(db0001, 1);

//Загрузка списка базы данных
function loadDB (dataBase, counter){
dataBase.forEach((element) => {
        let newElement = getTemplate_ROW.content.cloneNode(true); //Клонируем
        const templateIMG = newElement.querySelector('.block-img');
        const blockCode = newElement.querySelector('.block-code');
        
        newElement.querySelector('.counter').textContent = counter;
        newElement.querySelector('.block-content').innerText = element.textContent;
        if (element.blockCode == "") {
            blockCode.className = "visible";
        }else{
            blockCode.textContent = element.blockCode;
        }
        templateIMG.src = element.blockImg; 
        if(element.typeImg != ""){
         templateIMG.classList.add(element.typeImg);   
        }
        templateIMG.setAttribute('alt', element.altImg);
        counter ++;
        getList.append(newElement);
    });
}
