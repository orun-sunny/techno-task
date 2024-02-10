import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserListPage from "./components/UserListPage";
import UserDetailsPage from "./components/UserDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/user/:userId" element={<UserDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
