import React from 'react'

class Article extends React.Component {
    render() {
        const { title, description, price, image } = this.props;
        return (
            <div className="article">
                <div className="article-title">{title}</div>
                <p className="article-description">{description}</p>
                <p className="article-price">{price}</p>
                <img src={image} />
            </div>
        )
    }
}

export default Article;