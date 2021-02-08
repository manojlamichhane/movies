import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem } from 'reactstrap';

function Apifetched(props) {
    const {
        buttonLabel,
        className
      } = props;
    const [api,setApi] = useState([
        {
            apiname:"GET DETAILS",
            apiaddress:"https://developers.themoviedb.org/3/movies/get-movie-details"
        },
        {
            apiname:"GET REVIEWS",
            apiaddress:"https://developers.themoviedb.org/3/movies/get-movie-details"
        },
        {
            apiname:"GET SIMILAR MOVIES",
            apiaddress:"https://developers.themoviedb.org/3/movies/get-movie-details"
        },
        {
            apiname:"GET NOW PLAYING",
            apiaddress:"https://developers.themoviedb.org/3/movies/get-movie-details"
        }

    ])
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    return (
    <div>
        <Button color="success" onClick={toggle}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Fetched API</ModalHeader>
        <ModalBody>
        <ListGroup>
            {
                api.map((item)=>{return(
                <div>
                <a href={item.apiaddress}><ListGroupItem>{item.apiname}</ListGroupItem></a>
                </div>      
                )})
            }
        </ListGroup>  
        </ModalBody>
        </Modal>      
    </div>
    );
}

export default Apifetched;