/*
Text.js

Maps to wknd-events/components/content/text
*/

import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */
const TextEditConfig = {

    emptyLabel: 'Text',

    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};

/**
 * Text React component
 */
class Text extends Component {

    get richTextContent() {
        return <div dangerouslySetInnerHTML={{__html:  this.props.text}}/>;
    }

    get textContent() {
        return <div>{this.props.text}</div>;
    }

    render() {
        return this.props.richText ? this.richTextContent : this.textContent;
    }
}

MapTo('wknd-events/components/content/text')(Text, TextEditConfig);