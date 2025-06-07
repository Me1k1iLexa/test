import type {CardListProps} from "../types/DefaultTypes.tsx";
import styles from '../styles/module/CardList.module.scss'



const CardList = ({data, favorites, toggleFavorite , onCardClick} : CardListProps ) => {


    return (
        <>
            <ul className={styles.cardList}>
                {data.map((item) => (
                    <li className={styles.cardItem} key={item.id} onClick={() => onCardClick(item)}>
                        <img src={item.image} alt={item.title} className={styles.cardImage}/>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(item.id)
                            }}
                            className={styles.buttonFav}
                        >
                            {favorites.includes(item.id) ? 'Убрать из избранного' : 'Добавить в избранное'}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CardList;