import React, { useState } from 'react'

function ParkingSlot() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    const [slots, setSlots] = useState(8)
    const [booked, setBooked] = useState([])
    function handleClick(e) {
        const selectedSlot = Number(e.target.firstChild.data)
        if (!booked.includes(selectedSlot)) {
            setBooked((prev) => [...prev, selectedSlot])
            setSlots((prev) => prev - 1)
        }
        else {
            // console.log(booked.includes(selectedSlot))
            (slots > 8 ? setSlots(8) : setSlots(slots + 1))
            const newArr = [...booked.filter((ele) => (ele !== selectedSlot))]
            setBooked(newArr)
        }
    }
    // console.log(booked)
    return (
        <div className='parkingSlot' >
            <h2>Task02:- </h2>
            <p>Create a Parking Slots of 8, and display the count of available parking slots. When a user
                clicks on parking slot that should be selected and the parking values should be updated, User
                can able to select multiple slots or unselect the selected slots and update the value of available
                slots.</p>
            <div className="container">
                <h1 className="container">
                    No. of slots:- {slots}
                    <br />
                    Booked Slots:- {
                        booked.map((ele) => `| ${ele} `)
                    }
                </h1>
                <div className="grid" onClick={handleClick} >
                    {
                        arr.map((ele, idx) => (
                            <button key={idx} >{ele}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ParkingSlot