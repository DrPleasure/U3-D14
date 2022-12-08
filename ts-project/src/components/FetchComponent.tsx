import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { SpaceArticle } from '../types'
import Article from './Article'

// if you're working with any kind of data coming from an external API or
// something not directly written from you, you need to shape the resources...
// create an interface for it! you can use https://app.quicktype.io/

const FetchComponent = () => {
  const [spaceArticles, setSpaceArticles] = useState<SpaceArticle[]>([])

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        'https://api.spaceflightnewsapi.net/v3/articles'
      )
      console.log('RESPONSE', response)
      if (response.ok) {
        let data = await response.json()
        console.log('DATA', data)
        setSpaceArticles(data)
      } else {
        console.log('error from the server')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Let's fetch some data!</h1>
      <ListGroup className="text-dark">
        {spaceArticles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </ListGroup>
    </div>
  )
}

export default FetchComponent