import React from 'react'

const ArticleCard = ({article, clickHandler}) => {
  return (
    <div data-testid="article-card-div" className='article' onClick={() => clickHandler(article.source_url)}>
        <div>
            <img
                src={article.thumbnail}
                alt={article.headline}
            />
        </div>
        <div>
            <h2>{article.headline}</h2>
        </div>
    </div>
  )
}

export default ArticleCard;
