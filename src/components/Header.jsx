import styles from './Header.module.css';
import rocketlogo from '../assets/rocket_logo.png';

export function Header() {
    return (
        <div className={styles.header}>
            <img src={rocketlogo} alt="Logotipo de foguete" />
            <strong>to<span>do</span></strong>
        </div>
    )
}