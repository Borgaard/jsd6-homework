/*
Create a customizable survey form.

The index.html file includes a form, which contains 2 sample questions as illustrations.
A user should be able to type a survey question into the text box with the id "question", click the Submit button, and the question
should be added to the survey.
When the user adds the question to the survey, it should be automatically numbered and a text box should be added below it.
Each survey question should also include a "Remove question" button that a user can click to remove the question from the survey.

In addition to creating the functionality described above, your final code should also do the following:
- Convert the existing code to use implicit iteration
- Implement at least one example of event delegation
- Chain at least 2 methods

Note: This project uses Bootstrap, which is a CSS framework that provides prebuilt styles using class names.
Make sure the new questions you add to the survey use the same class names as in the sample form questions to take advantage of Bootstrap styles.
*/
var $surveyList = $("li");
var $removeButton = $("<button>").html("Remove question");
$surveyList.append($removeButton);

var button = $("#addQuestion");
button.on("click", function(event){
  event.preventDefault();
  var grabMe = $("#surveyList");
  var fuckThis = $("#question").val();
  var newli = $("<li>").addClass(".form-group padout");

  //why doesn't jquery selector work below?
  document.querySelector("#question").value = "";
  var buttFace = document.createElement("button");
  var newLi = document.createElement("li");
  var newLab = document.createElement("label");
  var inny = document.createElement("input");
  newLi.className = "form-group padout";
  buttFace.textContent = "Remove question";
  grabMe.append(newLi);
  newLi.append(newLab);
  newLi.append(inny);
  newLi.append(buttFace);
  newLab.textContent = fuckThis;
  inny.className = "form-control";
});



$("#surveyList").on( "click", "button", function( event ) {
    event.preventDefault();
    console.log( "crab poo" );
    $(this).closest("li").remove();
});


/*
var button = $("#addQuestion");
button.on("click", function(event){
  event.preventDefault();
  var grabMe = $("#surveyList");
  var fuckThis = document.querySelector("#question").value;
  var newli = $("<li>").addClass(".form-group padout");
  document.querySelector("#question").value = "";
  var buttFace = document.createElement("button");
  var newLi = document.createElement("li");
  var newLab = document.createElement("label");
  var inny = document.createElement("input");
  newLi.className = "form-group padout";
  buttFace.textContent = "Remove question";
  grabMe.append(newLi);
  newLi.append(newLab);
  newLi.append(inny);
  newLi.append(buttFace);
  newLab.textContent = fuckThis;
  inny.className = "form-control";
});
*/
