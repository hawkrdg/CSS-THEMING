# CSS-THEMING
## A Vanilla CSS approach to theming... 

This demo is a pure CSS approach to custom theming a web app. While it is a little bit of grunt work setting up theme colors for the first time, but once done this can be plugged into any app.

It is worth looking through Google's Material Design color theories to get an idea of palettes and contrasts. This demo is based on my experience as an Angular developer where theming is fairly simple so my viewpoints are biased that way, BUT I believe a quite complete theme does not need 44 css color variables along with nuances, etc (Angular does have a great tool for generating this though...). 

So this is what I want from a theme:

- Provide a uniform set of colors across the app.
- Provide uniform typography accross the app.
- Provide a consistent look and feel to widgets and indicators.
- Include both 'light' and 'dark' modes.
- Have an easy way to switch themes and modes.
- Have a 'clean' way of including the theme in an app.
- Remember the last theme (not a game killer...).

And this approach to theming works by:

1. Including a 'custom-themes.js' file to handle theme and mode switching.
2. Including a 'custom-themes.css' which must be inluded at the front of the main stylesheet: @include 'path/custom-themes.css'

I have settled on 14 colors, all setup as light-dark() pairs. the naming convention is similar to Angular Materials color names:

    --thm-primary-color: light-dark(#695f00, #d6c862);
    --thm-on-primary-color: light-dark(#e8e2cd, #4a4737);
    --thm-on-primary-text-color: light-dark(rgb(240, 240, 240), rgb(10, 10, 10));

    --thm-secondary-color: light-dark(#717367, #ece088);
    --thm-on-secondary-color: light-dark(#f3f1dd, #5e5f58);
    --thm-on-secondary-text-color: light-dark(rgb(240, 240, 240), rgb(10, 10, 10));

    --thm-surface-color: light-dark(#f3ede2, #212018);
    --thm-on-surface-color: light-dark(#212018, #f3ede2);
    --thm-on-surface-text-color: light-dark(rgb(10, 10, 10), rgb(240, 240, 240));
  
    --thm-neutral-color: light-dark(rgb(185, 185, 185), rgb(130, 130, 130));
    --thm-on-neutral-color: light-dark(#695f00, #ece088);
    --thm-on-neutral-text-color: light-dark(rgb(10, 10, 10), rgb(240, 240, 240));

    --thm-error-color: light-dark(rgb(255, 34, 0), rgb(255, 131, 131));
    --thm-on-error-color: light-dark(rgb(240, 240, 240), rgb(10, 10, 10));

The CSS file is in two parts: the first defines a class containing colors and typography for each of the different themes, the second defines classes for widgets, indicators, etc. to define the look and feel. Any of these classes that need to be over-riddent or enhanced are dealt with in the overall stylesheet. I try to keep things like size and layout outside (as much as possible). 

So a typical theme class looks like:

      .khakiTheme {
        --thm-primary-color: light-dark(#5d6051, #c6c8b5);
        --thm-on-primary-color: light-dark(#c6c8b5, #5d6051);
        --thm-on-primary-text-color: light-dark(rgb(240, 240, 240), rgb(10, 10, 10));

        --thm-secondary-color: light-dark(#717367, #f3f1dd);
        --thm-on-secondary-color: light-dark(#f3f1dd, #5e5f58);
        --thm-on-secondary-text-color: light-dark(rgb(240, 240, 240), rgb(10, 10, 10));

        --thm-surface-color: light-dark(#eff0e4, rgb(32, 31, 27));
        --thm-on-surface-color: light-dark(#5d6051, #eff0e4);
        --thm-on-surface-text-color: light-dark(rgb(10, 10, 10), rgb(240, 240, 240));
  
        --thm-neutral-color: light-dark(rgb(185, 185, 185), rgb(130, 130, 130));
        --thm-on-neutral-color: light-dark(rgb(114, 43, 27), rgb(253, 251, 243));
        --thm-on-neutral-text-color: light-dark(rgb(10, 10, 10), rgb(240, 240, 240));

        --thm-error-color: light-dark(rgb(255, 34, 0), rgb(255, 131, 131));
        --thm-on-error-color: light-dark(rgb(240, 240, 240), rgb(10, 10, 10));

        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        font-size: 1.1em;
      }

And a typical widget decoration looks like:

    .themed-button {
      height: 40px;
      padding: 0 15px;
      font-size: 1.1em;
      border-radius: 10px;
      color: var(--thm-on-secondary-color);
      background-color: var(--thm-secondary-color);
      font-family: inherit;
      font-style: inherit;
    }

Normally, themes and modes are changed by adding / removing classes from \<body\>. For this demo, the \<div class="themed-wrapper"\> is used to keep the unthemed wrapper from being affected. Storing both the currentTheme and currentLightDark in local storage allow persistence across refreshes and reloads. The JS for this is:

    const themes = [
      'darkCyanTheme',
      'brickTheme',
      'greenTheme',
      'khakiTheme',
      'oliveTheme'
    ]

    let currentTheme = '';
    let currentLightDark = '';
    const themeClassEl = document.getElementsByClassName('themed-wrapper')[0];
    
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
    }

This is all there is to it. The demo adds a little bit to wire the controls. The app is hosted at https://hawkrdg.com/sandbox5. Using the dev-tools you can watch the classes being swapped in and out...


