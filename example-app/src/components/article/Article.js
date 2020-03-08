import React from 'react'

class Article extends React.Component {
    render() {
        const { title, description, price, image } = this.props;
        return (
            <div className="article">
                <img src={image} />
                <div className="article-title">{title}</div>
                <p className="article-description">{description}</p>
                <p className="article-price">{price}</p>
            </div>
        )
    }
}

export default Article;