import React, { useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { getFromTheme } from './utils'
import './index.css'
import themes from './config/themes.json'
import Game from './game'

const App = () => {
  
  const useTheme = (defaultTheme) => {
    const [themeName, setThemeName] = useState(defaultTheme)

    const switchTheme = (name) => {
      setThemeName(themeName === 'darkTheme' ? 'lightTheme' : 'darkTheme')
    }

    return [themeName, switchTheme]
  }

  const [themeName, toggleTheme] = useTheme('darkTheme')


  const GlobalStyle = createGlobalStyle`
    body {
        background: ${getFromTheme('body.bg')};
        color: ${getFromTheme('body.color')};
        transition: background .3s ease;
    }
  `

  return (
    <ThemeProvider theme={themes[themeName]}>
      <React.Fragment>
        <GlobalStyle/>
          <Game toggleTheme={toggleTheme}/>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
