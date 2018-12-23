import React , {Component} from 'react';
import {connect} from 'react-redux';
import {fetchApartmentsList,fetchApartmentBasedOnCountry} from './../actions/apartmentsListActions';
import {fetchLocations} from './../actions/locationListActions';

import ApartmentTileView from "./ApartmentTileView";
import {ButtonToolbar, MenuItem,DropdownButton} from 'react-bootstrap';

class LocationView extends Component {
  componentDidMount() {
    this.props.fetchLocations();
    this.props.fetchApartmentsList();
  }

  fetchCountryBasedList= (e) => {
    let id = e.currentTarget.id;
    if(id)
      this.props.fetchApartmentBasedOnCountry(id);

  }


  render() {
    const {apartmentsList =[], locationList = []} = this.props;
    let listOfApartments = apartmentsList.length> 0 ? apartmentsList : apartmentsList.items;
    let noData = typeof listOfApartments === 'undefined' ? true: false;
    if (!Object.keys(apartmentsList).length) {
        return <div>Loading...</div>
    }

    return (
      <div className="container-list container-lg clearfix">
      <div className="col-12 float-left">
        <div className="view-apartment-list">

            <ButtonToolbar>
            <DropdownButton title="Filter By Location" id="dropdown-size-medium">
              {locationList.map((value, index)=> (   <MenuItem key = {index} id = {value._id} onClick = {(e)=>{this.fetchCountryBasedList(e)}} eventKey={index}>{value.title}</MenuItem> ))}
              </DropdownButton>
            </ButtonToolbar>
        </div>
      </div>
      {listOfApartments &&  (<div className="col-12 float-left">
          <div className="view-apartment-list">
            {listOfApartments.map((item, index) => (
                <ApartmentTileView key={index} apartment={item} />
            ))}
          </div>
        </div>) }
        {noData && (<div className="col-12 float-left">
            <div className="view-apartment-list">
              {apartmentsList.apartments}
            </div>
          </div>)}
    </div>
    )
  }
}

const mapStateToProps = state => ({
  apartmentsList: state.apartmentsList.apartments,
  locationList : state.locationsList.locations
});

export default connect(mapStateToProps, {fetchApartmentsList,fetchApartmentBasedOnCountry, fetchLocations})(LocationView)
