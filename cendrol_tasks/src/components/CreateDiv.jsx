import React, { useState } from 'react'

function CreateDiv() {
    const [width, setWidth] = useState(0)
    const [color, setColor] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        const divColor = e.target.divColor.value
        const divWidth = e.target.divWidth.value
        setColor(divColor)
        setWidth(divWidth)
    }
    return (
        <div className='createDiv ' >
            <h2>Task01:- </h2>
            <p>Create a two input fields one will be accepting of width and one will be accepting of color and
                design a rectangle with height of 200px and the width taken from the input field and the
                background color should be updated with as per the input field.</p>
            <form onSubmit={handleSubmit} className="container" >
                <label htmlFor="divWidth">Enter Div Width (px)</label>
                <input max={1300} id="divWidth" type="number" name="divWidth" required />
                <label htmlFor="divColor">Enter Div Color</label>
                <input id="divColor" type="text" name="divColor" required />
                <button type='submit' >Submit</button>
            </form>
            <div style={{ width: `${width}px`, height: "200px", background: color }} ></div>
        </div>
    )
}

export default CreateDiv