import React from "react";
import Styled from 'styled-components';
import {navigationListItems} from '../../../constant/navigation';
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
            <CategoriesWrapper>
                {
                    navigationListItems[0].shopCategories.map((category) =>
                        <Category key={category.id} id={category.id}>
                            {category.title}

                            <SubCategoriesList
                                category={category.subCategory}
                            />

                        </Category>
                    )
                }
            </CategoriesWrapper>
        )
    }
}