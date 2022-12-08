import { Row, Col } from "react-bootstrap";
import { SpaceArticle } from "../types";
import Card from 'react-bootstrap/Card';
import { format, parseISO } from 'date-fns';
import { Link } from "react-router-dom";
import ArticleDetails from "./ArticleDetails"




interface ArticleProps {
    article: SpaceArticle
}



const Article = ({ article }: ArticleProps) => {
    return (
        <Row className="flex-direction-row">
            <Col lg={4}>
        <Card>
        <Card.Img variant="top" src={article.imageUrl} />
        <Card.Body>
          <Card.Title>{article.title} <hr></hr></Card.Title>
          <Card.Text>
            {article.summary}
          </Card.Text>
          <div className="btn btn-primary"> Read Article </div>
          
        </Card.Body>
        <Card.Footer className="text-center">
            Published: {format(parseISO(article.publishedAt), "eee do MMM, yyyy")}{" "}
            at {format(parseISO(article.publishedAt), "KK:mm")}
            <hr />
        </Card.Footer>
        <p> Media -  {article.newsSite}</p>
      </Card>
      </Col>
      </Row>
    )
}
    
    
    export default Article