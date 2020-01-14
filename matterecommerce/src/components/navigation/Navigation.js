import React from "react";
import Styled from "styled-components";
import {NavigationMobile} from './NavigationMobile/NavigationMobile';

const NavigationsWrapper = Styled.div`

`

export class Navigation extends React.Component {
    render() {
        const {onMouseEnter,onMouseLeave} = this.props;
        return (
            <NavigationsWrapper>
                <NavigationMobile onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
            </NavigationsWrapper>
        )
    }
}