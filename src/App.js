import CardList from './components/CardList/CardList';

function App() {
  const cardsData = [
  {
    id: 1,
    title: "Карточка 1",
    description: "Опис першої картки",
    image: "https://picsum.photos/200/150"
  },
  {
    id: 2,
    title: "Карточка 2",
    description: "Опис другої картки",
    image: "https://picsum.photos/200/150"
  }
];

  return (
    <div>
      <h1>Мої картки</h1>
      <CardList cards={cardsData} />
    </div>
  );
}

export default App;

