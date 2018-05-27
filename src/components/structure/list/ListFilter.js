import React from "react";
import PropTypes from "prop-types";
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('MainStore')
@observer
class ListHeader extends React.Component {

    constructor(props) {
        super(props);
      }
    
    componentDidMount(){
        this.props.MainStore.setFilter(this.props.MainStore.rocketFilter);
        document.getElementById(this.props.MainStore.rocketFilter).classList.add("list__filter-active");
    }

    get availableRocketNames() {
        let rocketNames = [];
        rocketNames.push({id: 'all', name: 'all rockets'});
        rocketNames.push({id: 'falcon1', name: 'falcon 1'});
        rocketNames.push({id: 'falcon9', name: 'falcon 9'});
        rocketNames.push({id: 'falcon10', name: 'falcon 10'});
        rocketNames.push({id: 'falconheavy', name: 'falcon heavy'});
        return rocketNames;
      }

    @action.bound
    onItemClick = (event) => {
        const {MainStore} = this.props;
        const { name, id } = event.currentTarget;
        document.getElementById(MainStore.rocketFilter).classList.remove("list__filter-active");
        event.currentTarget.classList.add("list__filter-active");
        MainStore.setFilter(name);
    };

    render() {
        return (
        <div className="list__filter">
            <div className="list__filter-content">
                {this.availableRocketNames.map(option => (
                    <button className="list__filter-button" key={option.id} name={option.id} id={option.id} onClick={this.onItemClick}>
                        {option.name}
                    </button>
                ))}
            </div>
        </div>
        );
    }
}

export default ListHeader;