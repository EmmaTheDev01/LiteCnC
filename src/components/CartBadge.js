import Badge from 'react-bootstrap/Badge';
import {FaRegHeart} from 'react-icons/fa'

import './Cart.css'
function CartBadge() {
  return (
    <li className='cart-indicator' variant="secondary" >
    <FaRegHeart/><Badge className='badge-style text-danger'  bg='light'>0</Badge>
      <span className="visually-hidden">Selected products</span>
    </li>
  );
}

export default CartBadge;