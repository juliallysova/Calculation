import { useState } from 'react';
import './App.css';
import { Col, Row, Flex, Typography } from 'antd';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
const { Title } = Typography;

function App() {

const [expression, setExpression] = useState <string> ('')

// изменение знака
  
  const handlePlusMinus = () => {
    let result = eval(`-1 * (${expression})`);
    setExpression(String(result));
  }

  // очищает 
  const handleDelete = ()=> {
    setExpression('')
  }

  const fu = (value:string) =>{
      setExpression([...expression, value].join(''))
  }

  const calculateFu = () => {
    setExpression(String(eval(expression)))
  }

  const handleDot = (dot:string) => {
    setExpression(expression + dot)
  } 
    
  return (
    <>
    <Title>
      <div className='expression'>{expression}</div>
    </Title>
    <Flex gap="5" align="center" justify='center'>
      <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={()=> handleDelete()}>AC</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={()=> handlePlusMinus()}>+/-</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={()=> fu('%')}>%</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={()=> fu('/')}>/</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={() => fu('7')}>7</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={() => fu('8')}>8</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={() => fu('9')}>9</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={()=> fu('*')}>x</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={() => fu('4')}>4</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={() => fu('5')}>5</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={() => fu('6')}>6</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={()=> fu('-')}>-</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={() => fu('1')}>1</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={() => fu('2')}>2</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={() => fu('3')}>3</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={()=> fu('+')}>+</button>
      </Col>
      <Col className="gutter-row" span={12}>
        <button style={style} onClick={() => fu('0')}>0</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={()=> handleDot('.')}>,</button>
      </Col>
      <Col className="gutter-row" span={6}>
        <button style={style} onClick={()=> calculateFu()}>=</button>
      </Col> 
    </Row>
    </Flex>
    </>
  )
}

export default App
