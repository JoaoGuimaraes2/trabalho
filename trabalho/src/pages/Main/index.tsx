import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Funcionario }  from '../../pages/Dashboard';
import { Telefonia } from '../../pages/Dashboard_Telefonia';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/users' element={<Funcionario/>}>
        
      </Route>
      
      <Route path='/lines' element={<Telefonia/>}></Route>
    </Routes>
  );
}

export default Main;