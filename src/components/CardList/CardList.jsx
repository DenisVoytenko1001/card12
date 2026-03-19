import Card from '../Card/Card';
import './CardList.css';

function CardList({ cards }) {
  return (
    <div className="list">
      {cards.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}
export default CardList;