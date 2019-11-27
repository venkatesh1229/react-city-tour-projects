import React, { Component } from 'react'
import './tour.scss';

class Tour extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        });
    };

    render() {
        const { id, city, img, name, info } = this.props.tour;
        const { removeTour } = this.props.removeTour;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt=""></img>
                </div>
                <span className="close-btn">
                    <i className="i.fas.fa-window-close" />
                </span>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                </div>
                <h5>info<span onClick={this.handleInfo}><i className="fas fa-caret-square-down" /></span></h5>
                {this.state.showInfo && <p>{info}</p>}
            </article>
        )
    }
}

export default Tour
