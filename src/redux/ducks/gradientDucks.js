// Actions
const NEW_GRADIENT = 'gradient/NEW_GRADIENT';
const EDIT_GRADIENT = 'gradient/EDIT_GRADIENT';
const DELETE_GRADIENT = 'gradient/DELETE_GRADIENT';

// Reducer
const initialState = {
  gradients: [
    { id: '0', firstColor: '#e66465', secondColor: '#9198e5' },
    { id: '1', firstColor: '#23c27a', secondColor: '#395580' },
    { id: '2', firstColor: '#9198a3', secondColor: '#1c1b1b' }
  ]
};

const gradientDucks = (state = initialState, action) => {
  switch (action.type) {
    case NEW_GRADIENT:
      return { ...state, gradients: [...state.gradients, action.payload] };
    case EDIT_GRADIENT:
      return {
        ...state,
        gradients: [
          ...state.gradients.filter(
            gradient => gradient.id !== action.payload.id
          ),
          action.payload
        ]
      };
    case DELETE_GRADIENT:
      return {
        ...state,
        gradients: state.gradients.filter(
          gradient => gradient.id !== action.payload
        )
      };
    default:
      return state;
  }
};

// Action Creators

export const addNewGradient = obj => ({
  type: NEW_GRADIENT,
  payload: obj
});

export const editGradient = obj => ({
  type: EDIT_GRADIENT,
  payload: obj
});

export const deleteGradient = id => ({
  type: DELETE_GRADIENT,
  payload: id
});

export default gradientDucks;
