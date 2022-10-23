import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'containers/Home';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/example" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default MainRoutes;
