import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { UserForm } from "./components/UserForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-form" element={<UserForm />} />
    </Routes>
  );
}

export default App;
