import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Login from './components/login/Login';

function App() {


  const getHeader = () => {

  }
  const getPageDisplay = () => {
    return (
      <Suspense>
        <Router>
          <main>
            <Routes>
              <Route path='/delivery-manager-login' element={<Login />} />

            </Routes>
          </main>
        </Router>
      </Suspense>
    )
  }

  return (

    <div className='App'>
      {getHeader()}
      {getPageDisplay()}



    </div>


  );
}

export default App;
