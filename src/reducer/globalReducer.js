const initialState = {
    products : [
        {id: 1, image:"https://via.placeholder.com/300", name: "Lemari", stock:20, price: 1500000},
        {id: 2, image:"https://via.placeholder.com/300", name: "Meja", stock:30, price: 1000000},
        {id: 3, image:"https://via.placeholder.com/300", name: "Kursi", stock:50, price: 500000}
    ],
    cart: []
  }


  const globalReducer = (state = initialState, action) => {
      // buat variabel penampung untuk cart dan index item yang terupdate
    let updatedCart;
    let updatedItemIndex;
    switch(action.type){
        // jika case ADD_PRODUCT
        case "ADD_ITEM":
            // update cartnya mengambil data dari state/initialstate nya si cart, berarti []
            updatedCart = [...state.cart];
            // findIndex mengembalikan index elemen pertama dalam array yang lolos 1 2 3, jika tidak ada, mka findIndex akan return -1
            // console.log(updatedCart);
            updatedItemIndex = updatedCart.findIndex(s => s.id === action.payload.id);
            // jika jumlah 0 / [], push item, ditambah props quantity + 1
            if(updatedItemIndex < 0){
                updatedCart.push({...action.payload, quantity:1});
            } else {
                // jika item yang sama di tambahkan ke cart, maka jumlah quantity nya ++ (per click)
                let updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                // console.log(updatedItemIndex);
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
                console.log(updatedCart[updatedItemIndex] = updatedItem);
            }
            return {...state, cart: updatedCart};
        case "REMOVE_ITEM":
            updatedCart = [...state.cart];

            updatedItemIndex = updatedCart.findIndex(s => s.id === action.payload.id);

            let updatedItem = {
                ...updatedCart[updatedItemIndex]
            };
            // console.log(updatedItemIndex);
            updatedItem.quantity--;
            if(updatedItem.quantity <= 0) {
                updatedCart.splice(updatedItemIndex, 1);
                console.log(updatedCart[updatedItemIndex]);
                // console.log(updatedCart);
            }else {
                updatedCart[updatedItemIndex] = updatedItem;

            }
            // console.log(updatedCart[updatedItemIndex] = updatedItem);
            return {...state, cart: updatedCart};
            
        case "REMOVE_ALL_PRODUCT": 
            return {...state, cart: []};
        default : 
            return state
    }
  }

  export default globalReducer;