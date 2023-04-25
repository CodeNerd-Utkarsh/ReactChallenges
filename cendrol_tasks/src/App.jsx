import './App.css'
import CreateDiv from "./components/CreateDiv"
import ParkingSlot from "./components/ParkingSlot"
import BreadCrumbs from "./components/BreadCrumbs"
function App() {


  return (
    <div className="app">
      <CreateDiv />
      <ParkingSlot />
      <BreadCrumbs />
    </div>
  )
}

export default App
