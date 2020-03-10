import React from 'react'
import Article from './Article'
import articles from '../../data.js'
import './article.css';

class ArticleList extends React.Component {
    render() {
        return (
            <div className='article-wrapper'>
                {articles.map(article => {
                    return (
                        <Article
                            key={article.id}
                            article={article}
                        />
                    )})
                }
            </div>
        )
    }
}

export default ArticleList;
