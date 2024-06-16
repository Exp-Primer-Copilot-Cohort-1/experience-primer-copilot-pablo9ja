function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  var skills = document.getElementById("skills");
  skills.innerHTML = "<option value=''>Select</option>";
  if (memberValue != "") {
    var skillsArray = getSkillsArray(memberValue);
    for (var i = 0; i < skillsArray.length; i++) {
      skills.innerHTML += "<option value='" + skillsArray[i] + "'>" + skillsArray[i] + "</option>";
    }
  }
}