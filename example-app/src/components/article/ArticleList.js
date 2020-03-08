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
                            title={article.name}
                            description={article.description} 
                            price={article.price} 
                            image={article.image}
                        />
                    )})
                }
            </div>
        )
    }
}

export default ArticleList;