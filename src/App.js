import Home from './components/Home/Home' ;
import CartContent from './components/CartContent/CartContent';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import DataProvider from './components/context/DataContext';
function App ()  {
  return (
    <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}> </Route>
      <Route path='/cart' element={<CartContent/>}/>
    </Routes>
    </BrowserRouter>
    </DataProvider>
  );
}
 
export default App;

