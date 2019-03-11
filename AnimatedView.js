import React, {Component} from 'react';
import {
    Animated,
} from 'react-native';

export default class AnimatedView extends Component {


    constructor(props) {
        super(props);
        this.state = {
                fadeAnimation: new Animated.Value(0),
            };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnimation,
            {
                toValue: 1,
            }
        ).start();
    }


    render() {


        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: this.state.fadeAnimation,          // 将透明度指定为动画变量值
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}
