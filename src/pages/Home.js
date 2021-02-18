import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdModeEdit } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { deleteGradient } from '../redux/ducks/gradientDucks';
import { StyledHome, GradientItem } from '../styles/pages/StyledHome';

const Home = () => {
  const history = useHistory();
  const gradients = useSelector(({ gradient }) => gradient.gradients);
  const dispatch = useDispatch();

  const onEdit = id => {
    history.push(`edit/${id}`);
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
          gradients.map((gradient, index) => (
            <li
              className='gradient-item'
              key={`${gradient.firstColor}-${gradient.secondColor}-${index}`}
            >
              <GradientItem
                firstColor={gradient.firstColor}
                secondColor={gradient.secondColor}
              ></GradientItem>
              <span className='first-color'>{gradient.firstColor}</span>
              <span className='second-color'>{gradient.secondColor}</span>
              <MdModeEdit
                className='edit'
                onClick={() => onEdit(gradient.id)}
              />
              <IoIosCloseCircleOutline
                className='delete'
                onClick={() => onDeleteGradient(gradient.id)}
              />
            </li>
          ))}
      </ul>
      <button className='btn' onClick={onForward}>
        New
      </button>
    </StyledHome>
  );
};

export default Home;
