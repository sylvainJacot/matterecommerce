import React from "react";
import Styled from 'styled-components';
import {Navigation} from '../navigation/Navigation';
import {MatterLogo} from '../default/icons';
import {SubNavigation} from '../navigation/SubNavigation';
import {NavigationMobile} from "../navigation/NavigationDesktop/NavigationDesktop";

const HeaderWrapper = Styled.div`
display: flex;
align-items: center;
height: 80px;
background-color: lightblue;
`;

export class HeaderFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubNavOpen: true,
        };
    }
    toggleSubNav = () => {
        console.log("Hello");
        this.setState(
            {isSubNavOpen: !this.state.isSubNavOpen},
        );
    };

    render() {
        return (
            <>
                <HeaderWrapper>
                    <MatterLogo/>
                    <Navigation onMouseEnter={this.toggleSubNav} onMouseLeave={this.toggleSubNav}/>
                </HeaderWrapper>
                <SubNavigation SubNavigationActive={this.state.isSubNavOpen}/>
                {this.props.children}
             </>
        )
    }
}