import shopCategoriesInitialState from "./ShopCategories.initialstate";

function shopCategoriesReducer (
    state = shopCategoriesInitialState,
    action = {}
) {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopCategoriesReducer;