import React from "react";
import { Container } from "./style";

type Button = {
    children: React.ReactNode
}

export default ({children}: Button) => {
    return(
        <Container>{children}</Container>
    )
}