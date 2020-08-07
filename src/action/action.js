export const addItemToCart = (product) => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}

export const removeItemFromCart = (product) => {
    return {
        type: "REMOVE_ITEM",
        payload: product
    }
}

export const removeAllProduct = (cart) => {
    return {
        type: "REMOVE_ALL_PRODUCT",
        payload: cart
    }
}