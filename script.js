// Задание 1
function even (a) {
    return a % 2 === 0;
}
 const task1Button = document.querySelector (".task1But");
 const task1Answer = document.querySelector(".task1Answ");

 task1Button.addEventListener ("click", function(){
    for (let i =0; i<11; i++) {
        if (i === 0) {
            console.log(`${i} - это ноль`);
        }
        else if (even(i)) {
            console.log(`${i} - четное число`);
        }
        else {
            console.log(`${i} - нечетное число`);
        }
    }
 });

 //Задание 2
let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3,2);

const task2Button = document.querySelector(".task2But");
const task2Answer = document.querySelector(".task2Answer");

task2Button.addEventListener ("click", function(){
    task2Answer.textContent = array;
});

// Задание 3
const task3Answer = document.querySelector (".task3Answer");
const task3Button = document.querySelector (".task3Button");
let newArray = [];
function Array () {
   let arr = [];
   for (let i=0; i<5; i++){
    arr.push (Math.round(Math.random()*9));
   }
   return arr;
};
newArray = Array();
task3Button.addEventListener ("click", function(){
    task3Answer.textContent = newArray
});

const findSumm = document.querySelector (".findSumm");
const summ = document.querySelector (".summ");
 let sum = 0;
 for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
};
findSumm.addEventListener("click", function(){
    summ.textContent = sum;
});

const findMin = document.querySelector(".findMin");
const minNumb = document.querySelector(".min");
let min = 0
min = Math.min.apply(null, newArray);
findMin.addEventListener("click", function(){
    minNumb.textContent = min ;
});

const findThree = document.querySelector (".findThree");
const three = document.querySelector (".three");
const findNumb = 3;
function findNumThree (mas) {
    for (let i = 0; i < mas.length; i++) {
    if (mas[i] === findNumb) {
        return "Число 3 присутвует в массиве";
    }
    else {
        return "Числе 3 нет в массиве";
    }  
}};
findThree.addEventListener("click", function(){
    let answer = findNumThree(newArray);
    three.textContent = answer;
});

//Задание 4
const task4Button = document.querySelector (".task4Button");
task4Button.addEventListener("click", function(){
    let x = "x";
    for (let i = 19; i>=0; i--) {
        console.log(x);
        x=x+"xx";
    }
});






