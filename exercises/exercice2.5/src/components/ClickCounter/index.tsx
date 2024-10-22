import { useState } from 'react'

interface HeaderProps {
  title: string;
  message: string;
  messageMouseOncounter: string
}

const ClickCounter = ({ title, message, messageMouseOncounter }: HeaderProps) => {
  const [count, setCount] = useState(0);

  const ClickCounter = () => {
    setCount(count + 1);
  }

  const [showMessage, setShowMesage] = useState(false);

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{showMessage ? messageMouseOncounter : " "}</p>
      <button onClick={ClickCounter} onMouseEnter={() => setShowMesage(true)} onMouseLeave={() => setShowMesage(false)}>
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