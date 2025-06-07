export type Card = {
    id: number;
    title: string;
    image: string;
    description: string;
}

export type ToggleFavorite = (id: number) => void;

export type CardListProps = {
    data: Card[];
    favorites: number[];
    toggleFavorite: ToggleFavorite;
    onCardClick: (card: Card) => void;
};

export type searchProps = {
    query: string;
    setQuery: (query: string) => void;
}

export type ModalProps = {
    card: Card;
    onClose: () => void;
    favorites: number[];
    toggleFavorite: ToggleFavorite;
}
