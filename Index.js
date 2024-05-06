const hidequiz = document.querySelector('#quiz-container');
const hidequiz2 = document.querySelector('#quiz-container2');
const hideresult = document.querySelector('#result');
const img = document.querySelector('img');
hidequiz2.style.display = "none";
hideresult.style.display = "none";
img.style.display = "none";
let count = 0;
function checkAnswer(answer) {
    const result = document.getElementById('result');


    hideresult.style.display = "block";
    hidequiz.style.display = "none";
    if (answer === 'a') {
        count++;
        result.innerHTML = "<p>ถูกต้อง PIM ย่อมาจาก PIM </p>  <button class='button'onclick='nextAnswer()'>ถัดไป</button>";

        result.style.color = 'green';
    } else {
        result.innerHTML = "<p>ไม่ถูกต้อง</p>  <button class='button'onclick='nextAnswer()'>ถัดไป</button>";
        result.style.color = 'red';
    }
 }
 function checkAnswer2(answer) {
    const result = document.getElementById('result');


    hideresult.style.display = "block";
    hidequiz2.style.display = "none";

    if (answer === 'a') {
        count++;
     
        result.innerHTML = "<p>ถูกต้อง</p>  <button class='button'onclick='ScoreAnswer()'>ดูคะแนน</button>";
        result.style.color = 'green';
    } else {
        result.innerHTML = "<p>ไม่ถูกต้อง</p>  <button class='button'onclick='ScoreAnswer()'>ดูคะแนน</button>";
        result.style.color = 'red';
    }
 }
 function nextAnswer(){
    hideresult.style.display = "none";
    hidequiz2.style.display = "block";
 }
 function ScoreAnswer(){
    result.innerHTML = "<p>คะแนนที่ได้</p><p>"+count+"/2</p><button class='button'onclick='ReAnswer()'>เริ่มใหม่</button>";
    img.style.display = "block";

 }
 function ReAnswer(){
    count = 0;
    hidequiz.style.display = "block"
    hideresult.style.display = "none";
    img.style.display = "none";
 }