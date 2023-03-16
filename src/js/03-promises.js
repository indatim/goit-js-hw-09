import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  createBtn: document.querySelector('button[type="submit"]'),
}

refs.createBtn.addEventListener('click', e => {
  e.preventDefault();
  if (refs.delay.value < 0 || refs.step.value < 0 || refs.amount.value < 0) {
    Report.warning('Please choose a positive number!',
      '',
      'Okay');
  } else {
    for (let i = 0; i < refs.amount.value; i++) {
      let position = i + 1;
      let delays = Number(refs.delay.value) + Number(refs.step.value) * i;

      createPromise(position, delays)
        .then(({ position, delay }) => {
          Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notify.failure(
            `Rejected promise ${position} in ${delay}ms`
          );
        });
    }
  }

  refs.form.reset();
})

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
