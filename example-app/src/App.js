import React from 'react';
import Header from './components/header/Header'
import ArticleList from './components/article/ArticleList'
import ArticleDetail from './components/article/ArticleDetail'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/article/:id" component={ArticleDetail} />
          <Route path="/">
            <main>
              <h2>Productos</h2>
              <ArticleList/>
            </main>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
