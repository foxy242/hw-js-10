// task 1
// const friends = ['Mongo', 'Poly', 'Kiwi', 'Ajax'];
// let string = friends.join();

// console.log(string)
// Напиши скрипт, який об'єднує всі елементи массива в один рядок.
// Елементів може бути довільна кількість.
// Нехай елементи массива в рядку будут розділені комою.
//  👉 Спочатку через for
//  👉 Потім через join()
// task 2
const cards = [
    'карточка-1',
    'карточка-2',
    'карточка-3',
    'карточка-4',
    'карточка-5'
  ];
// Працюємо з колекцією карток в trello.  Метод splice() (можна використати інші методи)
// task 3
const cardToRemove = 'карточка-3';
console.log(cardToRemove.indexOf('карточка-3'))
// Видалити
// task 4
const cardToInsert = 'карточка-6';
cardToInsert.push('карточка-6')
console.log(cardToInsert)
// Додати
// task 5
const cardToUpdate = 'карточка-4';
cardToUpdate = 'карточка-6'
console.log(cardToUpdate)
// Оновити