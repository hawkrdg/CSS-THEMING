window.onload = () => {
  console.log(`window.onload()`);

  activeSelectEl = document.getElementById('selThemes');
  currentTheme = localStorage.getItem('theme');
  currentLightDark = localStorage.getItem('lightDark');
  
  setTheme(currentTheme);
  setLightDark(currentLightDark);
  setButtonModeText(currentLightDark);
  
  activeSelectEl.selectedIndex = themes.indexOf(currentTheme);
  activeSelectEl.value = currentTheme;
  activeSelectEl.onclick();
}

