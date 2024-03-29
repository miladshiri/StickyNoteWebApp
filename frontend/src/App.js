import './App.css';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import NoteCreatePage from './pages/NoteCreatePage'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <div className="app-header">StickyNote App!</div>
          <div className="app-body">
            <Routes>
              <Route path="/" exact element={<NotesListPage />}></Route>
              <Route path="/note/:noteId/" element={<NotePage />}></Route>
              <Route path="/note/create/" element={<NoteCreatePage />}></Route>
            </Routes>
            

          </div>
          <div className="app-footer">Made by Love!</div>
        </div>

        </div>
      </Router>
  );
}

export default App;
