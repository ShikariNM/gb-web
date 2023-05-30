// Необходимо пользователя попросить ввести температуру в градусах Цельсия,
// преобразовать введенное пользователем значение в соответствующую температуру
// в градусах по Фаренгейту и вывести в alert сообщение с текстом.
// Пример: Цельсий: 21, Фаренгейт: 69.8

// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.

// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32

// Примечания: Пользователь всегда вводит корректное число.
// Советую округлить значение после расчетов, так как в некоторых
// случаях может получиться "длинная дробь".

const cel = Number.parseFloat(prompt("Enter the temperature in Celsius degrees"));
if (cel) {
    alert(`Цельсий: ${cel}, Фаренгейт: ${+celsToFah(cel).toFixed(1)}`);
}

function celsToFah(degrees) {
    return (9 / 5) * degrees + 32;
}
