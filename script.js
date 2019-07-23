// let number = 5;
// console.log(number);
// alert("Good")
// let answer = confirm("index.html");
// let answer = prompt("index.html?")
// let answers = [],
//     questions = [
//         "Как вас зовут?", 
//         "Сколько вам лет?",
//         "Как ваша фамилия?",
//         "Как вас зовут?"
//     ];
// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i]);
// }

// answers[0] = prompt("Как вас зовут?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");
// answers[3] = prompt("Как вас зовут?", "");
// document.write(answers);
// for (let i = 0; i < 10; i++) {};


// let age = prompt("Сколько вам лет?");
// if (age >= 18) {
//     alert("Hello!")
// } else {
//     alert("GoodBye!")
// }


// function humanSayHello(obj) {
//     document.write("Hello " + obj + "!") 
// }
// humanSayHello("Ivan");


// function calc(a, b) {
//     document.write(a + b);
// };
// calc(4, 5);
// calc(10, 20);



function myFirstApp(name, age) {
    alert("Привет, меня зовут " + name + " и это моя певая программа");
    function showSkills() {
        let skills = ["html", "css", "Python", "js"];

        document.write("Мои умения", "<br>");
        for (let i = 0; i < skills.length; i++) {
            document.write(skills[i], "<br>");
        }
    }
    showSkills();

    function checkAge() {
        if (age >= 18) {
            document.write("Старость не радость");
        } else {
            document.write("Мал да удал");
        }
    }
    checkAge();

    function calcPow(number) {
        document.write("<br>","Число " + number + " возведённое в квадрат = " + number**2)
    }
    calcPow(prompt("Введите число которое хотите возвести в квадрат "));
}
myFirstApp("Leonid", 15);