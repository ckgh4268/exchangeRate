import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './Component/Quiz.js';

const App = () => {
  return (
    <BrowserRouter>
      <>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={<Quiz/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;


