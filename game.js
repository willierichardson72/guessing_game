  var score=1;

  alert("Hola, vamos a jugar un juego de adivinanzas!");


function question1() {
  var question_one=prompt('Did Willie grow up in Seattle?').toUpperCase();
  if(question_one==="YES" || question_one==="Y") {
    alert("Yes, Willie grew up in Seattle!");
    console.log("You are correct to the question" + question_one);
    score+=1;
   } else {
      alert("No, you are not correct!");
      console.log("You are incorrect to the question" + question_one);
   }
}

function question2() {
  var question_two=prompt("Does Willie enjoy the rain?").toUpperCase();
  if(question_two==="YES" || question_two==="Y") {
    alert("Yes, Willie loves splashing in puddles");
    console.log("You are correct to the question" + question_two);
    score+=1;
   } else {
    alert("No, you are not correct!");
    console.log("You are incorrect to the question" + question_two);
   }
}

function question3() {
  var question_three=prompt("Does Willie believe in the Sasquatch?").toUpperCase();
  if (question_three==="YES" || question_three==="Y") {
    alert("Yes, he has seen the Northwest Legend!");
    console.log("You are correct to the question" + question_three);
    score+=1;
   } else {
    alert("No, you are not correct!");
    console.log("You are incorrect to the question" + question_three);
   }
}

function question4() {
  var question_four=prompt("Has Willie been to a chicken sacrifice as an offering to Mayan Gods?").toUpperCase();
  if (question_four==="YES" || question_four==="Y") {
    alert("Yes, he attended!");
    console.log("You are correct to the question" + question_four);
    score+=1;
   } else {
    alert("No, you are not correct!");
    console.log("You are incorrect to the question" + question_four);
   }
}

function question5() {
  var question_five=prompt("Does Willie only have one kidney?").toUpperCase();
  if (question_five==="YES" || question_five==="Y") {
    alert("Yes, he has a larger right kidney to compensate!");
    console.log("You are correct to the question" + question_five);
    score+=1;
   } else {
    alert("No, you are not correct!");
    console.log("You are incorrect to the question" + question_five);
   }
 }

function question6 () {
  var question_six=prompt("Was Willie a member of Boy Scout Troop 666?").toUpperCase();
  if (question_six==="YES" || question_six==="Y") {
    alert("Yes, he was a member!");
    console.log("You are correct to the question" + question_six);
    score+=1;
   } else {
    alert("No, you are not correct!");
    console.log("You are incorrect to the question" + question_six);
   }
}

question1();
question2();
question3();
question4();
question5();
question6();
