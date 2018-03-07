/**
 * EndScrollLoad组件
 *
 * Example:
 * <EndScrollLoad target="elementId" onLoad={() => {}}>
 *
 * </EndScrollLoad>
 *
 * Created by zhaofeng on 7/19/16.
 */
import React from 'react';

export default class EndScrollLoad extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        let targetName = this.props.target;
        let el = document.getElementById(targetName);
        el.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        let targetName = this.props.target;
        let el = document.getElementById(targetName);
        el.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        let targetName = this.props.target;
        let el = document.getElementById(targetName);
        if (el.scrollHeight - 50 <= el.offsetHeight + el.scrollTop) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.props.onLoad && this.props.onLoad();
            }, 300);
        }
    }

    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}