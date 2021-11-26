import React, { useState } from 'react';
import InvitationPage from './containers/InvitationPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    //   </header>
    //   <p>{wording}</p>
    //   <button onClick={copyText}>Copy Text</button>
    //   <p>{notif}</p>
    //   <InvitationPage />
    //   <StartedPage />
    // </div>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<InvitationPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
