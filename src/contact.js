import React, { Component } from 'react';


class ProductTile extends Component {
    constructor(props) {
        super(props);
    }
    clickHandler = () => {
        this.props.handler(this)
    }
    render() {
        return (
            <div className={'users-row__user'} onClick = {this.clickHandler}>
                <img src={ this.props.item.picture.thumbnail } alt=""/>
                <h3>
                    {  this.props.item.name.last + ' ' + this.props.item.name.first  }
                </h3>
            </div>
        )
    }

}
function ProductTile(props) {

}

export default ProductTile