import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [rgbValues, setRgbValue] = useState([])
  const [correctRGBValue, setCorrectRGBValue] = useState<string>()
  const [scoreCounter, setScoreCounter] = useState<number>(0)
  function generateRGB() {
    let R, G, B
    R = Math.floor(Math.random() * 256)
    G = Math.floor(Math.random() * 256)
    B = Math.floor(Math.random() * 256)
    let rgbStr = `${R},${G},${B}`
    console.log(rgbStr)
    return rgbStr
  }
  function handleRGB() {
    setRgbValue([])
    setCorrectRGBValue([])
    let color1 = generateRGB()
    let color2 = generateRGB()
    let color3 = generateRGB()
    let shuffledArr = [color1, color2, color3].sort(() => .5 - Math.random())
    console.log(shuffledArr)
    setRgbValue(shuffledArr)
    let choosenRGB: string = shuffledArr[Math.floor(Math.random() * shuffledArr.length)]
    setCorrectRGBValue(choosenRGB)
    console.log("choosenRGB", correctRGBValue)
  }
  function checkAnswer(rgbvalue: any) {
    if (correctRGBValue === rgbvalue) {
      setScoreCounter(scoreCounter + 1)
      setRgbValue([])
      setCorrectRGBValue([])
    }
    if (correctRGBValue !== rgbvalue) setScoreCounter(scoreCounter ? scoreCounter - 1 : 0)
  }
  useEffect(() => {
    handleRGB()
  }, [scoreCounter])

  return (
    <div className="app">
      <h1>{scoreCounter}</h1>
      <button onClick={handleRGB} >Play</button>
      <div className="colorBox" style={{ backgroundColor: `rgb(${correctRGBValue})` }}></div>
      <div className="buttonBox">
        {
          rgbValues.map((rgbvalue, idx) => {
            return (
              <button key={idx} onClick={() => checkAnswer(rgbvalue)} >{`rgb( ${rgbvalue})`}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
