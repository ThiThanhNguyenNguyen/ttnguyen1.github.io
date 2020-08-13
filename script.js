/* 
Student Name: Thi Thanh Nguyen Nguyen
Student ID  : 144128188
Course      : WEB222NEE
Assignment  : Final
 */

//Declare variable to store images
var teas_list = [
  {
    deal: 'no',
    best: 'no',
    category: 'black_tea',
    name: 'Richard',
    price: '',
    price_sale: '$20.00',
    image: 'images/BlackTea_Richard.jpg',
    desc:
      ' is a type of tea that is more oxidized than o long teas_list. Black tea is generally stronger in flavor than other teas_list.'
  },
  {
    deal: 'no',
    best: 'no',
    category: 'black_tea',
    name: 'Organic',
    price: '',
    price_sale: '$34.00',
    image: 'images/BlackTea_Organic.jpg',
    desc:
      ' is a type of tea that is more oxidized than o long teas_list. Black tea is generally stronger in flavor than other teas_list.'
  },

  {
    deal: 'no',
    best: 'no',
    category: 'black_tea',
    name: 'Hoang Gia',
    price: '',
    price_sale: '$30.00',
    image: 'images/BlackTea_HoangGia.jpg',
    desc:
      ' is a type of tea that is more oxidized than o long teas_list. Black tea is generally stronger in flavor than other teas_list.'
  },
  {
    deal: 'no',
    best: 'no',
    category: 'black_tea',
    name: 'Japanese',
    price: '',
    price_sale: '$30.00',
    image: 'images/BlackTea_Japanese.jpg',
    desc:
      ' is a type of tea that is more oxidized than o long teas_list. Black tea is generally stronger in flavor than other teas_list.'
  },
  {
    deal: 'yes',
    best: 'no',
    category: 'black_tea',
    name: 'Curtis',
    price: '$50.00',
    price_sale: '$40.00',
    image: 'images/BlackTea_Curtis.jpg',
    desc:
      ' is a type of tea that is more oxidized than o long teas_list. Black tea is generally stronger in flavor than other teas_list.'
  },
  {
    deal: 'yes',
    best: 'no',
    category: 'black_tea',
    name: 'Lipton',
    price: '$35.00',
    price_sale: '$31.00',
    image: 'images/BlackTea_Lipton.jpg',
    desc:
      ' is a type of tea that is more oxidized than o long teas_list. Black tea is generally stronger in flavor than other teas_list.'
  },
  {
    deal: 'yes',
    best: 'no',
    category: 'herbal_tea',
    name: 'Verveine Tea',
    price: '$40.00',
    price_sale: '$35.00',
    image: 'images/herbal1.jpg',
    desc: ' can be made with fresh or dried flowers, fruit, leaves, seeds or roots.'
  },
  {
    deal: 'yes',
    best: 'no',
    category: 'herbal_tea',
    name: 'Concentrate',
    price: '$22.00',
    price_sale: '$19.00',
    image: 'images/herbal3.jpg',
    desc: ' can be made with fresh or dried flowers, fruit, leaves, seeds or roots.'
  },
  {
    deal: 'yes',
    best: 'no',
    category: 'herbal_tea',
    name: 'Celestial',
    price: '$30.00',
    price_sale: '$25.00',
    image: 'images/herbal9.jpg',
    desc: ' can be made with fresh or dried flowers, fruit, leaves, seeds or roots.'
  },
  {
    deal: 'yes',
    best: 'no',
    category: 'herbal_tea',
    name: 'Revolution',
    price: '$29.00',
    price_sale: '$25.00',
    image: 'images/herbal7.jpg',
    desc: ' can be made with fresh or dried flowers, fruit, leaves, seeds or roots.'
  },
  {
    deal: 'no',
    best: 'no',
    category: 'black_tea',
    name: 'Ngoc Duy',
    price: '',
    price_sale: '$34.00',
    image: 'images/BlackTea_NgocDuy.jpg',
    desc:
      ' is a type of tea that is more oxidized than o long teas_list. Black tea is generally stronger in flavor than other teas_list.'
  },
  {
    deal: 'no',
    best: 'yes',
    category: 'black_tea',
    name: 'NowBreak',
    price: '',
    price_sale: '$34.00',
    image: 'images/BlackTea_NowBreak.jpg',
    desc:
      ' is a type of tea that is more oxidized than o long teas_list. Black tea is generally stronger in flavor than other teas_list.'
  },

  {
    deal: 'no',
    best: 'no',
    category: 'herbal_tea',
    name: 'Hypertension Tea',
    price: '',
    price_sale: '$39.00',
    image: 'images/herbal4.jpg',
    desc: ' can be made with fresh or dried flowers, fruit, leaves, seeds or roots.'
  },
  {
    deal: 'no',
    best: 'yes',
    category: 'herbal_tea',
    name: 'Restful Sleep',
    price: '',
    price_sale: '$25.00',
    image: 'images/herbal8.jpg',
    desc: ' can be made with fresh or dried flowers, fruit, leaves, seeds or roots.'
  },
  {
    deal: 'no',
    best: 'yes',
    category: 'herbal_tea',
    name: 'Chrysanthemum Tea',
    price: '',
    price_sale: '$35.00',
    image: 'images/hoa-cuc-kho.jpg',
    desc: ' can be made with fresh or dried flowers, fruit, leaves, seeds or roots.'
  },

  {
    deal: 'no',
    best: 'no',
    category: 'herbal_tea',
    name: 'Turkey Tea',
    price: '',
    price_sale: '$19.00',
    image: 'images/turkey-tea.jpg',
    desc:
      ' is proud to bring you organic tea as part of our commitment to sustainable farming and healthy living.'
  },

  {
    deal: 'no',
    best: 'no',
    category: 'green_tea',
    name: 'Thai Green Tea',
    price: '',
    price_sale: '$19.00',
    image: 'images/green-thai-tea.jpg',
    desc:
      'Thai Tea is proud to bring you organic tea as part of our commitment to sustainable farming and healthy living.'
  },
  {
    deal: 'yes',
    best: 'no',
    category: 'green_tea',
    name: 'Viet Nam Tea',
    price: '$22.00',
    price_sale: '$20.00',
    image: 'images/GreenTea_VinaTea.jpg',
    desc:
      ' is proud to bring you organic tea as part of our commitment to sustainable farming and healthy living.'
  },
  {
    deal: 'yes',
    best: 'no',
    category: 'green_tea',
    name: 'Japanese',
    price: '$30.00',
    price_sale: '$27.00',
    image: 'images/GreenTea_Japanese.jpg',
    desc:
      ' is usually referring to sencha. In general, the highest quality teas_list are light-steamed, i.e. for about 30 seconds.'
  },

  {
    deal: 'no',
    best: 'no',
    category: 'green_tea',
    name: 'Thai tea - red',
    price: '',
    price_sale: '$25.00',
    image: 'images/red-thai-tea.jpg',
    desc: ' is number One The Original Thai Iced Tea Mix - Number One Brand Imported From Thailand.'
  },
  {
    deal: 'no',
    best: 'no',
    category: 'green_tea',
    name: 'Twining',
    price: '',
    price_sale: '$25.00',
    image: 'images/GreenTea_Twining.jpg',
    desc:
      ' is usually referring to sencha. In general, the highest quality teas_list are light-steamed, i.e. for about 30 seconds.'
  },
  {
    deal: 'no',
    best: 'yes',
    category: 'green_tea',
    name: 'Phuc Long',
    price: '',
    price_sale: '$25.00',
    image: 'images/GreenTea_PhucLong.jpg',
    desc:
      ' is usually referring to sencha. In general, the highest quality teas_list are light-steamed, i.e. for about 30 seconds.'
  },
  {
    deal: 'no',
    best: 'yes',
    category: 'green_tea',
    name: 'Ocha Tea',
    price: '',
    price_sale: '$15.00',
    image: 'images/GreenTea_Ocha.jpg',
    desc:
      ' is usually referring to sencha. In general, the highest quality teas_list are light-steamed, i.e. for about 30 seconds.'
  },
  {
    deal: 'no',
    best: 'no',
    category: 'green_tea',
    name: 'Matcha Tea',
    price: '',
    price_sale: '$75.00',
    image: 'images/GreenTea_Matcha.jpg',
    desc:
      ' is usually referring to sencha. In general, the highest quality teas_list are light-steamed, i.e. for about 30 seconds.'
  },
  {
    deal: 'no',
    best: 'no',
    category: 'green_tea',
    name: 'KirkLand',
    price: '',
    price_sale: '$55.00',
    image: 'images/GreenTea_KirkLand.jpg',
    desc:
      ' is usually referring to sencha. In general, the highest quality teas_list are light-steamed, i.e. for about 30 seconds.'
  },
  {
    deal: 'no',
    best: 'yes',
    category: 'green_tea',
    name: 'Kashimiri Chai',
    price: '',
    price_sale: '$65.00',
    image: 'images/GreenTea_Kashimiri_Chai.jpg',
    desc:
      ' is usually referring to sencha. In general, the highest quality teas_list are light-steamed, i.e. for about 30 seconds.'
  },
  {
    deal: 'no',
    best: 'yes',
    category: 'green_tea',
    name: 'Japanese',
    price: '',
    price_sale: '$45.00',
    image: 'images/GreenTea_Japanese.jpg',
    desc:
      ' is usually referring to sencha. In general, the highest quality teas_list are light-steamed, i.e. for about 30 seconds.'
  },
  {
    deal: 'no',
    best: 'yes',
    category: 'green_tea',
    name: 'Ahmad Tea',
    price: '',
    price_sale: '$45.00',
    image: 'images/GreenTea_Ahmad.jpg',
    desc:
      ' is usually referring to sencha. In general, the highest quality teas_list are light-steamed, i.e. for about 30 seconds.'
  }
];

//Declare and define function after loading window
window.onload = function() {
  document.title = 'NguyenTea Website';

  generate();

  // Set event when "promotion" tab is clicked
  var click_on_menu2 = document.querySelector('#menu_2');
  click_on_menu2.addEventListener('click', generate2);

  // Set  event when "best seller" tab is clicked
  var click_on_menu3 = document.querySelector('#menu_3');
  click_on_menu3.addEventListener('click', generate3);

  // Set  event when "herbal tea" tab within "products" tab is clicked
  var click_on_menu41 = document.querySelector('#menu_41');
  click_on_menu41.addEventListener('click', generate41);

  // Set  event when "green tea" tab within "products" tab is clicked
  var click_on_menu42 = document.querySelector('#menu_42');
  click_on_menu42.addEventListener('click', generate42);

  // Set event when "black tea" tab within "products" tab is clicked
  var click_on_menu43 = document.querySelector('#menu_43');
  click_on_menu43.addEventListener('click', generate43);

  // Set event when a "Promotion" word at footer is clicked
  var click_on_menu_f1 = document.querySelector('#menu_f1');
  click_on_menu_f1.addEventListener('click', generate2);

  // Set event when a "Best Seller" word at footer is clicked
  var click_on_menu_f2 = document.querySelector('#menu_f2');
  click_on_menu_f2.addEventListener('click', generate3);

  // Set event when a "Herbal Tea" word at footer is clicked
  var click_on_menu_f3 = document.querySelector('#menu_f3');
  click_on_menu_f3.addEventListener('click', generate41);

  // Set event when a "Green Tea" word at footer is clicked
  var click_on_menu_f4 = document.querySelector('#menu_f4');
  click_on_menu_f4.addEventListener('click', generate42);

  // Set event when a "Black Tea" word at footer is clicked
  var click_on_menu_f5 = document.querySelector('#menu_f5');
  click_on_menu_f5.addEventListener('click', generate43);
};

//Define a function to show all items
function generate() {
  var image_insert = document.querySelector('#group');
  for (var i = 0; i < teas_list.length; i++) {
    var div_col4 = document.createElement('div');
    div_col4.classList.add('col4');
    div_col4.appendChild(getImage_(teas_list[i].image, teas_list[i].desc, teas_list[i].name));
    div_col4.appendChild(getName(teas_list[i].name));
    div_col4.appendChild(getPara1(teas_list[i].price));
    div_col4.appendChild(getPara2(teas_list[i].price_sale));
    div_col4.appendChild(getStar());
    div_col4.appendChild(getBtn());
    image_insert.appendChild(div_col4);
  }
}

//Define a function to hide unnecessary tags
function disable(group) {
  group.innerHTML = '';
}

//Define a function to show all items which are on sale
function generate2() {
  document.title = 'Promotion';
  var update1 = document.querySelector('#offer1');
  disable(update1);

  var name_ = document.createElement('h4');
  name_.classList.add('title_page');
  var cellText = document.createTextNode('Welcome to shopping at Promotion page');
  name_.appendChild(cellText);
  update1.appendChild(name_);

  var image_insert = document.querySelector('#group');
  disable(image_insert);

  for (var i = 0; i < teas_list.length; i++) {
    if (teas_list[i].deal === 'yes') {
      var div_col4 = document.createElement('div');
      div_col4.classList.add('col4');
      div_col4.appendChild(getImage_(teas_list[i].image, teas_list[i].desc, teas_list[i].name));
      div_col4.appendChild(getName(teas_list[i].name));
      div_col4.appendChild(getPara1(teas_list[i].price));
      div_col4.appendChild(getPara2(teas_list[i].price_sale));
      div_col4.appendChild(getStar());
      div_col4.appendChild(getBtn());
      image_insert.appendChild(div_col4);
    }
  }
}

//Define a function to show all items which are on best seller
function generate3() {
  document.title = 'Best Seller';
  var update1 = document.querySelector('#offer1');
  disable(update1);

  var name_ = document.createElement('h4');
  name_.classList.add('title_page');
  var cellText = document.createTextNode('Welcome to shopping at Best Seller page');
  name_.appendChild(cellText);
  update1.appendChild(name_);

  var image_insert = document.querySelector('#group');
  disable(image_insert);

  for (var i = 0; i < teas_list.length; i++) {
    if (teas_list[i].best === 'yes') {
      var div_col4 = document.createElement('div');
      div_col4.classList.add('col4');
      div_col4.appendChild(getImage_(teas_list[i].image, teas_list[i].desc, teas_list[i].name));
      div_col4.appendChild(getName(teas_list[i].name));
      div_col4.appendChild(getPara1(teas_list[i].price));
      div_col4.appendChild(getPara2(teas_list[i].price_sale));
      div_col4.appendChild(getStar());
      div_col4.appendChild(getBtn());
      image_insert.appendChild(div_col4);
    }
  }
}

//Define a function to show all items which belong to herbal tea category
function generate41() {
  document.title = 'Herbal Tea';
  var update1 = document.querySelector('#offer1');
  disable(update1);

  var name_ = document.createElement('h4');
  name_.classList.add('title_page');
  var cellText = document.createTextNode('Welcome to shopping at Herbal Tea page');
  name_.appendChild(cellText);
  update1.appendChild(name_);

  var image_insert = document.querySelector('#group');
  disable(image_insert);

  for (var i = 0; i < teas_list.length; i++) {
    if (teas_list[i].category === 'herbal_tea') {
      var div_col4 = document.createElement('div');
      div_col4.classList.add('col4');
      div_col4.appendChild(getImage_(teas_list[i].image, teas_list[i].desc, teas_list[i].name));
      div_col4.appendChild(getName(teas_list[i].name));
      div_col4.appendChild(getPara1(teas_list[i].price));
      div_col4.appendChild(getPara2(teas_list[i].price_sale));
      div_col4.appendChild(getStar());
      div_col4.appendChild(getBtn());
      image_insert.appendChild(div_col4);
    }
  }
  var benefit = document.createElement('p');
  benefit.classList.add('benefit');
  var node = document.createTextNode(
    '"Mood-boosting, sleep aid, alertness-focus or even cold relief…you name it! We offer a wide variety of herbal drink that would help you to achieve your desire state of mind. Not only that, our blend of natural-ingredients is designed to be the best tasting drink you ever try."'
  );
  benefit.appendChild(node);
  image_insert.appendChild(benefit);
}

//Define a function to show all items which belong to green tea category
function generate42() {
  document.title = 'Green Tea';
  var update1 = document.querySelector('#offer1');
  disable(update1);

  var name_ = document.createElement('h4');
  name_.classList.add('title_page');
  var cellText = document.createTextNode('Welcome to shopping at Green Tea page');
  name_.appendChild(cellText);
  update1.appendChild(name_);

  var image_insert = document.querySelector('#group');
  disable(image_insert);

  for (var i = 0; i < teas_list.length; i++) {
    if (teas_list[i].category === 'green_tea') {
      var div_col4 = document.createElement('div');
      div_col4.classList.add('col4');
      div_col4.appendChild(getImage_(teas_list[i].image, teas_list[i].desc, teas_list[i].name));
      div_col4.appendChild(getName(teas_list[i].name));
      div_col4.appendChild(getPara1(teas_list[i].price));
      div_col4.appendChild(getPara2(teas_list[i].price_sale));
      div_col4.appendChild(getStar());
      div_col4.appendChild(getBtn());
      image_insert.appendChild(div_col4);
    }
  }
  var benefit = document.createElement('p');
  benefit.classList.add('benefit');
  var node = document.createTextNode(
    '"Green tea is simply the tea leaf without undergoing any processing or oxidizing process. It is a very popular drink in China and is known for many of its health benefits. The green color of the leaf is retained when putting into water. The level of caffein in green tea is also lower than black tea, making it suitable for use in many occasions."'
  );
  benefit.appendChild(node);
  image_insert.appendChild(benefit);
}

//Define a function to show all items which belong to black tea category
function generate43() {
  document.title = 'Black Tea';
  var update1 = document.querySelector('#offer1');
  disable(update1);

  var name_ = document.createElement('h4');
  name_.classList.add('title_page');
  var cellText = document.createTextNode('Welcome to shopping at Black Tea page');
  name_.appendChild(cellText);
  update1.appendChild(name_);

  var image_insert = document.querySelector('#group');
  disable(image_insert);

  for (var i = 0; i < teas_list.length; i++) {
    if (teas_list[i].category === 'black_tea') {
      var div_col4 = document.createElement('div');
      div_col4.classList.add('col4');
      div_col4.appendChild(getImage_(teas_list[i].image, teas_list[i].desc, teas_list[i].name));
      div_col4.appendChild(getName(teas_list[i].name));
      div_col4.appendChild(getPara1(teas_list[i].price));
      div_col4.appendChild(getPara2(teas_list[i].price_sale));
      div_col4.appendChild(getStar());
      div_col4.appendChild(getBtn());
      image_insert.appendChild(div_col4);
    }
  }
  var benefit = document.createElement('p');
  benefit.classList.add('benefit');
  var node = document.createTextNode(
    '"Black tea is made by oxidizing and drying out green tea. The process changed the color of the tea leaf from green to black. When putting it in water, the tea leaf will make the tea become black or dark red hence the name of black tea. It has the strongest flavor and caffein proportion among all teas_list. Besides being a favorite drink, it could be used in many other recipes such as cakes, bubble milk tea…It is best used in the morning or at noon due to its energizing nature."'
  );
  benefit.appendChild(node);
  image_insert.appendChild(benefit);
}

//Define a function to get the old price
function getPara1(text) {
  var para = document.createElement('p');
  para.classList.add('old');
  var node = document.createTextNode(text);
  para.appendChild(node);
  return para;
}

//Define a function to get the current price
function getPara2(text) {
  var para = document.createElement('p');
  para.classList.add('new');
  var node = document.createTextNode(text);
  para.appendChild(node);
  return para;
}

//Define a function to display name of category
function getName(text) {
  var name_ = document.createElement('h4');
  var cellText = document.createTextNode(text);
  name_.appendChild(cellText);
  return name_;
}

//Define a function to display images
function getImage_(link, des, name) {
  var fig = document.createElement('figure');
  var newImg = document.createElement('img');
  newImg.setAttribute('src', link);
  newImg.setAttribute('alt', '');
  newImg.setAttribute('onclick', 'imageView("' + link + '");');
  newImg.style.width = '250px';
  newImg.style.height = '270px';
  fig.appendChild(newImg);

  var caption = document.createElement('figcaption');
  caption.innerHTML = name + des;
  fig.appendChild(caption);
  return fig;
}

//Define a function to display the rating of items
function getStar() {
  var star = document.createElement('div');
  star.classList.add('rating');
  var text =
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star-o'></i>";
  star.innerHTML = text;
  return star;
}

//Define a function to display a button "Add to cart" for each items
function getBtn() {
  var anchor = document.createElement('a');
  anchor.classList.add('btn-cart');
  anchor.setAttribute('href', '');
  var node = document.createTextNode('Add to cart');
  anchor.appendChild(node);
  return anchor;
}
