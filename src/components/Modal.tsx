import type { ModalProps } from "../types/DefaultTypes.tsx";
import styles from '../styles/module/ModalCard.module.scss'
import stylesReusable from '../styles/module/CardList.module.scss'
const ModalCard = ( {card, onClose, favorites, toggleFavorite} : ModalProps) => {

    return(
        <>
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.modalClose} onClick={onClose}> × </button>
                    <img src={card.image} alt={card.title} className={styles.modalImage}/>
                    <h3 className={styles.modalTitle}>{card.title}</h3>
                    <p className={styles.modalDescription}>{card.description}</p>
                    <button
                        onClick={() => toggleFavorite(card.id)}
                        className={stylesReusable.buttonFav}
                    >
                        {favorites.includes(card.id) ? 'Убрать из избранного' : 'Добавить в избранное'}
                    </button>
                </div>
            </div>
        </>
    )
}

export default ModalCard;