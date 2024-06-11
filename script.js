/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastBtn = document.querySelector('.forecast-btn');
const forecastItemList = document.getElementById('forecast-item');
const container = document.querySelector('.forecasts');

forecastBtn.addEventListener('click', () => {

    const predictionNumber = Math.floor(Math.random() * 3);
    let predictionText = "";
    const probability = Math.floor(Math.random() * 100);

    if (predictionNumber === 1) {
        predictionText = "Слушай свою интуицию!";
    } else if (predictionNumber === 2) {
        predictionText = "Все лучшее впереди!";
    } else {
        predictionText = "Сегодня отличный день, чтобы посвятить его себе :)";
    }

    document.querySelector('.current-forecast h1').innerText = predictionText;
    document.querySelector('.current-forecast p').innerText = `вероятность: ${probability}%`;

    const forecastItem = document.importNode(forecastItemList.content, true);
    forecastItem.querySelector('h3').innerText = predictionText;
    forecastItem.querySelector('p').innerText = `вероятность: ${probability}%`;

    container.prepend(forecastItem);
});