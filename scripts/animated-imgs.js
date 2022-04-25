let limit = a => Math.sign(a) * Math.min(15, Math.abs(a));

let imgs = [...document.getElementsByClassName('right-pic')].map(img => {

  let container = document.createElement('div');
  container.classList.add('card-3d');
  img.parentNode.insertBefore(container, img);
  container.append(img);
  let reqId, tx = 0, ty = 0, x = 0, y = 0;
  function upd() {
      animate();
      x += (tx - x)/9;
      y += (ty - y)/9;
      img.style.transform = `rotatex(${-y}deg) rotatey(${x}deg)`;
      img.style.boxShadow = `${-x/4}px ${-y/4}px 5px 0 #0007`;
   
  }
  
  function animate() {
      if (Math.abs(tx - x) > 0.01 && Math.abs(ty - y) > 0.01)
        reqId = requestAnimationFrame(upd);
  }
  
  return function(x, y) {
      tx = ty = 0; 
      let r = container.getBoundingClientRect();
      if (r.x < x && r.y < y && r.x + r.width > x && r.y + r.height > y) {
          tx = limit((x - r.x - r.width/2)/4);
          ty = limit((y - r.y - r.height/2)/3);
      } 
      cancelAnimationFrame(reqId);
      animate();
  }
});

addEventListener('mousemove', e => imgs.forEach(i => i(e.x, e.y)));