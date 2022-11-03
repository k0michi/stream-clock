import { format } from 'date-fns';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

const container = document.createElement('div');
container.className = 'container';
app.appendChild(container);

const time = document.createElement('div');
time.className = 'time';
container.appendChild(time);

const date = document.createElement('div');
date.className = 'date';
container.appendChild(date);

setInterval(() => {
  const now = new Date();
  time.textContent = format(now, 'HH:mm:ss');
  date.textContent = format(now, 'yyyy.MM.dd EEE');
}, 1000);