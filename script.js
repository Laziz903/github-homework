const name = prompt('Как вас зовут?').toLowerCase();


if (name[0] === 'a') {
    const number = prompt('Номер счёта.');

    if (number > 7776) {
        const value = prompt('Сколько обналичить?');

        if (value < 10000) {
            const a = prompt('Всё отлично');
            console.log(a);

            const number_1 = +prompt('First number');
            const number_2 = +prompt('Second number');
            const operator = prompt('Operator(+, -, *, /)');
            
            if (operator === "+") {
                alert(number_1 + number_2)
            }
            if (operator === "-") {
                alert(number_1 - number_2)
            }
            if (operator === "*") {
                alert(number_1 * number_2)
            }
            if (operator === "/") {
                alert(number_1 / number_2)
            }
        } else {
        alert('Недостаточно средств');
        }

    } else {
    alert('Пользователь не найден, досвидули.');
    }

} else {
    alert('Пользователь не найден, досвидули.');
}