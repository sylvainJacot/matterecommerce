import React from "react";
import Styled from 'styled-components';
import {Navigation} from '../navigation/Navigation';
import {MatterLogo} from '../default/icons';
import {SubNavigation} from '../navigation/SubNavigation';

const NavigationWrapper = Styled.div`
`;
const MainNavWrapper = Styled.div`
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
                <NavigationWrapper onMouseLeave={this.toggleSubNav}>
                <MainNavWrapper>
                    <MatterLogo/>
                    <Navigation onMouseEnter={this.toggleSubNav}/>
                </MainNavWrapper>
                <SubNavigation SubNavigationActive={this.state.isSubNavOpen}/>
                </NavigationWrapper>
                {this.props.children}
             </>
        )
    }
}