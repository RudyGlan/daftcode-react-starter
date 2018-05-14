import React from "react";
import PropTypes from "prop-types";

class ListHeader extends React.Component {

    onItemClick = (event) => {
        const {onChange} = this.props;
        const { name } = event.currentTarget;
        onChange(name);
    };

    render() {
        const {options, onChange} = this.props;
        console.log(options);
        return (
        <div className="list__filter">
            <div className="list__filter-content">
                <button className="list__filter-button" key={'allrockets'} name={'all'} onClick={this.onItemClick}>
                    {`all rockets`}
                </button>
                {options && options.length > 0 ?
                    options.map(option => (
                    <button className="list__filter-button"key={option} name={option} onClick={this.onItemClick}>
                        {option}
                    </button>
                )) : null }
            </div>
        </div>
        );
    }
}

export default ListHeader;