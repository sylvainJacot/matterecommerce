import React from "react";
import Styled from 'styled-components';
import {Navigation} from '../navigation/Navigation';
import {MatterLogo} from '../default/icons';

const HeaderWrapper = Styled.div`
display: flex;
align-items: center;
height: 80px;
background-color: lightblue;
`;

export class HeaderFooter extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <MatterLogo/>
                <Navigation />
                {this.props.children}
            </HeaderWrapper>
        )
    }
}