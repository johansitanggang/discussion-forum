import React, { useEffect } from 'react';
import { Spinner } from 'flowbite-react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddThreadPage from './pages/AddThreadPage';
import LeaderboardsPage from './pages/LeaderboardsPage';

function App() {
  const { authUser = null, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return (
      <div className="flex justify-center h-screen items-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header className="max-w-6xl mx-auto">
          <Navigation authUser={authUser} signOut={onSignOut} />
        </header>
        <main className="mb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="/createThread" element={<AddThreadPage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
