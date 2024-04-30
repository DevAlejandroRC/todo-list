import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/slices/todoSlices'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Label from 'react-bootstrap/FloatingLabel'

const AddTask = () => {

  const [input, setInput] = useState()
  const dispatch = useDispatch()

  const handleAdd = (event) => {
    event.preventDefault()
    if( input.trim().length === 0 ) {
      alert("Una tarea no puede estar vacia :)")
      setInput("")
      return
    }
    dispatch(addTask(input))
    setInput("")
  }

  return (
    <Form className="mb-3">
      <Form.Group>
        <Label label="Describe tu tarea" className="mb-3">
          <Form.Control as="textarea" rows={3} cols={60} value={input} onChange={(event)=>setInput(event.target.value)}/>
        </Label>
      </Form.Group >
      <Button variant="primary" onClick={handleAdd}><i className="bi bi-pencil"></i> Agregar</Button>
    </Form>
  )
}

export default AddTask