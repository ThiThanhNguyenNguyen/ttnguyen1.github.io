// function to display comment box when "Order Problem" is clicked
var select3 = document.getElementById('problem');
select3.addEventListener('click', displayBox);
function displayBox() {
  var box_ = document.querySelector('textarea[name=box]');
  box_.required = true;
  box_.disabled = false;
  box_.classList.add('show_box');
}

// function to hide comment box when "Question" or Comment is clicked
var select1 = document.getElementById('question');
select1.addEventListener('click', hideBox);

var select2 = document.getElementById('comment');
select2.addEventListener('click', hideBox);
function hideBox() {
  var box_ = document.querySelector('textarea[name=box]');
  box_.innerHTML = '';
  box_.disabled = true;
  box_.classList.remove('show_box');
}
var validate_all = document.main_form;
validate_all.addEventListener('submit', validate());

//Main validate function
function validate() {
  return (
    validate_name() &&
    validate_phone() &&
    validate_add() &&
    validate_postalCode() &&
    checkForm() &&
    validate_text_box()
  );
}

//Function to validate name
function validate_name() {
  var nameMessageRules = '<p> - Please enter a minimum of 4 alphabetic characters</p>';

  var stringName = document.querySelector('#fullName').value;
  stringName = stringName.trim();
  var stringLength = stringName.length;

  if (stringLength < 4) {
    showErrors(
      '<p><mark>Name</mark><br /> - You did not enter enough characters for the name<br />' +
        nameMessageRules +
        '</p>'
    );
    return false;
  }

  var countNonAlpha = 0;
  stringName = stringName.toUpperCase();
  for (var i = 0; i < stringLength; i++) {
    if (!(stringName.charCodeAt(i) > 64 && stringName.charCodeAt(i) < 91)) {
      countNonAlpha++;
      break;
    }
  }

  if (countNonAlpha) {
    showErrors(
      '<p><mark>Name</mark><br /> - Only alphabetic characters are allowed for the name<br />' +
        nameMessageRules +
        '</p>'
    );
    return false;
  }
  return true;
}

//Function to validate phone number
function validate_phone() {
  var messageRules = '<p> - Please enter a phone number with the format of ###-###-####.</p>';

  var str = document.querySelector('#phone').value;
  str = str.trim();

  var stringLength = str.length;

  if (str.charAt(3) !== '-' || str.charAt(7) !== '-' || stringLength !== 12) {
    showErrors(
      '<p><mark>Phone Number</mark><br /> - The phone number was in wrong format.<br />' +
        messageRules +
        '</p>'
    );
    return false;
  } else if (str.charAt(3) === '-' && str.charAt(7) === '-' && stringLength === 12) {
    var i,
      flag = true,
      myArray = str.split('-');
    for (i = 0; i < 3; i++) {
      if (parseInt(myArray[i]) !== myArray[i]) {
        flag = false;
        break;
      }
    }
    if (!flag) {
      showErrors(
        '<p><mark>Phone Number</mark><br /> - The phone number was in wrong format.<br />' +
          messageRules +
          '</p>'
      );
      return false;
    }
  }
  return true;
}

//Function to validate address
function validate_add() {
  var messageRules = '<p> - Please enter an address including numbers and characters.</p>';
  var check_alpha = false;
  var check_num = false;
  var string1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var string2 = '0123456789';
  var get_value = document.main_form.address.value.trim();

  for (var i = 0; i < get_value.length; i++) {
    if (string1.indexOf(get_value.substr(i, 1)) >= 0) check_alpha = true;
    if (string2.indexOf(get_value.substr(i, 1)) >= 0) check_num = true;
  }
  if (check_alpha && check_num) {
    return true;
  }
  showErrors(
    '<p><mark>Address</mark><br /> - The address needs to contain numbers and characters.<br />' +
      messageRules +
      '</p>'
  );
  document.main_form.address.focus();
  return false;
}

//Function to validate postal code
function validate_postalCode() {
  var messageRules = '<p> - Please enter a postal code with the format of C#C#C#.</p>';
  var check1 = false;
  var check2 = false;
  var check3 = false;
  var check4 = false;
  var check5 = false;
  var check6 = false;

  var string1 = 'ABCEGHJKLMNPRSTVXY';
  var string2 = '0123456789';
  var string3 = 'ABCEGHJKLMNPRSTVWXYZ';

  var get_value = document.main_form.postalCode.value.trim();
  if (get_value.length > 6 || get_value.length < 6) {
    showErrors(
      '<p><mark>Postal Code</mark><br /> - The postal code need 6 characters.<br />' +
        messageRules +
        '</p>'
    );
    return false;
  } else if (get_value.length === 6) {
    if (string1.indexOf(get_value.substr(0, 1)) >= 0) check1 = true;
    if (string2.indexOf(get_value.substr(1, 1)) >= 0) check2 = true;
    if (string3.indexOf(get_value.substr(2, 1)) >= 0) check3 = true;
    if (string2.indexOf(get_value.substr(3, 1)) >= 0) check4 = true;
    if (string3.indexOf(get_value.substr(4, 1)) >= 0) check5 = true;
    if (string2.indexOf(get_value.substr(5, 1)) >= 0) check6 = true;

    if (check1 && check2 && check3 && check4 && check5 && check6) {
      return true;
    }
  }
  showErrors(
    '<p><mark>Postal Code</mark><br /> - The postal code was in wrong format.<br />' +
      messageRules +
      '</p>'
  );
  document.main_form.postalCode.focus();
  return false;
}

//Function to validate check box
function checkForm() {
  var radio_num = document.main_form.option.length;
  var checked = false;

  for (var i = 0; i < radio_num; i++) {
    if (document.main_form.option[i].checked === true) {
      checked = true;
    }
  }
  if (!checked) {
    var messageRules = '<p> - Please check one of 3 option</p>';
    showErrors(
      '<p><mark>Check box</mark><br /> - Missing the check box.<br />' + messageRules + '</p>'
    );
    return false;
  }

  return true;
}

//Function to validate order problem box
function validate_text_box() {
  if (document.main_form.option[2].checked === true) {
    var input = document.main_form.box.value.trim();
    if (input.length > 5) {
      return true;
    }
    var messageRules = '<p> - Please type at least 6 characters </p>';

    showErrors(
      '<p><mark>Order problem</mark><br /> - The text box was not meet the requirement.<br />' +
        messageRules +
        '</p>'
    );
    document.main_form.box.focus();
    return false;
  }
  return true;
}

//Function to clear error messages when button "clear" is clicked
var select4 = document.main_form.clear;
select4.addEventListener('click', clearErrors);
function clearErrors() {
  document.getElementById('errors').innerHTML = '';
  hideBox();
  document.querySelector('#fullName').focus();
}

//Function to show error messages
function showErrors(messages) {
  document.querySelector('#errors').innerHTML += messages;
}
