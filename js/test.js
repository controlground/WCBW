const form = document.getElementById('hello');

function checkAnswer() {
    const result = [true, true, true, true];
    // first Question
    const correct = document.getElementsByName('math');
    for (let tag of correct) {
        if (tag.className.includes('correct')) {
            if (!tag.checked)
                result[0] = false;
        }
        else if (tag.checked)
            result[0] = false;
    }

    // second Question
    const number = document.getElementById('second');
    if (number.value != 500)
        result[1] = false;

    // third Question
    const palm = document.getElementById('third');
    console.log(palm.value);
    if (palm.value !== "팜유")
        result[2] = false;

    // fourth Question
    const methane = document.getElementById('methane');
    if (!methane.checked)
        result[3] = false;
    return result;
}

function sayHello(event) {
    event.preventDefault();
    const result = checkAnswer()
    if (!result.includes(false)) {
        alert('정답입니다!');
    }
    else
        alert(`${result.indexOf(false) + 1}번째 문제가 오답입니다!`);
    changeColor(result);
}

function changeColor(result) {
    const questions = document.getElementsByClassName('question');
    for (let i = 0; i < questions.length; i++) {
        if (result[i] === true)
            questions[i].style.color = 'blue';
        else
            questions[i].style.color = 'red';
    }
}

form.onsubmit = sayHello;