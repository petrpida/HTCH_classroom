import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassroomDetailPage from "./routes/ClassroomDetailPage";
import HomePage from "./routes/HomePage";
import SubjectListPage from "./routes/SubjectListPage";
import StudentListPage from "./routes/StudentListPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route path="" element={<HomePage />} />
                  <Route path="classroomDetail" element={<ClassroomDetailPage />} />
                  <Route path="studentList" element={<StudentListPage />} />
                  <Route path="subjectList" element={<SubjectListPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
