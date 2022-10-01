import { useState, useEffect } from 'react';
import './App.css';
import Time from './components/Time';
import Date from './components/Date';
import Circle from './components/Circle';
import GetDate from "./GetDate";



function App() {
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  let [second, setSecond] = useState(0);

  useEffect(() => {
    setInterval(() => {
      let date = GetDate();
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
    }, 1000);
  }, []);

  return (
    <div className="container">
      <Circle hour={hour} minute={minute} second={second} />
      <div className='timeBox'>
        <Time hour={hour} minute={minute} second={second} setHour={setHour} />
        <Date />
      </div>
    </div>
  );
}

export default App;
