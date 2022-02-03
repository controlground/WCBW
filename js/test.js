const form = document.getElementById('hello');

const firstQuestion = document.getElementById('first-question');
const secondQuestion = document.getElementById('second-question');
const thirdQuestion = document.getElementById('third-question');
const fourthQuestion = document.getElementById('fourth-question');

const firstHint = document.getElementById('first-hint');
const secondHint = document.getElementById('second-hint');
const thirdHint = document.getElementById('third-hint');
const fourthHint = document.getElementById('fourth-hint');

const isFirstClicked = [true, true, true, false];

function giveLink(buttonTag, link) {
    const newTag = document.createElement('a');
    newTag.href = link;
    newTag.innerText = '바로 가기';
    buttonTag.after(newTag);
}

function giveHint(buttonTag, hint, pos) {
    // hint = '대기중 주요 온길 가스 중 하나
    // pos = 3
    if (isFirstClicked[pos] === true) { // 클릭이 되어있을 경우
        // 글자를 추가하는 코드를 실행
        const newTag = document.createElement('span');
        newTag.innerText = hint;
        buttonTag.after(newTag);
        isFirstClicked[pos] = false; 
    }
    else { //클릭이 되어있지 않을 경우
        // 글자를 삭제하는 코드를 실행
    }
}


function add(a, b) {
    return a + b;
}

console.log(add(3, 5));

firstHint.addEventListener('click', () => giveLink(firstHint, 'https://www.sd.go.kr/main/contents.do?key=1676&'));
secondHint.addEventListener('click', () => giveHint(secondHint, '이 플라스틱은 갑자사화때 버려졌어야 지금 분해가 다 됩니다.', 1));
thirdHint.addEventListener('click', () => giveHint(thirdHint, '이것은 기름야자의 과육에서 착유해야 얻을 수 있습니다.', 2));
fourthHint.addEventListener('click', () => giveHint(fourthHint, '대기중 주요 온실가스 중 하나.', 3));

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
    const result = checkAnswer();
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
            questions[i].style.setProperty('color', 'blue', 'important');
        else
            questions[i].style.setProperty('color', 'red', 'important');
    }
}

form.onsubmit = event => sayHello(event);
