  var score=1;
  var ans1 = document.getElementById("answer1");
  var ans2 = document.getElementById("answer2");
  var ans3 = document.getElementById("answer3");
  var ans4 = document.getElementById("answer4");
  var ans5 = document.getElementById("answer5");
  var ans6 = document.getElementById("answer6");

  alert("Hola, vamos a jugar un juego de adivinanzas!");


function question1() {
  var question_one=prompt('Did Willie grow up in Seattle?').toUpperCase();
  if(question_one==="YES" || question_one==="Y") {
    ans1.innerHTML = "Yes, Willie grew up in Seattle!" + '<br><img src="oct30images/Pearl-Jam-w20.jpg" width=200px>';
    ans1.className = "correct";
    console.log("You are correct to the question" + question_one);
    score+=1;
   } else {
      ans1.innerHTML = "No, you are not correct!";
    ans1.className = "incorrect";
      console.log("You are incorrect to the question" + question_one);
   }
}

function question2() {
  var question_two=prompt("Does Willie enjoy the rain?").toUpperCase();
  if(question_two==="YES" || question_two==="Y") {
    ans2.innerHTML = "Yes, Willie loves splashing in puddles" + '<br><img src="oct30images/tumblr_static_splashing_in_puddles_by_tigeress27-d3cd9rt.jpg" width=200px>';
    ans2.className = "correct";
    console.log("You are correct to the question" + question_two);
    score+=1;
   } else {
    ans2.innerHTML = "No, you are not correct!";
    ans2.className = "incorrect";
    console.log("You are incorrect to the question" + question_two);
   }
}

function question3() {
  var question_three=prompt("Does Willie believe in the Sasquatch?").toUpperCase();
  if (question_three==="YES" || question_three==="Y") {
    ans3.innerHTML = "Yes, he has seen the Northwest Legend!" + '<br><img src="oct30images/sask.jpg" width=200px>';
    ans3.className = "correct";
    console.log("You are correct to the question" + question_three);
    score+=1;
   } else {
    ans3.innerHTML = "No, you are not correct!";
    ans3.className = "incorrect";
    console.log("You are incorrect to the question" + question_three);
   }
}

function question4() {
  var question_four=prompt("Has Willie been to a chicken sacrifice as an offering to Mayan Gods?").toUpperCase();
  if (question_four==="YES" || question_four==="Y") {
    ans4.innerHTML = "Yes, he attended!" + '<br><img src="oct30images/chicken.jpg" width=200px>';
    ans4.className = "correct";
    console.log("You are correct to the question" + question_four);
    score+=1;
   } else {
    ans4.innerHTML = "No, you are not correct!";
    ans4.className = "incorrect";
    console.log("You are incorrect to the question" + question_four);
   }
}

function question5() {
  var question_five=prompt("Does Willie only have one kidney?").toUpperCase();
  if (question_five==="YES" || question_five==="Y") {
    ans5.innerHTML = "Yes, he has a larger right kidney to compensate!" + '<br><img src="oct30images/kidney.jpg" width=200px>';
    ans5.className = 'correct';
    console.log("You are correct to the question" + question_five);
    score+=1;
   } else {
    ans5.innerHTML = "No, you are not correct!";
    ans5.className = 'incorrect';
    console.log("You are incorrect to the question" + question_five);
   }
 }

function question6 () {
  var question_six=prompt("Was Willie a member of Boy Scout Troop 666?").toUpperCase();
  if (question_six==="YES" || question_six==="Y") {
    ans6.innerHTML = "Yes, he was a member!" + '<br><img src="oct30images/acdc.jpg" width=200px>';
    ans6.className = "correct";
    console.log("You are correct to the question" + question_six);
    score+=1;
   } else {
    ans6.innerHTML = "No, you are not correct!";
    ans6.className = "incorect";
    console.log("You are incorrect to the question" + question_six);
   }
};

question1();
window.setTimeout(question2, 100);
window.setTimeout(question3, 100);
window.setTimeout(question4, 500);
window.setTimeout(question5, 500);
window.setTimeout(question6, 500);

