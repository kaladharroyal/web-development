import React from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const NavBar = () => {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <nav style = {{background:theme === 'dark'? '#333':'#eee', color : theme === 'dark' ? '#fff' : '#000'
    }}>
        <h1>NavBar</h1>
        <button onClick={()=> setTheme(theme === 'dark'? 'light':'dark')}>Toggle</button>
    </nav>
  )
}

export default NavBar