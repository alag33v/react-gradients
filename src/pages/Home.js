import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GradientItem } from '../components';
import { deleteGradient } from '../redux/ducks/gradientDucks';
import { StyledHome } from '../styles/pages/StyledHome';

const Home = () => {
  const history = useHistory();
  const gradients = useSelector(({ gradient }) => gradient.gradients);
  const dispatch = useDispatch();

  const onEdit = id => {
    history.push(`/edit/${id}`);
  };

  const onDeleteGradient = id => {
    dispatch(deleteGradient(id));
  };

  const onForward = () => {
    history.push('/new');
  };

  return (
    <StyledHome>
      <ul className='gradient-item__wrapper'>
        {gradients &&
          gradients.map(gradient => (
            <GradientItem
              gradient={gradient}
              onEdit={onEdit}
              onDeleteGradient={onDeleteGradient}
              key={`${gradient.id}`}
            />
          ))}
      </ul>
      <button className='btn' onClick={onForward}>
        New
      </button>
    </StyledHome>
  );
};

export default Home;
