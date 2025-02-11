import React from 'react'
import './App.css'
import { useState } from 'react';

function App() {
  function Counter() {
    // 제네릭으로 타입 명시적 지정
    const [count, setCount] = useState<number>(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>
          Increment
        </button>
      </div>
    );
  }
  return (
    <Counter />
  )
}

export default App 