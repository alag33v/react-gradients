import { MdModeEdit } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { StyledGradientItem } from '../styles/components/StyledGradientItem';

const GradientItem = ({ gradient, onEdit, onDeleteGradient }) => (
  <li className='gradient-item'>
    <StyledGradientItem
      firstColor={gradient.firstColor}
      secondColor={gradient.secondColor}
    />
    <span className='first-color'>{gradient.firstColor}</span>
    <span className='second-color'>{gradient.secondColor}</span>
    <MdModeEdit className='edit' onClick={() => onEdit(gradient.id)} />
    <IoIosCloseCircleOutline
      className='delete'
      onClick={() => onDeleteGradient(gradient.id)}
    />
  </li>
);

export default GradientItem;
