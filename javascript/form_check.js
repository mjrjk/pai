function isEmpty(word) {
  if (word.length == 0){
    return true;
  } else {
    return false;
  }
}

function isWhiteSpaceOrEmpty(str) {
  return /^[\s\t\r\n]*$/.test(str);
}

function checkString(str, msg){
  if ((isEmpty(str) == true)||(isWhiteSpaceOrEmpty(str) == true)){
    alert(msg);
    return false;
  } else {
    return true;
  }
}

function checkEmail(str) {
 let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
 if (email.test(str))
 return true;
 else {
 return false;
 }
}

function checkStringAndFocus(obj, msg, type) {
   let str = obj.value;
   let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
   if (type == "email"){
     if ((isWhiteSpaceOrEmpty(str))||(!checkEmail(str))) {
       document.getElementById(errorFieldName).innerHTML = msg;
       obj.focus();
       return false;
     }
     else {
       document.getElementById(errorFieldName).innerHTML = "";
       return true;
     }
   }
   else {
     if (isWhiteSpaceOrEmpty(str)) {
       document.getElementById(errorFieldName).innerHTML = msg;
       obj.focus();
       return false;
     }
     else {
       document.getElementById(errorFieldName).innerHTML = "";
       return true;
     }
  }
}

function validate(formularz){
  if (checkStringAndFocus(formularz.elements["f_imie"], "Podaj imię!", "") == false) {
    return false;
  } else if (checkStringAndFocus(formularz.elements["f_nazwisko"], "Podaj nazwisko!", "") == false) {
    return false;
  } else if (checkStringAndFocus(formularz.elements["f_email"], "Podaj właściwy email!", "email") == false) {
    return false;
  } else if (checkStringAndFocus(formularz.elements["f_kod"], "Podaj kod!", "") == false) {
    return false;
  } else if (checkStringAndFocus(formularz.elements["f_ulica"], "Podaj ulicę!", "") == false) {
    return false;
  } else if (checkStringAndFocus(formularz.elements["f_miasto"], "Podaj miasto!", "") == false) {
    return false;
  } else {
    return true;
  }
}
