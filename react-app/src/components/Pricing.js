import React, { useState} from "react";
import RangeSlider from 'react-bootstrap-range-slider';


const Pricing = (props) => {
  const [ value, setValue ] = useState(0); 

  return (
    <RangeSlider
      min={this.state.categorie.minprice}
      max={this.state.categorie.maxprice}
      value={value}
      onChange={changeEvent => setValue(changeEvent.target.value)}
    />
  );
}

export default Pricing;