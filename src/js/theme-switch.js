const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

let savedTheme = localStorage.getItem('theme');
const toggleRef = document.querySelector('#theme-switch-toggle');

checkSavedTheme();

function checkSavedTheme() {
  if (!savedTheme) {
    document.body.classList.add(LIGHT);
    return;
  }
  if (savedTheme === DARK) {
    document.body.classList.add(DARK);
    toggleRef.checked = true;
  } else {
    document.body.classList.add(LIGHT);
  }
}

toggleRef.addEventListener('change', handleToggle);

function handleToggle() {
  if (toggleRef.checked) {
    document.body.classList.add(DARK);
    localStorage.setItem('theme', DARK);
    document.body.classList.remove(LIGHT);
    return;
  }
  document.body.classList.add(LIGHT);
  localStorage.setItem('theme', LIGHT);
  document.body.classList.remove(DARK);
}

export { toggleRef };
