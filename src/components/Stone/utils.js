import STONE_XS from '../../assets/stones/stone_extra_small.png';
import STONE_S from '../../assets/stones/stone_small.png';
import STONE_M from '../../assets/stones/stone_medium.png';
import STONE_L from '../../assets/stones/stone_large.png';
import STONE_XL from '../../assets/stones/stone_extra_large.png';

export const AllStones = ['xs', 's', 'm', 'l', 'xl'];

export const getStoneImage = (size) => {
  switch (size) {
    case 'xs':
        return STONE_XS
    case 's':
      return STONE_S
    case 'm':
      return STONE_M
    case 'l':
      return STONE_L
    case 'xl':
      return STONE_XL
    default:
      break;
  }
};

export const getStoneWidth = (size) => {
  switch (size) {
    case 'xs':
      return '100px'
    case 's':
      return '130px'
    case 'm':
      return '180px'
    case 'l':
      return '230px'
    case 'xl':
      return '250px'
    default:
      return '250px'
  }
};

export const getStoneToolbarSize = (size) => {
  switch (size) {
    case 'xs':
      return '35px'
    case 's':
      return '45px'  
    case 'm':
      return '55px'  
    case 'l':
      return '66px'  
    case 'xl':
      return '85px'  
    default:
      break;
  }
}