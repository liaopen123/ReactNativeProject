import React from 'react';
import {
    requireNativeComponent,
    View
} from 'react-native';
import PropTypes from 'prop-types';
let iface ={
    name:'KenBurnsView',
    propTypes:{
        imgSource:PropTypes.string,
        ...View.propTypes
    },
};

export default requireNativeComponent('KenBurnsView',iface);



