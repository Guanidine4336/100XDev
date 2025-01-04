import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';

const Dashboard = React.lazy(()=> import('./components/dashboard'));
const Landing = React.lazy(()=> import('./components/landing'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar /> {/* Moved inside BrowserRouter */}
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"...loading"}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"...loading"}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate(); // Ensure it's inside BrowserRouter
  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard"); // Navigate to the correct path
        }}
      >
        Dashboard
      </button>

      <button
        onClick={() => {
          navigate("/"); // Navigate to the Landing page
        }}
      >
        Landing Page
      </button>
    </div>
  );
}

export default App;
