import React from "react";
import "./App.css";
import ProfileContainer from './components/Profile/ProfileContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Layout from "./components/Layout";
import NotFoundPage from "./components/NotFoundPage";

const App = (props) => {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <ProfileContainer
              state={props.state}
              dispatch={props.dispatch}
            />}/>
          <Route path="/dialogs" element={
            <DialogsContainer
              state={props.state}
              dispatch={props.dispatch}
            />}
          />
          <Route path="/users" element={
            <UsersContainer
              state={props.state}
              dispatch={props.dispatch}
            />}
          />
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
