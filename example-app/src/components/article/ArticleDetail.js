import React from 'react'
import articles from '../../data.js'

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
              <img src="" alt=""/>
              <div className="article-detail-body">
                <p>{this.state.article.name}</p>
              </div>
            </React.Fragment>
        }
      </div>
    )
  }
}

export default ArticleDetail
