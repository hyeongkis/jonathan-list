var Links = {
  setColor: function(color) {
    // var alist = document.querySelectorAll('a');
    // i = 0;
    // while (i < alist.length) {
    //   console.log(alist[i]);
    //   alist[i].style.color = color;
    //   i = i + 1;
    $('a').css('color', color);
  }
}

var Body = {
  setColor: function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackground: function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.setBackground('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('yellow');
  } else {
    Body.setBackground('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue')
  }
}
