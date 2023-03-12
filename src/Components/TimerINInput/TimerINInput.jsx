import React, { useContext } from 'react'
import { TimerContext } from '../../App';
import "./TimerINInput.css"

export function TimerINInput() {
    const valueOfTimer = useContext(TimerContext)
    const [sec,setSec] = valueOfTimer.seconds;
    const [minute,setMinute] = valueOfTimer.minute;
    const [hour, setHour] = valueOfTimer.hour;

    const secondsHandler = (e) => {
        const val = e.target.value;

        if(Number(val) > 59){
            setSec("00")
            if(Number(minute) === 0){
                setMinute("01")
            }
            return;
        }
        
        if(val.length > 2){
            setSec(val.slice(0,2));
            return;
        }
        setSec(val)

    }

    const MinuteHandler = (e) => {
        const val = e.target.value;

        if(Number(val) > 59){
            setMinute("59")
            return;
        }
        
        if(val.length > 2){
            setMinute(val.slice(0,2));
            return;
        }
        setMinute(val)
    }

    const HourHandler = (e) => {
        const val = e.target.value;

        if(Number(val) > 24){
            setHour("24")
            return;
        }
        
        if(val.length > 2){
            setHour(val.slice(0,2));
            return;
        }
        setHour(val)
    }


  return (
    <div>
        <input className='input-timer' type="text" onChange={HourHandler} value={hour} />
        <input className='input-timer' type="text" onChange={MinuteHandler} value={minute} />
        <input className='input-timer' type="text" onChange={secondsHandler} value={sec} />
    </div>
  )
}
