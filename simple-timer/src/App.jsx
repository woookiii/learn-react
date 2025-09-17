import { useState, useRef } from 'react'
import Timer from './components/Timer';

const App = () => {
  


  return ( 
    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>
      <Timer />
    </div>
  );
}
 
export default App;