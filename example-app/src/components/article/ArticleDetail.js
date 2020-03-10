import React from 'react'
import articles from '../../data.js'
import './css/article_detail.css'
import { Link } from "react-router-dom";

class ArticleDetail extends React.Component {
  state = {
    article: null
  }

  getArticle() {
    this.setState({
      article: articles.find(article => {
        return article.id === this.props.match.params.id
      })
    })
  }

  componentDidMount() {
    this.getArticle();
  }

  render() {
    return (
      <div className="article-detail">
        {
          this.state.article &&
            <React.Fragment>
              <div className="article-detail-image">
                <img src={`/${this.state.article.image}`} alt={this.state.article.name}/>
              </div>
              <div className="article-detail-body">
                <h1>{this.state.article.name}</h1>
                <hr/>
                <div className="article-detail-reviews">
                  <p className="text-muted">0 Reviews</p>
                  <p className="text-muted">0 Comments</p>
                </div>
                <h2>{this.state.article.price}</h2>
                <p>{this.state.article.description}</p>
                <button className="btn article-detail-btn">Add to cart</button>
                <Link to="/">
                  <button className="btn article-detail-btn">Go home</button>
                </Link>
              </div>
            </React.Fragment>
        }
      </div>
    )
  }
}

export default ArticleDetail
