const initialState = [
    { id: 0, name: "Raman Sharma", email: "email@email.com", phone: 1234567890 },
    { id: 1, name: "Test Name", email: "test@test.com", phone: 4567891230 },
  ];


export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state=[...state, action.payload];
            return state;
        
        case "EDIT_CONTACT":
            const updateState= state.map(contact => contact.id === action.payload.id ? action.payload : contact)
            state=updateState;
            return state;

        case "DELETE_CONTACT":
            const filterState=state.filter(contact=>contact.id === action.payload ? null : contact )
            state=filterState;
            return state;

        default:
            return state;
    
        }
  }

  