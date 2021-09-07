import { useEffect, useState } from 'react';
import './index.css';

export default function ToggleDarkMode() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    if (localStorage.getItem('theme') === 'null') {
      localStorage.setItem('theme', 'light');
      document.getElementsByTagName('HTML')[0].setAttribute('data-theme', 'light');
    } else {
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
    }
  }, []);

  const toggleThemeChange = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light');
      document.getElementsByTagName('HTML')[0].setAttribute('data-theme', 'light');
      setIsDark(false);
    } else {
      localStorage.setItem('theme', 'dark');
      document.getElementsByTagName('HTML')[0].setAttribute('data-theme', 'dark');
      setIsDark(true);
    }
  };
  return (
    <label>
      <input className='toggle-checkbox'checked={!isDark} onChange={() => toggleThemeChange()} type='checkbox' name=''></input>
      <div className='toggle-slot'>
        <div className='sun-icon-wrapper'>
          <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
        </div>
        <div className='toggle-button'></div>
        <div className='moon-icon-wrapper'>
          <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
        </div>
      </div>
    </label>
    // <div className='darkmode-switch'>
    //   <div className='toggle' title='toggle dark mode'>
    //     <label>
    //       <input  />
    //       <span></span>
    //     </label>
    //   </div>
    // </div>
  );
}
