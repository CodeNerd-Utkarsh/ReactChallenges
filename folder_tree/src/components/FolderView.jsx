import React, { useState } from 'react'

function FolderView({ explorer }) {
    const [expand, setExpand] = useState(false
    )
    return (
        <div>
            <span onClick={() => setExpand(!expand)} >{explorer.name}</span>
            <br />
            <div style={{ display: expand ? "block" : "none", paddingLeft: 45 }} >
                {explorer?.items.map((explore) => (
                    <FolderView key={explore.name} explorer={explore} />
                ))}
            </div>
        </div>
    )
}

export default FolderView