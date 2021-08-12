import React from 'react';
import Boxable from './Boxable';
import Box from './Box';
import './DragThingsToBoxesDemo.css';


export default class DragThingsToBoxesDemo extends React.Component {
  render() {
    return (
      <div className="drag_things_to_boxes">
        <div className="things_to_drag">
          <Boxable className="imgt" targetKey="box" label="bananas" image="https://ik.imagekit.io/rjcjzgdentg/images/banana_SywxKP0XD.png"/>
          <Boxable className="imgt" targetKey="box" label="cheeseburger" image="https://ik.imagekit.io/rjcjzgdentg/images/burger_d_V_ClaO7.png"/>
          <Boxable className="imgt" targetKey="box" label="orange" image="https://ik.imagekit.io/rjcjzgdentg/images/orange_EUJkNNjM_.png"/>
          <Boxable className="imgt" targetKey="box" label="pickle" image="https://ik.imagekit.io/rjcjzgdentg/images/pickle_60xPXW6c8.png"/>
          <Boxable className="imgt" targetKey="box" label="gorilla" image="https://ik.imagekit.io/rjcjzgdentg/images/gorilla_gvp-Twd-5.png"/>
          <Boxable className="imgt" targetKey="box" label="puppy" image="https://ik.imagekit.io/rjcjzgdentg/images/dog_iitMCjbF7.png"/>
          <Boxable className="imgt" targetKey="box" label="cat" image="https://ik.imagekit.io/rjcjzgdentg/images/cat3_eM_oIPytm.png"/>
        </div>
        <div className="boxes">
          <Box className="centerbb" targetKey="box"/>
          <Box className="centerbb" targetKey="box"/>
          <h2>.......Animal..................................................Food.........</h2>
        </div>
        <div style={{clear: 'both'}}>&nbsp;</div>

      </div>
    )
  }
}