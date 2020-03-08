import React from 'react';
import Header from './components/header/Header'
import ArticleList from './components/article/ArticleList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <h2>Productos</h2>
        <ArticleList/>
      </main>
    </div>
  );
}

export default App;
