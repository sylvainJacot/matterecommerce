import React from "react";
import Styled from "styled-components";
import {NavigationDesktop} from './NavigationDesktop/NavigationDesktop';

const NavigationsWrapper = Styled.div`

`

export class Navigation extends React.Component {
    render() {
        const {onMouseEnter,onMouseLeave} = this.props;
        return (
            <NavigationsWrapper>
                <NavigationDesktop onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
            </NavigationsWrapper>
        )
    }
}