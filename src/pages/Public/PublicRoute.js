import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from '@/_utils/error';
import { Layout, Home,Enchere, Detail, Tokens,Dash, Article} from '@/pages/Public';
import DetailArticle from './Articles/DetailArticle';
const PublicRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/encheres" element={<Enchere />}/>
        <Route path="/mes-encheres" element={<Detail/>}/>
        <Route path = "/tokens" element={<Tokens/>}/>
        <Route path = "/dashboard" element={<Dash/>}/>
        <Route path = "/article" element={<Article/>}/>
        <Route path="/detail/:id" element={<DetailArticle />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PublicRoute;