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
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center mb-6">
        Мої картки
      </h1>

      <CardList cards={cardsData} />

    </div>
  );
}

export default App;