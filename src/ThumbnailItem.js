

import React, { PureComponent } from 'react'

export default class ThumbnailItem extends PureComponent {
    onItemClick = () => {
        this.props.onItemClick(this.props.index)
    }
    render() {
        return (
            <div onClick={this.onItemClick}>
                {this.props.choosed &&
                    <div>just title</div>
                }
                {!this.props.choosed &&
                    <div>title and number</div>
                }
            </div>
        )
    }
}
