function addNewFields() {
  console.log("Addes");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("work-experiance");

  let experienceAndButton = document.getElementById("experienceAndButton");
  let workExperience = document.querySelector("addNewFields");
  experienceAndButton.insertBefore(newNode, workExperience);
}



let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
profilePic.src = URL.createObjectURL(inputFile.files[0]);
}


//generate resume

function generateResume() {
  //name
  document.querySelector("#Name").innerHTML =
    document.getElementById("userName").value;

    let validNameField = document.getElementById("userName");
    if(validNameField.value.trim() === ""){
      alert("Name fields is required!");
    }

    //userProfession
document.querySelector("#position").innerHTML =
document.getElementById("userProfession").value;

let validProfessionField = document.getElementById("userProfession");
if(validProfessionField.value.trim() === ""){
  alert("profession fields is required!");
}

  //Email
  document.querySelector("#mail").innerHTML =
  document.getElementById("userEmail").value;

  let validEmailField = document.getElementById("userEmail");
if(validEmailField.value.trim() === ""){
  alert("Email fields is required!");
}

//contact
document.querySelector("#number").innerHTML =
  document.getElementById("userContact").value;

  let validContactField = document.getElementById("userContact");
  if(validContactField.value.trim() === ""){
    alert("contact  fields is required!");
  }

 

  //linkedIn
  document.querySelector("#link-linkedin").innerHTML =
  document.getElementById("userLinkedIn").value;

  let validLinkedInField = document.getElementById("userLinkedIn");
  if(validLinkedInField.value.trim() === ""){
    alert("LinkedIn fields is required!");
  }

 

 //github
document.querySelector("#git").innerHTML =
document.getElementById("userGitHub").value;

//graduation
document.querySelector("#grad-edu").innerHTML =
document.getElementById("userGrad").value;

let validGraduationField = document.getElementById("userGrad");
if(validGraduationField.value.trim() === ""){
  alert("Graduation fields is required!");
}




//summary

document.querySelector("#summ").innerHTML =
document.getElementById("summary").value;

//skills
document.querySelector("#role").innerHTML =
document.getElementById("mySkill").value;

let validSkillField = document.getElementById("mySkill");
if(validSkillField.value.trim() === ""){
  alert("Skill fields is required!");
}

// projects

document.querySelector("#pro").innerHTML =
document.getElementById("your-project").value;


 //languages
 document.querySelector("#lang").innerHTML =
 document.getElementById("len").value;

 let validLanguagesField = document.getElementById("len");
 if(validLanguagesField.value.trim() === ""){
   alert("Lenguages fields is required!");
 }

//work-experience
document.querySelector("#EXP").innerHTML =
document.getElementById("experieneDetilsUser").value;


// // certificates
 
//  document.querySelector("#co").innerHTML=
//  document.getElementById("123").value;

  

  //Achievement
  document.querySelector("#achieve").innerHTML=
  document.getElementById("achivement").value;




}

