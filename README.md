# Домашние задания модуля 21 "Асинхронность (AJAX)".

В **task1** - реализован код, который преобразует **XML** в **JS-объект** и выводить его в консоль.

В **task2** - создан **JS-объект**, который при преобразовании в **JSON** возвращает в качестве результата такую же **JSON-строку**, как в образце

({"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}). 

Получившаяся строка выводится в консоль.

В **task3** - реализован скрипт, который при открытии страницы делает следующее:

1. Если пользователь зашел в первый раз, выводится окно **prompt** с сообщением: **«Добро пожаловать! Назовите, пожалуйста, ваше имя»**.

2. После того, как пользователь введет имя, записывается имя, дата и время визита в **localStorage**.
Если пользователь открывает страницу не впервые (это можно узнать по наличию соответствующих записей в **localStorage**), выводится в **alert** сообщение вида: «Добрый день, ***имя пользователя***! Давно не виделись. В последний раз вы были у нас ***дата последнего посещения***» и перезаписывается дата последнего посещения.

В **task4** - Реализован **Promise**, в котором c задержкой в три секунды генерируется случайное целое число **от 1 до 100**. Для создания задержки используется **setTimeout**. Если сгенерированное число четное — **Promise выполнится успешно (resolve)**, если нечетное — **выполнится с ошибкой (reject)**. После разрешения **Promise** обрабатывается результат его выполнения и выводится сообщение в консоль:

+ «Завершено успешно. Сгенерированное число — number», если **Promise** завершился успешно. Вместо number подставить сгенерированное число
+ «Завершено с ошибкой. Сгенерированное число — number», если **Promise** завершился с ошибкой. Вместо **number** подставляется сгенерированное число

В **task5** - Реализован код приложения, интерфейс которого состоит из поля ввода и кнопки **«Получить список задач»**. При нажатии на кнопку отправляется запрос с помощью **fetch на URL** https://jsonplaceholder.typicode.com/users/3/todos. Число 3 представляет собой **id пользователя**, вместо него подставляется число, введенное в поле. Если пользователь с таким **id** существует, возвращается список задач для этого пользователя, каждая задача представлена объектом вида:

{
    "userId": 3,

    "id": 43,

    "title": "tempore ut sint quis recusandae",

    "completed": true
}

Где **title** — описание задачи, а **completed** — флаг, отображающий, выполнена задача или нет. Список выводится на страницу, оформленный соответствующим образом: в виде списка **(ul или ol)**, выполненные задачи написаны зачеркнутым текстом. Если пользователь с введенным **id** не существует, выводится сообщение: **«Пользователь с указанным id не найден»**/.

В **task6** - Реализован код приложения, интерфейс которого состоит из двух **input и кнопки**. В **input** можно ввести любое число.

Заголовок первого **input — «номер страницы»**.
Заголовок второго **input — «лимит»**.
Заголовок **кнопки — «запрос»**.
При клике на кнопку происходит следующее:

+ Если число в первом **input** не попадает в диапазон **от 1 до 10** или не является числом — выводится ниже текст **«Номер страницы вне диапазона от 1 до 10»**.
+ Если число во втором **input** не попадает в диапазон **от 1 до 10** или не является числом — выводится ниже текст **«Лимит вне диапазона от 1 до 10»**.
+ Если и первый, и второй **input** не в диапазонах или не являются числами — выводится ниже текст **«Номер страницы и лимит вне диапазона от 1 до 10»**.
+ Если числа попадают в диапазон **от 1 до 10** — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где **GET-параметр** page — это число из первого **input**, а **GET-параметр** limit — это введённое число второго **input**. 
Пример: если пользователь ввёл **5 и 7**, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных выводится список картинок на экран.

Если пользователь перезагрузил страницу, то ему выводятся картинки из последнего успешно выполненного запроса (использовалось **localStorage**).