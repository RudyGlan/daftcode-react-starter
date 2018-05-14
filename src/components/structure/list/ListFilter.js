import React from "react";
import PropTypes from "prop-types";

class ListHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          currentItem: 'all',
        };
      }

    onItemClick = (event) => {
        const {onChange} = this.props;
        const { name, id } = event.currentTarget;
        event.currentTarget.classList.add("list__filter-active");
        document.getElementById(this.state.currentItem).classList.remove("list__filter-active");
        this.setState({currentItem: id});
        onChange(name);
    };

    render() {
        const {options, onChange} = this.props;
        return (
        <div className="list__filter">
            <div className="list__filter-content">
                <button className="list__filter-button list__filter-active" key={'allrockets'} name={'all'} id={'all'} onClick={this.onItemClick}>
                    {`all rockets`}
                </button>
                {options && options.length > 0 ?
                    options.map(option => (
                    <button className="list__filter-button" key={option} name={option} id={option} onClick={this.onItemClick}>
                        {option}
                    </button>
                )) : null }
            </div>
        </div>
        );
    }
}

export default ListHeader;