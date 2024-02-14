
import './App.css';
import React 
from 'react';
import Login from './components/Login';
import { BrowserRouter,Route, Routes} from "react-router-dom";
// import SignUp from './components/SignUp';
// import Scholarship from './components/Scholarship';
// import UpdateOrder from './components/UpdateOrder';
// import ViewScholarship from './components/ViewScholarship';
// import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
                   <Routes>
                   <Route exact path="/" element={<Login/>}/>
                    {/* <Route exact path="SignUp" element={<SignUp/>}/> 
                    <Route exact path="ViewScholarship" element={<ViewScholarship/>}/>
                    <Route exact path="UpdateOrder" element={<UpdateOrder/>}/>
                    <Route exact path="Scholarship" element={<Scholarship/>}/>
                    <Route exact path="contactUs" element={<ContactUs/>}/>
                     */}
                   </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
