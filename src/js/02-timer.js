import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const startBtn = document.querySelector(`[data-start]`);
const daysEl = document.querySelector(`[data-days]`);
const hoursEl = document.querySelector(`[data-hours]`);
const minutesEl = document.querySelector(`[data-minutes]`);
const secondsEl = document.querySelector(`[data-seconds]`);
const value = document.querySelectorAll('.value');


startBtn.disabled = true;


  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      if (selectedDate < new Date()) {
        Notiflix.Notify.failure("Please choose a date in the future");
        startBtn.disabled = true;
      }


        startBtn.disabled = false;
      
    },
  };
  

const picker = flatpickr("#datetime-picker", options);

startBtn.addEventListener('click',checkData )


function checkData()  {
    const selectedDate = picker.selectedDates[0]; 
    const currentDate = new Date();
    const difference = selectedDate - currentDate;

    if (difference <= 0) {
        Notiflix.Notify.failure("Please choose a date in the future");
        return;
    }

    const timerInterval = setInterval(() => {
        const remainingTime = convertMs(selectedDate - new Date());

        daysEl.textContent = addLeadingZero(remainingTime.days);
        hoursEl.textContent = addLeadingZero(remainingTime.hours);
        minutesEl.textContent = addLeadingZero(remainingTime.minutes);
        secondsEl.textContent = addLeadingZero(remainingTime.seconds);

        if (remainingTime.days === 0 && remainingTime.hours === 0 && remainingTime.minutes === 0 && remainingTime.seconds === 0) {
            clearInterval(timerInterval);
            Notiflix.Notify.success('Countdown finished!');
            daysEl.textContent = "0";
            hoursEl.textContent = "0";
            minutesEl.textContent = "0";
            secondsEl.textContent = "0";
        }
    }, 1000);
};

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
  }

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
