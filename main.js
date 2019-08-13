
setInterval(setClock,1000);

  const hour = document.querySelector('[data-hour]');
  const minute = document.querySelector('[data-minute]');
  const second = document.querySelector('[data-second]');

function setClock(){
  const nowDate = new Date;
  const sR = nowDate.getSeconds()/60;
  const mR = ( sR + nowDate.getMinutes())/60;
  const hR = ( mR + nowDate.getHours())/12;

  setRotation(hour, hR);
  setRotation(minute, mR);
  setRotation(second, sR);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();

