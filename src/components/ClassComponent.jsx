import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('contructor ->');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render ->');
        return <div>Lifecycle methods</div>;
        /**
         * -마운트
         * constructor ->
         * render ->
         * componentDidMount
         *
         * -업데이트
         * render ->
         * componentDidUpdate
         *
         * -마운트 해제
         * componentWillUnmount
         */
    }
}

export default ClassComponent;
