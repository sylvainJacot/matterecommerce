import React from "react";
import Styled from "styled-components";
import {NavigationMobile} from './NavigationMobile/NavigationMobile';

const NavigationsWrapper = Styled.div`

`

export class Navigation extends React.Component {
    render() {
        return (
            <NavigationsWrapper>
                <NavigationMobile />
            </NavigationsWrapper>
        )
    }
}