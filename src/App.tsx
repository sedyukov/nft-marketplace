import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="flex flex-row">
        <div className="min-w-[300px]">
          <Sidebar />
        </div>
        <div className="basis-10/12 bg-slate-300">2</div>
      </div>
    </div>
  );
}

export default App;
