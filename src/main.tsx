import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";

import { CustomRoutes } from './types.ts';
const routes = import.meta.glob('./modules/**/routes.tsx', { eager: true }) as Record<string, {default : CustomRoutes}>;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App routes={Object.values(routes).map(r => r.default)}/>} children={
          [
            Object.values(routes).map((route) => {
              return <Route key={route.default.path} path={route.default.path} element={<route.default.element />} />
            })
          ]
        }/>
       
      </Routes>   
     </BrowserRouter>
  </StrictMode>,
)
