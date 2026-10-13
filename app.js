const challenges = {
  move: { icon: '↗', category: 'A LITTLE MORE MOVEMENT', title: 'Take the scenic route.', description: 'Walk outside for 20 minutes. Seven days. A different perspective.', duration: '20 min a day' },
  learn: { icon: '✳', category: 'A LITTLE MORE CURIOSITY', title: 'Turn a new page.', description: 'Read for 15 minutes. Seven days. See where a new idea takes you.', duration: '15 min a day' },
  rest: { icon: '☾', category: 'A LITTLE MORE BREATHING ROOM', title: 'Make space for quiet.', description: 'Put your phone away for 30 minutes before bed. Seven evenings, just for you.', duration: '30 min a day' },
};
let selected = 'move';
const progress = { move: 0, learn: 0, rest: 0 };
const byId = (id) => document.getElementById(id);
function render() {
  const challenge = challenges[selected];
  const count = progress[selected];
  for (const field of ['icon', 'category', 'title', 'description', 'duration']) byId(`demo-${field}`).textContent = challenge[field];
  byId('progress-text').textContent = `${count} of 7 days`;
  byId('progress-fill').style.width = `${count / 7 * 100}%`;
  document.querySelector('.demo-days').replaceChildren(...Array.from({ length: 7 }, (_, index) => {
    const day = document.createElement('span');
    day.textContent = index < count ? '✓' : index + 1;
    day.className = index < count ? 'done' : '';
    day.setAttribute('aria-label', `Day ${index + 1}${index < count ? ', completed' : ', not completed'}`);
    return day;
  }));
  byId('check-in').disabled = count === 7;
  byId('check-in').textContent = count === 7 ? 'You did a dapadapa! ✓' : 'Log a little win +';
  byId('demo-feedback').textContent = count === 7 ? 'Seven little wins. Look how far you’ve come.' : count ? `Day ${count} done. Showing up looks good on you.` : 'Every beginning counts.';
  document.querySelectorAll('[data-challenge]').forEach((button) => {
    const active = button.dataset.challenge === selected;
    button.classList.toggle('selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
document.querySelectorAll('[data-challenge]').forEach((button) => button.addEventListener('click', () => { selected = button.dataset.challenge; render(); }));
byId('check-in').addEventListener('click', () => { progress[selected] = Math.min(7, progress[selected] + 1); render(); });
byId('reset').addEventListener('click', () => { progress[selected] = 0; render(); });
byId('year').textContent = new Date().getFullYear();
render();
