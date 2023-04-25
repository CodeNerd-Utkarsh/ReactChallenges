import { useState } from 'react'
import './App.css'
import FolderView from "./components/FolderView"

function App() {
  const [count, setCount] = useState(0)
  const explorer = {
    name: "Root",
    isFolder: true,
    items: [
      {
        name: "public",
        isFolder: true,
        items: [
          {
            name: "Data",
            isFolder: true,
            items: [
              {
                name: "folderData.js",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            name: "index.html",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        name: "src",
        isFolder: true,
        items: [
          {
            name: "components",
            isFolder: true,
            items: [
              {
                name: "Folder.js",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            name: "App.js",
            isFolder: false,
            items: []
          },
          {
            name: "index.js",
            isFolder: false,
            items: []
          },
          {
            name: "styles.css",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        name: "package.json",
        isFolder: false,
        items: []
      }
    ]
  };

  return (
    <div className="app">
      <FolderView explorer={explorer} />
    </div>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)
//   // dummy data
//   const [moviename, setMoviename] = useState("")
//   const [dirName, setDirName] = useState("")
//   const [movieData, setMovieData] = useState([{
//     mName: "deadPool",
//     dName: "deadpool",
//   }, {
//     mName: "ironMan",
//     dName: "ironman"
//   }
//   ])
//   // console.log(movieData)
//   function handleSubmit(e) {
//     e.preventDefault()
//     let newData = {
//       mName: moviename,
//       dName: dirName
//     }
//     setMovieData([...movieData, newData].reverse())
//   }
//   function handleDelete(e,) {
//     // const latestData = movieData
//     // console.log(latestData.splice(idx, 1))
//     let x = e.target.getAttribute("removeitemmovie")
//     let y = e.target.getAttribute("removeitemdirector")
//     setMovieData(movieData.filter((ele) => {
//       return ((ele.mName !== x) && (ele.dName !== y))
//     }))
//   }
//   // console.log(movieData)
//   return (
//     <div className="app">
//       <h1>react task</h1>
//       {/* input section */}
//       <form >
//         <input type="text" placeholder='MovieName' onChange={(e) => setMoviename(e.target.value)} required />
//         <input type="text" placeholder='DirectorName' onChange={(e) => setDirName(e.target.value)} required />
//         <button onClick={handleSubmit} >Add Data</button>
//       </form>
//       {/* display section */}
//       {
//         movieData?.map((movie, idx) => {
//           return (
//             <div key={idx}>
//               <hr />
//               <p >{movie?.dName}</p>
//               <hr />
//               <p>{movie?.mName}</p>
//               <hr />
//               <button removeitemmovie={movie.mName} removeitemdirector={movie.dName} onClick={(e) => handleDelete(e)} type="button" >Delete</button>
//             </div>

//           )
//         })
//       }
//     </div>
//   )
// }

// export default App