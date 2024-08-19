import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ALayout, Dashbord } from '@/pages/Admin';

const AdminRouter = () => {
    return (
       <Routes>
           <Route  element={<ALayout/>}>
             <Route path="Dashbord" element={<Dashbord />}/>               
            </Route>
       </Routes>
    );
};

export default AdminRouter;