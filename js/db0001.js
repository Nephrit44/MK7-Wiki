/* ЗАГОТОВКА ОДНОЙ СТРОКИ
db0001[
  {
    textContent: "", //Описание, иинструкция
    blockCode: "", //Команды, которые могут использовать
    blockImg: "", //Картинка если требуется
    typeImg:"", //icon - маленькая картинка или image большая картинка
    altImg:"", //Описание, которое отобразится в случае поломки изображения
  },
]

*/

const db0001 = [
  {
    textContent: "Если ваш графический интерфейс хоть как-то отзывается, вызовите терминал с помощью клавиш:",
    blockCode: "ctrl + alt + t",
    blockImg: "",
    typeImg: "", //icon или image
    altImg: "",
  },
  {
    textContent: "Если графический интерфейс не исправен, воспользуйтесь комбинацией клавиш:",
    blockCode: "ctrl + alt +f3",
    blockImg: "",
    typeImg: "", //icon или image
    altImg: "",
  },
  {
    textContent: "Авторизуйтесь как администратор",
    blockCode: "",
    blockImg: "",
    typeImg: "", //icon или image
    altImg: "",
  },
  {
    textContent: "Вызовите команду по завершению неисправной учётной записи. При успехе вас ваыбросить в меню выбора другой учётной записи.",
    blockCode: "sudo pkill -9 -u имя учётной записи",
    blockImg: "",
    typeImg: "", //icon или image
    altImg: "",
  },
  {
    textContent: "Перейдите в учётную запись администратора с графическим интерфейсом",
    blockCode: "",
    blockImg: "",
    typeImg: "", //icon или image
    altImg: "",
  },
  {
    textContent: "Нажмите на кнопку Пуск",
    blockCode: "",
    blockImg: "./images/MOS/logo.svg",
    typeImg: "icon", //icon или image
    altImg: "Логотип операционной системы М ОС",
  },
  {
    textContent: "Выбирете пункт Утилиты и далее программу Управление пользователями",
    blockCode: "",
    blockImg: "./images/MOS/image-1.png",
    typeImg: "image", //icon или image
    altImg: "Скриншот из меню пуск", //Описание, которое отобразится в случае поломки картинки
  },
  {
    textContent: "Авторизоваться под администраторской учётной записью",
    blockCode: "",
    blockImg: "./images/MOS/image-2.png",
    typeImg: "image", //icon или image
    altImg: "Скриншот окна утентификации", //Описание, которое отобразится в случае поломки картинки
  },
  {
    textContent: "Удалить неисправную учётную запись с рабочей папкой",
    blockCode: "",
    blockImg: "",
    typeImg: "", //icon или image
    altImg: "", //Описание, которое отобразится в случае поломки картинки
  },
  {
    textContent: "Создайте новую запись. \n (Пожалуйста создавайте единую учётную запись для всех пользователей \n Имя: user \n Пароль: 1234)",
    blockCode: "",
    blockImg: "",
    typeImg: "", //icon или image
    altImg: "", //Описание, которое отобразится в случае поломки картинки
  },
  {
    textContent: "Перезагрузите компьютер. В настройках системы установлено, что по-умолчанию компьютер будет грузиться с учётной записью user",
    blockCode: "",
    blockImg: "./images/MOS/image-3.png",
    typeImg: "image", //icon или image
    altImg: "Скриншот окна управления пользователями", //Описание, которое отобразится в случае поломки картинки
  }
];