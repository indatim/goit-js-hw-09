import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

class Timer {
    constructor({onTicTac}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTicTac = onTicTac;
    }

        start() {
        if (this.isActive) {
        return;
    }
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.convertMs(deltaTime);

            this.onTicTac(time);

        }, 1000);
    }

    convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = this.addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
    }
    
    addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
}

const timer = new Timer({
    onTicTac: updateClockface
});

refs.startBtn.addEventListener('click', () => {
    timer.start();
});

function updateClockface({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
}

// 🤖 =========== Робочій варіант (Робочій секундомер) (Репета YouTube) ========

// const refs = {
// //   inputDate: document.querySelector('#datetime-picker'),
//     startBtn: document.querySelector('button[data-start]'),
//     days: document.querySelector('span[data-days]'),
//     hours: document.querySelector('span[data-hours]'),
//     minutes: document.querySelector('span[data-minutes]'),
//     seconds: document.querySelector('span[data-seconds]'),
// };

// const timer = {
//     intervalId: null,
//     isActive: false,
    
//     start() {
//         if (this.isActive) {
//         return;
//     }
//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const time = convertMs(deltaTime);

//             updateClockface(time);

//         }, 1000);
//     },
// };

//// - ⚡ Робимо class: timer з const'а та функцій (нижче)!

// class Timer {
//     constructor({onTicTac}) {
//         this.intervalId = null;
//         this.isActive = false;
//         this.onTicTac = onTicTac;
//     }

//         start() {
//         if (this.isActive) {
//         return;
//     }
//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const time = this.convertMs(deltaTime);

//             this.onTicTac(time);

//         }, 1000);
//     }

//     convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = this.addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
//     }
    
//     addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }
// }

// const timer = new Timer({
//     onTicTac: updateClockface
// });

//////////// 💥 Якщо використовуємо без класу, тоді розкоментувати код нижче + функції нижче!

// const timer = {
//     intervalId: null,
//     isActive: false,
    
//     start() {
//         if (this.isActive) {
//         return;
//     }
//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const time = convertMs(deltaTime);

//             updateClockface(time);

//         }, 1000);
//     }
// }

// refs.startBtn.addEventListener('click', () => {
//     timer.start();
// });

// function updateClockface({ days, hours, minutes, seconds }) {
//     refs.days.textContent = days;
//     refs.hours.textContent = hours;
//     refs.minutes.textContent = minutes;
//     refs.seconds.textContent = seconds;
// }

//////////// 💥 Якщо використовуємо без класу, тоді розкоментувати код з функціями нижче!

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }






// const date1 = Date.now();
// console.log('date1', date1);

// setTimeout(() => {
//     const date2 = Date.now();

//     console.log('date1', date1);
//     console.log('date2', date2);

//     console.log(date2 - date1);
// }, 3000);