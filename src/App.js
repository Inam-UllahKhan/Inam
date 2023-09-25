import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Fifth_Task_HomePage } from './5th_Task/Fifth_Task_HomePage';
import { Fifth_Task_ServicePge } from './5th_Task/Fifth_Task_ServicePge';
import { Fifth_Task_ShopPage } from './5th_Task/Fifth_Task_ShopPage';
import { Fifth_Task_ContactPage } from './5th_Task/Fifth_Task_ContactPage';
import { Fifth_Error } from './5th_Task/Fifth_Error';
import { Fifth_NavBar } from './5th_Task/Fifth_NavBar';


function App() {
  return (
 <div className="5th-task user-select-none">
        <BrowserRouter>
        {/* <Fifth_NavBar /> */}
          <Routes>
            <Route path='/' element={<Fifth_Task_HomePage />} />
            <Route path='/service' element={<Fifth_Task_ServicePge />} />
            <Route path='/shop' element={<Fifth_Task_ShopPage />} />
            <Route path='/contact' element={<Fifth_Task_ContactPage />} />
            <Route path='*' element={<Fifth_Task_HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
