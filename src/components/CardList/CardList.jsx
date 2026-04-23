import Card from '../Card/Card';

function CardList({ cards }) {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
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