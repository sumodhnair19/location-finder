import React, {Component} from 'react';
import ApartmentAmentityView from "./ApartmentAmentityView";

export default class ApartmentTileView extends Component {

  render() {
    const {apartment} = this.props;
    const {price = '', size = '', owner = {}} = apartment;
    const url = `/apartments/${apartment._id}`;
    const image = `http://localhost:5000/images/apartments/${apartment.images[0]}`;

    return (
      <div className="view-apartment-item">
        <div className="view-apartment-item-content">
          <a target ="_blank" href={url}>
            <div className="_3im4pDXrDfzNRT2AlvLfD6">
              <div className="listing-image">
                <div className="media-cover" style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                <div className="_3Ts2_4uirKsrlm2Qb57Avw"></div>
                <div className="Ok22VaqPDW9x1uaR46cRO _3ORDzmMDnpzTXIIXjJsRw7">
                  <span>{price} €</span>
                  <span className="_17Hci6D5EewOTY42eIXhPy">
                    <span className="_2GcdOjvYR400SpIsNOxzGK">/</span>
                    <span>Monat</span>
                  </span>
                </div>
              </div>
              <div className="listing-details-container">
                <div className="listing-details">
                  <div className="_3-hUUH6d0vGND3vUzaybD0 Lsdn2hC-tehVod76x4HzK">
                    <span className="text-truncate text-first-capitalize _1NES5HH5UNUjUVK5_-d-AG">{apartment.title}</span>
                  </div>
                  <div className="_17om8IEGFeu2W2TBOJ6xQs Lsdn2hC-tehVod76x4HzK text-truncate">
                    <span>{owner.email}</span>
                  </div>
                  <div className="_17om8IEGFeu2W2TBOJ6xQs Lsdn2hC-tehVod76x4HzK text-truncate">
                    <span>{size} m²</span>
                  </div>
                  <div className="f9YmKwMaSOdtYnk_Qz-iT">
                    <div className="dVjtBg_ihJ63cZB8GwE0g text-truncate">
                      <ApartmentAmentityView apartment={apartment} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  }
}
