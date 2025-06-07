import {useState, useEffect} from "react";
import CardList from "./components/CardList.tsx";
import type {Card} from "./types/DefaultTypes.tsx";
import './styles/common/app.scss'
import './styles/main.scss'
import Search from "./components/Search.tsx";
import ModalCard from "./components/Modal.tsx";
import {useLocal} from "./hooks/useLocal.tsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Card[]>([]);
  const [query, setQuery] = useState<string>("");
  const [favorite, setFavorite] = useLocal<number[]>('favorites',[]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () =>{
      try{
        const data = await fetch("/cards.json");
        const json = await data.json();
        setData(json);
        setLoading(false);
      } catch (error){
        setError(error instanceof Error ? error.message : 'Неизвестная ошибка');
        setLoading(false);
      }
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorite((prev: number[]) =>
      prev.includes(id)
          ? prev.filter(favId => favId !== id)
          : [...prev, id]
    );
  };

  const filteredList: Card[] = data.filter((card) =>
  card.title.toLowerCase().includes(query.toLowerCase()) ||
  card.description.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p className="loadingText">Loading...</p>;
  if (error) return <p className="errorText">Ошибка: {error}</p>;

  return (
    <div
    className="container"
    >
      {selectedCard && (
          <ModalCard
              card={selectedCard}
              onClose={() => setSelectedCard(null)}
              favorites={favorite}
              toggleFavorite={toggleFavorite}
          />
      )}
     <Search
         query={query}
         setQuery={setQuery}
     />
      {filteredList.length === 0 && (
          <p className="noResultText">Ничего не найдено по вашему запросу.</p>
      )}
     <CardList
         data={filteredList}
         favorites={favorite}
         toggleFavorite={toggleFavorite}
         onCardClick={setSelectedCard}
     />
    </div>
  )
}

export default App
