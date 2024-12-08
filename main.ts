let x = 2
let y = 2
let drawing = false // Изначально рисование выключено

basic.forever(function () {
    // Получаем угол наклона вперед/назад (тангаж) и влево/вправо (крен)
    let pitch = input.rotation(Rotation.Pitch); // Тангаж
    let roll = input.rotation(Rotation.Roll);  // Крен

    // Переводим углы в координаты матрицы
    let row = Math.map(pitch, -90, 90, 0, 4); // Тангаж определяет строку
    let column = Math.map(roll, -90, 90, 0, 4); // Крен определяет столбец

    // Ограничиваем значения в пределах матрицы 5x5
    row = Math.clamp(0, 4, Math.round(row));
    column = Math.clamp(0, 4, Math.round(column));

    // Если рисование включено, рисуем точку
    if (drawing) {
        led.plot(column, row);
    }
})

// Управление рисованием с помощью кнопок A и B
input.onButtonPressed(Button.A, function () {
    drawing = true // Включаем рисование
})

input.onButtonPressed(Button.B, function () {
    drawing = false // Выключаем рисование
})