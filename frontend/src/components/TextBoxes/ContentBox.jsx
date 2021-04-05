import React from 'react';

import { Container } from 'reactstrap';

export default function ContentBox({content}){
    return(
        <>
        <Container>
            <div className="mt-4">
                <p>{content}</p>
            </div>
        </Container>
        </>
    )
}