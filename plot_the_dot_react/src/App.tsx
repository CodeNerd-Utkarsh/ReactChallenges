import { useState } from 'react';
import './App.css'

type PointType = {
  x: number,
  y: number
}
function NewPoint(props: any) {
  const { x, y } = props
  return (
    <div className='newPoint' style={{ top: y + "px", left: x + "px" }} >

    </div>
  )
}

function App() {
  const [points, setPoints] = useState<PointType[]>([])
  const [popped, setPopped] = useState<PointType[]>([])
  function handleClicks(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { clientX, clientY } = e;
    setPoints((prev) => [...prev, {
      x: clientX,
      y: clientY
    }])
  }
  function clearPoints() {
    setPoints([])
  }
  function handleUndo() {
    const newPoints = [...points]
    const lastPoint = newPoints.pop()
    setPopped([...popped, lastPoint])
    setPoints(newPoints)
    console.log(popped)
  }

  return (
    <>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={clearPoints} >Reset</button>
      <div className="app" onClick={(e) => handleClicks(e)} >
        {points.map((point, idx) => {
          return (
            <NewPoint key={idx} {...point} />
          )
        })}
      </div>
    </>
  )
}

export default App
