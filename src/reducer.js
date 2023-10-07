export const initialState = {
    cart: [],
    products: [],
    tempCart: [],
    email: [],
    address: [],
    user: null,
}

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0)

export const getTempTotal = (tempCart) =>
    tempCart?.reduce((amount, item) => item.price + amount, 0)

// can implement later
// export const getAmountOfProduct = (cart) =>


const reducer = (state, action) => {
    console.log("action",action)
    switch (action.type) {
        case 'add_to_address':
            return {
                ...state,
                address: [...state.address, action.item]
            }
        case 'set_user':
            return {
                ...state,
                user: action.user
            }
        case 'add_to_email':
            return {
                ...state,
                email: action.item,
            };
        case 'add_to_cart':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'add_to_products':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case 'remove_from_cart':
            
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id ===action.id
            );
            let newCart = [...state.cart];
            if (index>= 0) {
                newCart.splice(index, 1);
            }else{
                console.warn(
                    'Cant remove from cart, because its not in the cart.'
                )
            }

            return {
                ...state,
                cart: newCart
            }

        case 'uncheck_product':
            const i = state.cart.findIndex(
                (cartItem) => cartItem.id ===action.id
            );
            let newC = [...state.cart];
            if (i>= 0) {
                newC[i].checked = action.checked
            }else{
                console.warn(
                    'Cant remove from cart, because its not in the cart.'
                )
            }

            return {
                ...state,
                cart: newCart
            }
        case 'add_to_tempCart':
            return {
                ...state,
                tempCart: [...state.tempCart, action.item],
            };
        case 'remove_from_tempCart':
        
            const idx = state.tempCart.findIndex(
                (cartItem) => cartItem.id ===action.id
            );
            let newTemp = [...state.tempCart];
            if (idx>= 0) {
                newTemp.splice(idx, 1);
            }else{
                console.warn(
                    'Cant remove from temp, because its not in the temp.'
                )
            }

            return {
                ...state,
                tempCart: newTemp
            }
        
        
        case 'choose_quantity':
            const ind = state.cart.findIndex(
                (cartItem) => cartItem.id ===action.id
            );
            let nC = [...state.cart];
            if (ind>= 0) {
                nC[ind].value = action.value
            }else{
                console.warn(
                    'Cant change value from cart, because its not in the cart.'
                )
            }

            return {
                ...state,
                cart: nC
            }
            // case 'change_price_2':
            //     const ip = state.cart.findIndex(
            //         (cartItem) => cartItem.id ===action.id
            //     );
            //     let newb = [...state.cart];
            //     if (ip>= 0) {
            //         nC[ip].price *= 2 
            //     }else{
            //         console.warn(
            //             'Cant change value from cart, because its not in the cart.'
            //         )
            //     }
    
            //     return {
            //         ...state,
            //         cart: newb
            //     }
    
        default:
            return state;
    }
};

export default reducer