export const CLICK_ITEM = 'CLICK_ITEM';
export const ACCENT_ITEM = 'ACCENT_ITEM';
export const INC_COUNT = 'INC_COUNT';

// let randomNumber = () => {
//     return Math.floor(Math.random() * 9 + 1);
// };
//
// let a = randomNumber();

const initialState = {
    countValue: 0,
    items: [
        {
            id: 1,
            isAccent: false
        },
        {
            id: 2,
            isAccent: false
        },
        {
            id: 3,
            isAccent: false
        },
        {
            id: 4,
            isAccent: false
        },
        {
            id: 5,
            isAccent: false
        },
        {
            id: 6,
            isAccent: false
        },
        {
            id: 7,
            isAccent: false
        },
        {
            id: 8,
            isAccent: false
        },
        {
            id: 9,
            isAccent: true
        },
    ],
    accentId: 1,
    clickId: 2,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case CLICK_ITEM:
        //     return {
        //         ...state,
        //         clickId: action.clickId,
        //     };
        case ACCENT_ITEM:
            return {
                ...state,
                items: state.items.map(m => {
                    if (m.id === action.a) {
                        return {
                            ...m, isAccent: true
                        }
                    } else {
                        return {
                            ...m,
                            isAccent: false
                        }
                    }
                })
            };
        case INC_COUNT:
            return {
                ...state,
                countValue: state.countValue + 1
            };
        default:
            return state;
    }
};
export default reducer;

export const incValue = () => {
    return ({type: INC_COUNT,})
};

export const accentValue = (a) => {
    return ({type: ACCENT_ITEM, a});
};




