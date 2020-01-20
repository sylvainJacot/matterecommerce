import React from "react";
import Styled from 'styled-components';
import {SubCategoryTypeList} from "./SubCategoryTypeList";

const SubCategories = Styled.ul`
color:blue;
`;


export class SubCategoriesList extends React.Component {
    render() {
        //const {category} = this.props;
        return (
            <>
                    <SubCategories>

                        <SubCategoryTypeList/>

                    </SubCategories>

                </>
        )
    }
}