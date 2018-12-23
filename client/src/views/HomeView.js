import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchApartmentsList,fetchApartmentBasedOnFilter,fetchApartmentBasedOnSearch} from './../actions/apartmentsListActions';
import ApartmentTileView from "./ApartmentTileView";
import {filterList} from '../constants';
import {FormGroup,Button, ButtonToolbar, MenuItem,DropdownButton} from 'react-bootstrap';

class HomeView extends Component {
  componentDidMount() {
    this.props.fetchApartmentsList();
  }

  fetchSearchedList= (e) => {
    let searchedValue = this.refs.inputVal.value;
    if(searchedValue) {
      this.props.fetchApartmentBasedOnSearch(searchedValue);
    }
  }
  filterList = (e) => {
    let id = e.currentTarget.id;
    let apartmentListObj = this.props.apartmentsList.items ? this.props.apartmentsList.items : this.props.apartmentsList;
    if(id)
    this.props.fetchApartmentBasedOnFilter(id,apartmentListObj);
  }


  render() {
    const {apartmentsList =[]} = this.props;
    let listOfApartments = apartmentsList.length> 0 ? apartmentsList : apartmentsList.items;
    let noData = typeof listOfApartments === 'undefined' ? true: false;
    if (!Object.keys(apartmentsList).length) {
        return <div>Loading...</div>
    }

    return (
      <div className="container-list container-lg clearfix">
      <div className="col-12 float-left">
        <div className="view-apartment-list">

        <FormGroup>
            <input type="text" placeholder="Search location here... For e.g Berlin,Cologne,Stuttgart" className="form-control" ref= "inputVal"/>
            <Button type="submit" onClick = {()=>{this.fetchSearchedList()}}>Search</Button>
      </FormGroup>

            <ButtonToolbar>
            <DropdownButton title="Filter By" id="dropdown-size-medium">
              {filterList.map((value, index)=> (   <MenuItem key = {index} id = {value.id} onClick = {(e)=>{this.filterList(e)}} eventKey={index}>{value.val}</MenuItem> ))}
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
  apartmentsList: state.apartmentsList.apartments
});

export default connect(mapStateToProps, {fetchApartmentsList, fetchApartmentBasedOnSearch,fetchApartmentBasedOnFilter})(HomeView)
