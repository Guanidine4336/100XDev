import { useState } from 'react';
import './App.css';
import { RevenueCard } from './components/revenuecard';

function App() {
  

  return (
    <div className='grid grid-cols-4'>
      <RevenueCard title={"Amount pending"} amount={92350.5} orderCount={13}></RevenueCard>
    </div>
    
  );
}

export default App;
