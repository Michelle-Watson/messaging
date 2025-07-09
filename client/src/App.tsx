// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Chat from "./pages/Chat/Chat";
import SocketioChat from "./pages/SocketioChat/SocketioChat";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* <Header /> */}
        <header className="app-header">
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link">
                  WebSocket Chat
                </Link>
              </li>
              <li>
                <Link to="/socketio" className="nav-link">
                  Socket.IO Chat
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="SocketioChat" element={<SocketioChat />} />
            {/* <Route path="games" element={<Games />} />
            <Route path="games/:id" element={<GameDetailsWithPrices />} />
            <Route path="games/add" element={<GameAdd />} />
            <Route path="games/:id/edit" element={<GameEdit />} />
            <Route path="prices/add" element={<PricesAdd />} />
            <Route path="prices/:id/edit" element={<PricesEdit />} /> */}
          </Routes>
        </main>
        <footer className="footer">
          <p>© Chatter Inc. All Rights Reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
