/*Чи потрібен "else"? (Задача)
важливість: 4
Наступна функція повертає true, якщо параметр age більший за 18.

Інакше вона запитує підтвердження через confirm і повертає його результат:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Батьки дозволили?');
  }
}

Чи буде функція працювати по-іншому, якщо забрати else?
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Батьки дозволили?');
}

Чи є різниця в поведінці цих двох варіантів?*/

/* - - - Моя відповідь - - - */
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Батьки дозволили?');
  }
}
checkAge ()
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Батьки дозволили?');
}
checkAge ()

/*Різниці в поведінці цих двох варіантів немає. Якщо ми будемо викликати функцію
checkAge то в першому і другому варіанті отримаємо те саме. 
*/


