import { useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CardTodo from '../CardTodo'

const ListTodo = () => {

  const todos = useSelector( (state) => state.task )

  return (  
    <Row>
      {
       todos && todos.map(
          (item) => (
            <Col key={item.id} >
              <CardTodo id={item.id} done={item.done} date={item.date} description={item.description}/>
            </Col>
          ) 
        )
      }
    </Row>
  )  
}

export default ListTodo