import { useState } from "react";
import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./components/context/DataContext";
import Error404 from "./Error404";
import { Form } from "./components/Form";

import './App.css'

function App() {

  const [auth, setAuth] = useState(false);


  const Private = () => (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/cart" element={<CartContent />} />
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
    )
    const Public = () => (
      <DataProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Form setAuth={setAuth} />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
      )
   
      console.log('auth::',auth)

    return (
      <>
      { auth ?<Private/> :<Public/> }
      </>
    );
}
export default App;
