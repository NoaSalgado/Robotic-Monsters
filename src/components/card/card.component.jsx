import './card.styles.css';

const Card = ({ monster }) => {
  const { id, first_name, last_name, email } = monster;
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
};

export default Card;
