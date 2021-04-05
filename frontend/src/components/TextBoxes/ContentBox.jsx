import React from 'react';

import { Container } from 'reactstrap';

export default function ContentBox({content}){
    return(
        <>
        <Container>
            <p>{content}</p>
        </Container>
        </>
    )
}