import React, {Component} from 'react';
import Img from "react-image";
import {MapTo} from '@adobe/cq-react-editable-components';

/**
 * Default Edit configuration for the Image component that interact with the Core Image component and sub-types
 *
 * @type EditConfig
 */
const ImageEditConfig = {

    emptyLabel: 'Image',

    isEmpty: function(props) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};

/**
 * Image React Component
 *
 */
class Image extends Component {

    get content() {
        return <Img src={this.props.src} alt={this.props.alt}/>
    }

    render() {
        return (<div className="Image">
            {this.content}
        </div>);
    }
}

MapTo('wknd-events/components/content/reactimage')(Image, ImageEditConfig);