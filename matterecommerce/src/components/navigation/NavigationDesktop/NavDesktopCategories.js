import React from "react";
import Styled from 'styled-components';
import {SubCategoriesList} from "./SubCategoriesList";


const CategoriesWrapper = Styled.ul`
display: flex;
opacity: 1;
color:red
`;
const Category = Styled.li`
margin: 40px;
opacity: 0.8;
`;

export class NavDesktopCategories extends React.Component {
    render() {

        return (
            <>
                {this.props.navigationListItem.shopCategories.map((shopCategorie, id) =>
            <CategoriesWrapper key={id}>
                {shopCategorie.title}
                <Category>

                    <SubCategoriesList/>

                </Category>

            </CategoriesWrapper>
                    )}
                    </>
        )
    }
}