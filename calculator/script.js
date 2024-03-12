(function () {

  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    })
  });

  // equal.addEventListener('click', function (e) {
  //   if (screen.value === '') {
  //     screen.value = "Please enter";
  //   } else {
  //     let answer = eval(screen.value);//There is a problem on this line 
  //     screen.value = answer;
  //   }
  // })

  equal.addEventListener('click', function (e) {
    if (screen.value === '') {
      screen.value = "Please enter";
    } else {
      try {
        let answer = eval(screen.value.replace(/[^-()\d/*+.]/g, ''));
        screen.value = answer;
      } catch (error) {
        screen.value = "Error";
      }
    }
  });
  

  clear.addEventListener('click', function(e){
    screen.value = "";
  })

})();