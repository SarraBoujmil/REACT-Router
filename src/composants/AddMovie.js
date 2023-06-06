import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const AddMovie = ({addMovie}) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("")
  const handleTitle=(e)=>{
    setTitle(e.target.value)
  }

  const [description, setDescription] = useState("")
  const handleDescription=(e)=>{setDescription(e.target.value)}

  const [rate, setRate] = useState("")
  const handleRate=(e)=>{setRate(e.target.value)}

  const [posterUrl, setPosterUrl] = useState("")
  const handlePosterUrl=(e)=>{setPosterUrl(e.target.value)}

  const handleMovie=()=>{
    let newMovie={
      title,
      description,
      rate,
      posterUrl

    }
    addMovie(newMovie)
  }

  return (
    <div>
        <Button on variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Film Title</Form.Label>
              <Form.Control onChange={handleTitle}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Film Description</Form.Label>
              <Form.Control onChange={handleDescription} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Film Rate</Form.Label>
              <Form.Control onChange={handleRate}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Film Poster</Form.Label>
              <Form.Control onChange={handlePosterUrl}/>
            </Form.Group>
          </Form>
          </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie