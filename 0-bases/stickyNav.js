var nav = document.getElementsByTagName("nav")[0];
var introduction = document.getElementById("introduction");
var displayFlex = document.getElementById("displayFlex");
var flexDirection = document.getElementById("flexDirection");
var flexWrap = document.getElementById("flexWrap");
var flexFlow = document.getElementById("flexFlow");
var justifyContent = document.getElementById("justifyContent");
var alignItems = document.getElementById("alignItems");
var alignContent = document.getElementById("alignContent");
var pos = getOffset(introduction).top;

window.onscroll = function () {
  var scroll = window.scrollY;
  console.log(scroll);
  console.log(pos);
};
