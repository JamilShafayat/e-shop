import React from "react";
import { useSelector } from "react-redux";
import ShopCategories from "./ShopCategories";

export default function ShopCategoriesContainer() {
    const shopCategoriesArr = useSelector((state) => state.shopCategories);
    return <ShopCategories categories={shopCategoriesArr} />;
}