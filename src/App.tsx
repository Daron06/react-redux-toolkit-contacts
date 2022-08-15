import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { useUsersQuery } from './redux/services/usersApi';

function App() {
  const { data, isLoading } = useUsersQuery(null);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/contacts" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
