import React from "react";
import { Container } from "react-bootstrap";
function LocalContainer({children},props) {
    // const {type,placeholder,className,name,id}=props

return(
    <Container>
    {children}

    </Container>
)
}
export default LocalContainer;