import React, { useContext, useState } from "react";
import { TimerContext } from "../../App";

export function TimerButtons() {
  const timerValues = useContext(TimerContext);
  const [sec, setSec] = timerValues.seconds;
  const [minute, setMinute] = timerValues.minute;

  const [startDisable, setStartDisable] = useState(false);
  const [stopDisable, setStopDisable] = useState(true);
  const [timerClear, setTimerClear] = useState();

  const StartTimer = () => {
    let x = timerClear;
    setStartDisable(!startDisable);
    setStopDisable(!stopDisable);

    let tsec = sec;
    let min = minute;
    clearInterval(x);
    x = setInterval(() => {
      if (Number(min) === 0) {
        if (Number(tsec) === 0) {
          clearInterval(x);
          return;
        }
      }
      if (Number(min) !== 0) {
        if (Number(tsec) === 0) {
          min = Number(min) - 1;
          min = min < 10 ? `0${min}` : min;
          tsec = 60;
        }
      }
      tsec = Number(tsec) - 1;
      tsec = tsec < 10 ? `0${tsec}` : tsec;
      setMinute(min);
      setSec(tsec);
    }, 1000);
    setTimerClear(x);
  };

  const StopTimer = () => {
    setStartDisable(!startDisable);
    setStopDisable(!stopDisable);
    clearInterval(timerClear);
  };

  const RestTimer = () => {
    setStartDisable(false);
    setStopDisable(true);
    clearInterval(timerClear);
    setSec("00");
    setMinute('00');
  }

  return (
    <div>
      <button onClick={StartTimer} disabled={startDisable}>
        Start
      </button>
      <button onClick={StopTimer} disabled={stopDisable}>
        Stop
      </button>
      <button onClick={RestTimer}>Reset</button>
    </div>
  );
}

// var todos = [];
// const uList = document.querySelector('.todo-list')

// document.querySelector('form').addEventListener('submit', function(e){
//     e.preventDefault();
//     const input = document.querySelector('.todo-input');
//     todos.push(input.value)
//     console.log(todos);
//     input.value = '';
//     displayTodos();
// })

// function displayTodos(){
//     //clear the ul
//     uList.innerHTML = '';
//     todos.map(todo => {
//         const li = document.createElement('li');
//         li.innerText = todo;
//         li.setAttribute('class','incomplete')
//         // complete
//         const completeButton = document.createElement('button');
//         completeButton.innerHTML = "Complete";
//         // delete
//         const deleteButton = document.createElement('button');
//         deleteButton.innerHTML = "Delete";
//         uList.append(li);
//         uList.append(completeButton);
//         uList.append(deleteButton);
//         completeButton.addEventListener('click',() => {
//             const current = li.getAttribute('class');
//             const newAttr = current == 'complete' ? 'incomplete' : 'complete';
//             li.setAttribute('class',newAttr);
//         })
//     })
// }
