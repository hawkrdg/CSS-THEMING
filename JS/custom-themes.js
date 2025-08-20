const themes = [
  'darkCyanTheme',
  'brickTheme',
  'greenTheme',
  'khakiTheme',
  'oliveTheme'
]

let currentTheme = 'brickTheme';
let currentLightDark = 'lightTheme';
let activeSelectEl = '';
let activeSelectState = '';
const themeClassEl = document.getElementsByClassName('themed-wrapper')[0];
const selectEl = 

setTheme = (theme) => {
  themes.forEach(t => themeClassEl.classList.remove(t));
  currentTheme = theme;
  themeClassEl.classList.add(theme);
  localStorage.setItem('theme', currentTheme);
}

setLightDark = (mode) => {
  themeClassEl.classList.remove('lightTheme');
  themeClassEl.classList.remove('darkTheme');
  currentLightDark = mode;
  themeClassEl.classList.add(mode);
  localStorage.setItem('lightDark', mode);
  setButtonModeText()
}

toggleMode = () => {
  if (currentLightDark == 'lightTheme') {
    setLightDark('darkTheme');
  } else {
    setLightDark('lightTheme');
  }
}

setButtonModeText = () => {
  const btnEl = document.getElementById('btnMode');
  const buttonModeText = currentLightDark == 'lightTheme' ? 'go Dark' : 'go Light';
  btnEl.innerHTML = buttonModeText;
}

toggleSelectDisabled = () => {
  const selEl = document.getElementById('selThemes');
  const disableBtnEl = document.getElementById('disableBtn');
  if (selEl.disabled) {
    selEl.disabled = false;
    disableBtnEl.innerHTML = 'Disable Select';
  } else {
    selEl.disabled = true;
    disableBtnEl.innerHTML = 'Enable Select';
  }
}
