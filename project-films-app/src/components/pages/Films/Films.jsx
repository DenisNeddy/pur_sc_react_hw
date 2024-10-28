import Search from '../../Search/Search.tsx';
import CardList from '../../CardsList/CardsList.tsx';
import styles from './Films.module.css'


const Films = () => {
 

    return (
        <div className={styles['films-page']}>
            <Search />
            <CardList /> 

        </div>
       
    )
}

export default Films