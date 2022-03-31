import {Landing_02,Dashboard_02,Register_02,Error_02} from './pages';
import {BrowserRouter, Routes ,Route,Link} from'react-router-dom'


function App_02() {
  return 
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Dashboard_02/>}/>
        <Route path = '/landing' element={<Landing_02/>}/>
        <Route path = '/register' element={<Register_02/>}/>
        <Route path= '*' element={<Error_02/>}/>
      </Routes>
    </BrowserRouter>
  
}

export default App_02;
