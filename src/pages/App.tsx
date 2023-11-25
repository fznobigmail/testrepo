import React from 'react';
import 'src/pages/App.css';
import {BrowserRouter, Outlet} from "react-router-dom";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const  App =()=> {
  return (

        <DndProvider  backend={HTML5Backend}>
          <Outlet/>
        </DndProvider>



  );

}

export default App;
