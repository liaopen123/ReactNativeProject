import {Component} from "react";
import {getValue} from "./repo";
import {on, remove} from "./event";
import React from "react";

export const connector = (name, _Component) => {


    class SimpleEventConnector extends Component {
        constructor(prop) {
            super(prop);
            this.state = {
                data: getValue(),
            };

            this.handler = ((data) => {
                this.setState({
                    data: data
                });
            }).bind(this);
        }


        componentDidMount() {
            on(name, this.handler);
        }

        componentWillUnmount() {
            remove(name, this.handler);
        }

        render() {
            const {data} = this.state;
            return <_Component data={data}/>
        }
    }


    return SimpleEventConnector;
};
