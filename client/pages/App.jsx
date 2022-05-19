import React, { Suspense, useEffect, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import useStore from '../userStore';



const NavBar = lazy(() => import('../../components/NavBar'));
const Stats = lazy(() => import('../../components/Stats'));
const BookClubDetail = lazy(() => import('./BookClubDetail'));
const BookClubs = lazy(() => import('./BookClubs'));
const BookDetail = lazy(() => import('./BookDetail'));
const Home = lazy(() => import('./Home'));
const MyBooks = lazy(() => import('./MyBooks'));
const Search = lazy(() => import('./Search'));
const About = lazy(() => import('./Home/About'));

function NotFound() {
  return <>You have landed on a page that does not exist</>;
}

export default function App() {
  const { setUser } = useStore();

  useEffect(() => {
    const userData = localStorage.getItem('user_data');
    if (userData) {
      setUser(JSON.parse(userData));
    }

  }, []);


  return (
    <Suspense fallback={<>Loading ...</>}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookdetail" element={<BookDetail />} />
          <Route path="/bookclubs" element={<BookClubs />} />
          <Route path="/bookclubdetail" element={<BookClubDetail />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={NotFound} />
        </Routes>
        {/* Stretch: <LiveChat /> */}
      </Router>
    </Suspense>
  );
}
