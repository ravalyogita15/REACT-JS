import Editpage from '../Components/Editpage'
import Navabar from '../Components/Navabar'
import Privatepage from '../Components/Privatepage'
import './App.css'
import AllRoutes from './routes/AllRoutes'


function App() {
  return (
    <>
      <Navabar />
      <AllRoutes /> 
      {/* <Editpage /> */}
    </>
  )
}
export default App
