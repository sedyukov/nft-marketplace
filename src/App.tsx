import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="flex flex-row">
        <div className="basis-1/4">
          <Sidebar />
        </div>
        <div className="basis-3/4">2</div>
      </div>
    </div>
  );
}

export default App;
