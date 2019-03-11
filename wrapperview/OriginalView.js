import React from 'react';
import {
    requireNativeComponent,
    View
} from 'react-native';
import PropTypes from 'prop-types';
let iface ={
    name:'OriginalView',
    propTypes:{
        title:PropTypes.string,
        imageUri:PropTypes.string,
        checkBoxState:PropTypes.boolean,
        buttonContent:PropTypes.string,
        ...View.propTypes
    },
};

export default  requireNativeComponent(iface.name,iface);
