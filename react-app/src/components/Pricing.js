import React, { useState} from "react";
import { Form, Row, Col } from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';


const Pricing = (props) => {
  const [ value, setValue ] = useState(0); 
    console.log(props)
  return (
    
    <Form>
      <Form.Group as={Row}>
        <Col xs="9">
          <RangeSlider 
            value={value}
            onChange={e => setValue(e.target.value)}
            min={0}
            max={100}
          />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Pricing;