import React from "react";
import {Navigation} from '../navigation/Navigation';

export class HeaderFooter extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                {this.props.children}
            </>
        )
    }
}