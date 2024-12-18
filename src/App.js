import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact/>
          <Route path="/:userId/places" element={<UserPlaces />} exact/>
          <Route path="/places/new" element={<NewPlace />} exact/>
          {/* <Redirect to="/" /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
