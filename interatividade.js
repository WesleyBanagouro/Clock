
  const ponteiroSegundos = document.querySelector('.second-hand');
  const ponteiroMinutos = document.querySelector('.min-hand');
  const ponteiroHoras = document.querySelector('.hour-hand');

  function setDate() {
    const agora = new Date();

    const segundos = agora.getSeconds();
    const segundosGraus = ((segundos / 60) * 360) + 90;
    ponteiroSegundos.style.transform = `rotate(${segundosGraus}deg)`;

    const minutos = agora.getMinutes();
    const minutosGraus = ((minutos / 60) * 360) + ((segundos/60)*6) + 90;
    ponteiroMinutos.style.transform = `rotate(${minutosGraus}deg)`;

    const horas = agora.getHours();
    const horasGraus = ((horas + (minutos / 60)) * 360 / 12) + 90;
    ponteiroHoras.style.transform = `rotate(${horasGraus}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();
