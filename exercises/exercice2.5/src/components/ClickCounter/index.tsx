import { useState } from 'react'

interface HeaderProps {
  title: string;
  message?: string
}

const ClickCounter = ({ title, message = "You are a master in the art of clicking .!" }: HeaderProps) => {
  const [count, setCount] = useState(0);
  const ClickCounter = () => {
    setCount(count + 1);
  }
  
  return (
    <div className="card">
      <h1>{title}</h1>
      <button onClick={ClickCounter}>
        count is {count}
      </button>
      {count >= 10 ? <p>{message}</p> : null}


      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}
export default ClickCounter;