import { Component } from 'react';
import './card.styles.css';

class Card extends Component {
  render() {
    const { id, first_name, last_name, email } = this.props.monster;
    return (
      <div className='card'>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={first_name}
        />
        <h2>
          {first_name} {last_name}
        </h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
