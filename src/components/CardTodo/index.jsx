import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../redux/slices/todoSlices';

const CardTodo = ( {id, done, date, description} ) => {
    
    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(deleteTask({id}))
    }

    const handleCheck = () => {
        dispatch(toggleTask({id, done: !done}))
    }

    return (
        <Card className="mb-2" bg='warning' style={{width: '16rem'}}>
            <Card.Body>
                <Card.Subtitle style={{fontSize: '.9rem'}}><i className="bi bi-calendar-week"></i> {date}</Card.Subtitle>
                <Card.Text> {description} </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Button variant="danger" style={{fontSize: '.8em'}} onClick={handleRemove}><i className="bi bi-trash"></i> Eliminar</Button>
                    </Col>
                    <Col>
                        <Form.Check type="switch" id="custom-switch" onClick={handleCheck} label={ !done ? "Proceso" : "Completo" }/>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default CardTodo