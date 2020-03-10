import React from 'react'
import { Link } from 'react-router-dom'

class Article extends React.Component {
    render() {
        const { title, short_description, price, image, id } = this.props.article;
        return (
            <div className="article">
                <Link to={`/article/${id}`}>
                  <img src={image} alt={title}/>
                </Link>
                <div className="article-title">{title}</div>
                <p className="article-description">{short_description}</p>
                <p className="article-price">{price}</p>
            </div>
        )
    }
}

export default Article;
