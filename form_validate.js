/* 
Student Name: Thi Thanh Nguyen Nguyen
Student ID  : 144128188
Course      : WEB222NEE
Assignment  : Final
 */

//Main validate function
function validate() {
  clearErrors();
  return (
    validate_name() &&
    validate_phone() &&
    validate_add() &&
    checkForm() &&
    validate_com_box() &&
    validate_order_no_box()
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
    document.main_form.fullName.focus();
    return false;
  }

  var countNonAlpha = 0;

  stringName = stringName.toUpperCase();
  for (var i = 0; i < stringLength; i++) {
    if (
      (stringName.charCodeAt(i) < 65 || stringName.charCodeAt(i) > 90) &&
      stringName.charCodeAt(i) !== 32
    ) {
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
    document.main_form.fullName.focus();
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
    document.main_form.phone.focus();
    return false;
  } else if (str.charAt(3) === '-' && str.charAt(7) === '-' && stringLength === 12) {
    var i,
      flag = true,
      myArray = str.split('-');

    for (i = 0; i < 3; i++) {
      if (parseInt(myArray[i]) !== Number(myArray[i])) {
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
      document.main_form.phone.focus();
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
    document.main_form.option.focus();
    return false;
  }

  return true;
}

//Function to validate order problem box
function validate_order_no_box() {
  if (document.main_form.option[2].checked === true) {
    var messageRules =
      '<p> - Please type at least 6 characters including numbers and characters </p>';
    var check_alpha = false;
    var check_num = false;
    var check_length = false;
    var string1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var string2 = '0123456789';
    var get_value = document.main_form.box.value.trim();
    if (get_value.length > 5) check_length = true;

    for (var i = 0; i < get_value.length; i++) {
      if (string1.indexOf(get_value.substr(i, 1)) >= 0) check_alpha = true;
      if (string2.indexOf(get_value.substr(i, 1)) >= 0) check_num = true;
    }
    if (check_alpha && check_num && check_length) {
      return true;
    }

    showErrors(
      '<p><mark>Order number</mark><br /> - The text box was not meet the requirement.<br />' +
        messageRules +
        '</p>'
    );
    document.main_form.box.focus();
    return false;
  }
  return true;
}
function validate_com_box() {
  var nameMessageRules = '<p> - Please enter a minimum of 4 alphabetic characters</p>';

  var stringName = document.querySelector('#format_large_box').value;
  stringName = stringName.trim();
  var stringLength = stringName.length;

  if (stringLength < 4) {
    showErrors(
      '<p><mark>Text box</mark><br /> - You did not enter enough characters for the text box<br />' +
        nameMessageRules +
        '</p>'
    );
    document.querySelector('#format_large_box').focus();
    return false;
  }

  var countNonAlpha = 0;

  stringName = stringName.toUpperCase();
  for (var i = 0; i < stringLength; i++) {
    if (
      (stringName.charCodeAt(i) < 65 || stringName.charCodeAt(i) > 90) &&
      stringName.charCodeAt(i) !== 32
    ) {
      countNonAlpha++;
      break;
    }
  }

  if (countNonAlpha) {
    showErrors(
      '<p><mark>Text box</mark><br /> - Only alphabetic characters are allowed for this text box<br />' +
        nameMessageRules +
        '</p>'
    );
    document.main_form.box_fix.focus();
    return false;
  }
  return true;
}

//Function to clear error messages when button "clear" is clicked
function clearErrors() {
  document.getElementById('errors').innerHTML = '';
  hideBox();
  document.querySelector('#fullName').focus();
}

//Function to show error messages
function showErrors(messages) {
  document.querySelector('#errors').innerHTML += messages;
}
//Fix error
var error_check = 0;
if (error_check < 1) {
  displayBox();
  validate();
  clearErrors();
}

// function to hide comment box when "Question" or Comment is clicked
function hideBox() {
  var box_ = document.querySelector('#format_box');
  box_.classList.remove('show_box');
}

// function to display comment box when "Order Problem" is clicked
function displayBox() {
  var box_ = document.querySelector('#format_box');
  box_.classList.add('show_box');
}
