import { Row } from "react-bootstrap";
import { SpaceArticle } from "../types";
import Card from 'react-bootstrap/Card';



interface ArticleProps {
    article: SpaceArticle
}



const Article = ({ article }: ArticleProps) => {
    return (
        <Row lg={6}>
        <Card>
        <Card.Img variant="top" src={article.imageUrl} />
        <Card.Body>
          <Card.Title>{article.title} <hr></hr></Card.Title>
          <Card.Text>
            {article.summary}
          </Card.Text>
          <div className="btn btn-primary"> Read Article </div>
        </Card.Body>
      </Card>
      </Row>
    )
}
    
    
    export default Article