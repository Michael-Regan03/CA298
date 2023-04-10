import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShowAllDegrees from './components/showalldegrees';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowAllDegrees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
