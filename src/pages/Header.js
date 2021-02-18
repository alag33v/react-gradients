import { Link } from 'react-router-dom';
import { BiWinkSmile } from 'react-icons/bi';
import { StyledHome } from '../styles/pages/StyledHeader';

const Header = () => (
  <StyledHome>
    <Link className='header-left__wrapper' to='/'>
      <h2>Gradients</h2>
      <BiWinkSmile className='victory' />
    </Link>
    <svg className='circle' width='80' height='80'>
      <linearGradient id='linearColors' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='5%' stopColor='#01E400'></stop>
        <stop offset='25%' stopColor='#FEFF01'></stop>
        <stop offset='40%' stopColor='#FF7E00'></stop>
        <stop offset='60%' stopColor='#FB0300'></stop>
        <stop offset='80%' stopColor='#9B004A'></stop>
        <stop offset='100%' stopColor='#7D0022'></stop>
      </linearGradient>
      <circle
        r='34'
        cx='40'
        cy='40'
        strokeWidth='4'
        fill='none'
        stroke='url(#linearColors)'
      ></circle>
    </svg>
  </StyledHome>
);

export default Header;
