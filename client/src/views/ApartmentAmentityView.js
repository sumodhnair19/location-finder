import React, {Component} from 'react';

export default class ApartmentAmentityView extends Component {
  render() {
    const {apartment, limit = 4} = this.props;
    let amentities = [];
    apartment.amenities.map((item, index) => {
      if (index < limit) {
        amentities.push(<span key ={index} className="_1h9l4w0vvX6d56ZnJ3NLod"><i></i><span>{item}</span></span>);
      }
    });
    return amentities
  }
}
