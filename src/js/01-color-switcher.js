function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
  
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  
  let intervalId = null;
  
  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
  
  function handleStartClick() {
    startBtn.disabled = true;
    startBtn.classList.add('disabled');
    stopBtn.disabled = false;
    stopBtn.classList.remove('disabled');
    stopBtn.classList.add('active');
  
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
  
  function handleStopClick() {
    startBtn.disabled = false;
    startBtn.classList.remove('disabled');
    stopBtn.disabled = true;
    stopBtn.classList.remove('active');
    stopBtn.classList.add('disabled');
    clearInterval(intervalId);
  }
  
  startBtn.addEventListener('click', handleStartClick);
  stopBtn.addEventListener('click', handleStopClick);