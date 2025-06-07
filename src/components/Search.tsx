import type { searchProps} from "../types/DefaultTypes.tsx";
import styles from '../styles/module/Search.module.scss'

const Search = ({query, setQuery}: searchProps) => {


    return (
        <div
            className={styles.searchWrapper}
        >
            <input
                type="text"
                value={query}
                className={styles.searchInput}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск..."
            />
        </div>
    )
}

export default Search;