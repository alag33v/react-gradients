import gradientDucks, {
  addNewGradient,
  editGradient,
  deleteGradient
} from '../redux/ducks/gradientDucks';

const state = {
  gradients: [
    { id: '0', firstColor: '#e66465', secondColor: '#9198e5' },
    { id: '1', firstColor: '#23c27a', secondColor: '#395580' },
    { id: '2', firstColor: '#9198a3', secondColor: '#1c1b1b' }
  ]
};

const newGradient = {
  id: '3',
  firstColor: '#444',
  secondColor: '#000'
};

it('add a new gradient', () => {
  // preparation
  const action = addNewGradient(newGradient);

  // action
  const newState = gradientDucks(state, action);

  // check
  expect(newState.gradients.length).toBe(4);
});

it('correctness of incoming data', () => {
  // preparation
  const action = addNewGradient(newGradient);

  // action
  const newState = gradientDucks(state, action);

  // check
  expect(newState.gradients[3].id).toBe('3');
  expect(newState.gradients[3].firstColor).toBe('#444');
  expect(newState.gradients[3].secondColor).toBe('#000');
});

it('edit gradient', () => {
  // preparation
  const action = editGradient(state.gradients[2]);

  // action
  const newState = gradientDucks(state, action);

  // check
  expect(newState.gradients.length).toBe(3);
});

it('remove gradient', () => {
  // preparation
  const action = deleteGradient('1');

  // action
  const newState = gradientDucks(state, action);

  // check
  expect(newState.gradients.length).toBe(2);
});
