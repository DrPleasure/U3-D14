import React from "react"
import bootstrap from "react-bootstrap"
import { Jumbotron, Container } from "react-bootstrap"
import spacepic from "../asseets/space.jpeg"


const Jumbotrono = () => {
    return(
<Jumbotron className="fluid" style={{ backgroundImage:`url(${spacepic})` }}>
  <Container>
    <h1>The Space Hub</h1>
    <p>
     Get your space fix here!
    </p>
  </Container>
  
</Jumbotron>
    )
}


export default Jumbotrono
