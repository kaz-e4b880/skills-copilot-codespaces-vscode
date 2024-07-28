function skillsMember() {
  var member = document.getElementById("member").value;
  var skills = document.getElementById("skills").value;
  var memberSkills = [];
  var memberSkillsObj = {
    member: member,
    skills: skills,
  };
  memberSkills.push(memberSkillsObj);
  localStorage.setItem("memberSkills", JSON.stringify(memberSkills));
  document.getElementById("member").value = "";
  document.getElementById("skills").value = "";
}
  