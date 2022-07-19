import React from "react";
import { Container } from "react-bootstrap";
function LocalContainerFluid({children},props) {
    // const {type,placeholder,className,name,id}=props

return(
    <Container fluid>
    {children}

    </Container>
)
}
export default LocalContainerFluid;