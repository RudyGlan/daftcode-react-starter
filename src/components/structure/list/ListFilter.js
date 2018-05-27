import React from "react";
import PropTypes from "prop-types";
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('MainStore')
@observer
class ListHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          currentItem: 'all',
        };
      }
    
    componentDidMount(){
        document.getElementById('all').classList.add("list__filter-active");
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
        document.getElementById(this.state.currentItem).classList.remove("list__filter-active");
        event.currentTarget.classList.add("list__filter-active");
        this.setState({currentItem: id});
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