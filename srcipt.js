// const myword = document.getElementsByClassName("my-word");
const n_word = document.getElementById("n-word");
const arr = ["Expectations","Random","documents","Laptop","Request","Backspace","Exclusive","Marvel","Shift","Problems","Instagram"];
const text = document.getElementById("text");
const correct_word = document.getElementById("head-correct-block");
const correct_word_box = document.getElementById("correct-word");
const wrong_word_box = document.getElementById("wrong-word");
const input_word = document.getElementById("text");
const countR = document.getElementById("countRight");
const countW = document.getElementById("countWrong");
const win = document.getElementById("win-image");
const main = document.getElementById("main");
const lose = document.getElementById("lose-image")

var right = 0;
var wrong = 0;

n_word.innerHTML = arr[Math.floor(Math.random() * arr.length)];
var x = 5;
console.log(text.value);

function start() {
    n_word.style.top = x + "px";
    x++;
    if (x == 425) {

        if (text.value == n_word.innerHTML) {
            console.log("correct");
            let c_text = `<div id="head-correct-block">${n_word.innerText}</div>`
            correct_word_box.innerHTML += c_text;
            right = right + 1;
            countR.innerText = right;

            text.value = "";
            if (right == 8) {
                main.style.display = 'none';
                win.style.display = 'flex';
                console.log("print");
            }
        }
        else {
            console.log("wrong");
            if (input_word.value != "") {
                let w_word = ` <div id="head-wrong-block">${input_word.value}</div>`
                wrong_word_box.innerHTML += w_word;
                console.log("1");
                wrong = wrong + 1;
                countW.innerText = wrong;
                text.value = "";

                if (wrong == 10) {
                    main.style.display = 'none';
                    lose.style.display = 'flex';
                    console.log("print");
                }
            }
        }
        x = 0;
        n_word.innerHTML = arr[Math.floor(Math.random() * arr.length)];
        text.value = "";
    }
    requestAnimationFrame(start);
}

requestAnimationFrame(start);

text.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        if (n_word.innerText == input_word.value) {
            let c_text = `<div id="head-correct-block">${n_word.innerText}</div>`
            correct_word_box.innerHTML += c_text;
            right = right + 1;
            countR.innerText = right;

            x = 0;
            n_word.innerHTML = arr[Math.floor(Math.random() * arr.length)];
            text.value = "";
            if (right == 10) {
                main.style.display = 'none';
                win.style.display = "flex";
                console.log("print rigt");
            }
        } else {
            if (input_word.value != "") {
                let w_word = ` <div id="head-wrong-block">${input_word.value}</div>`
                wrong_word_box.innerHTML += w_word;
                wrong = wrong + 1;
                countW.innerText = wrong;
                x = 0;
                n_word.innerHTML = arr[Math.floor(Math.random() * arr.length)];
                text.value = "";
                if (wrong == 10) {
                    main.style.display = 'none';
                    lose.style.display = 'flex';
                    console.log("print");
                }

            }
        }

    }
})