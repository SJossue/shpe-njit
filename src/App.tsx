import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';

import About from './pages/About';
import BecomeMember from './pages/BecomeMember';
import BoardMembers from './pages/BoardMembers';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Resources from './pages/Resources';

import './App.css';

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<BoardMembers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/become-member" element={<BecomeMember />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
