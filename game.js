  var score=1;

  alert("Hola, vamos a jugar un juego de adivinanzas!");

  var question_one=prompt('Did Willie grow up in Seattle?').toUpperCase();
  if(question_one==="YES" || question_one==="Y") {
    alert("Yes, Willie grew up in Seattle!");
    console.log("You are correct to the question" + question_one);
    score+=1;
   } else {
      alert("No, you are not correct!");
      console.log("You are incorrect to the question" + question_one);
   }

  var question_two=prompt("Does Willie enjoy the rain?").toUpperCase();
  if(question_two==="YES" || question_two==="Y") {
    alert("Yes, Willie loves splashing in puddles");
    console.log("You are correct to the question" + question_two);
    score+=1;
   } else {
    alert("No, you are not correct!");
    console.log("You are incorrect to the question" + question_two)
   }

  var question_three=prompt("Does Willie believe in the Sasquatch").toUpperCase();
  if (question_three==="YES" || question_three==="Y") {
    alert("Yes, he has seen the Northwest Legend!");
    console.log("You are correct to the question" + question_three);
    score+=1;
   } else {
    alert("No, you are not correct!");
    console.log("You are incorrect to the question" + question_three);
   }

  var question_four=prompt("Has Willie been to a chicken sacrifice as an offering to Mayan Gods").toUpperCase();
  if (question_four==="YES" || question_four==="Y") {
    alert("Yes, he attended");
    console.log("You are correct to the question" + question_four);
    score+=1;
   } else {
    alert("No, you are not correct!");
    console.log("You are incorrect to the question" + question_four);
   }
