import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import Calculator from '../features/calculator/Calculator'
import Contacts from '../features/contacts/Contacts'
import Mileage from '../features/mileage/Mileage'
import Overlay from '../features/overlay/Overlay'
import Music from '../features/music/Music'
import NotFound from '../features/404/NotFound'

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={<Overlay />}>
        <Route path='/calculator' element={ <Calculator /> } />
        <Route path='/contacts' element={ <Contacts />} />
        <Route path='/mileage' element={ <Mileage /> } />
        <Route path='/music' element={ <Music /> } />
        <Route path='*' element={ <NotFound /> } />

  </Route>
));


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
