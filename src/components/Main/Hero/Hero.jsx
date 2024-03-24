import styles from './Hero.module.css';
import { IoSearchOutline } from 'react-icons/io5';

export const Hero = () => {
  return (
    <div className={styles.hero__wrapper}>
        <div className={styles.hero} style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 5px'}}>
            <div>
                <h1 className={styles.title}>
                    <span>D</span><span>r</span><span>i</span>ed <span>Fruits</span>
                </h1>
                <p className={styles.text}>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
                </p>
                <form className={styles.search} onSubmit={(e) => e.preventDefault()}>
                    <input 
                        placeholder='search'
                        type='text' 
                    />
                    <button><IoSearchOutline /></button>
                </form>
                <div className={styles.img}>
                    <img src="/img/main/hero1.png" alt="hero" />
                    <img src="/img/main/hero2.png" alt="hero" />
                </div>
            </div>
            <div className={styles.img__big}>
                <img src="/img/main/hero1.png" alt="hero" />
                <img src="/img/main/hero2.png" alt="hero" />
            </div>
        </div>
    </div>
    );
}
