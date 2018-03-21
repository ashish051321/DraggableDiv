document.addEventListener('DOMContentLoaded', () => {
  let mousedown = false;
  let xold = 0;
  let xnew = 0;

  let xdiff = 0;
  let ydiff = 0;
    var mdiv = document.getElementById('moveit');
    // console.log("The left codinate is "+ getComputedStyle(mdiv).left);
    // mdiv.style.left="100px";
      
    
    
  document
    .querySelector('div.movable > div.header')
    .addEventListener('mousedown', evt => {
    //   console.log('mousedown');
      mousedown = true;
      xold = evt.clientX;
      yold = evt.clientY;
    //   console.log(xold, ' ', yold);
    });

  document.addEventListener('mouseup', evt => {
    mousedown = false;
    // console.log('mouseup');
    console.log(mdiv.style.left," ", mdiv.style.top);
  });

  document
    .addEventListener('mousemove', evt => {
      if (mousedown) {
        // console.log('ya mouse down and moving');
        xdiff = evt.clientX - xold;
        ydiff = evt.clientY - yold;
        
        xold = evt.clientX;
        yold = evt.clientY;

        // console.log(xdiff, ' ', ydiff);
        // console.log("x and y diff values"+xdiff+" "+ydiff);
        // console.log("-->"+)
        // console.log("==>"+(parseInt(mdiv.style.left) + parseInt(xdiff)) + 'px');
        mdiv.style.left = (parseInt(mdiv.style.left) + parseInt(xdiff)) + 'px';
        mdiv.style.top = (parseInt(mdiv.style.top) + parseInt(ydiff)) + 'px';
        // console.log(mdiv.style.left," ", mdiv.style.top)
      
          
      }
      
    });
});

