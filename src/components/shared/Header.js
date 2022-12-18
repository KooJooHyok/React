// src/components/shared/Header.js
// position 속성으로 헤더를 고정!
import styles from './Header.module.css';
import youtube_logo from '../../data/youtube_logo.png';
import { FiMenu } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';

// img를 사용하고, alt는 이미지가 출력 안될경우 글씨 출력
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.tab}>
        <FiMenu className={styles.icon} />
        <img src={youtube_logo} alt="로고" className={styles.logo} />
      </div>
      <div className={styles['center-tab']}>
        <input className={styles.input} />
        <IoSearchOutline className={styles['search-icon']} />
      </div>
      <div className={styles.tab}>
        <BsGrid3X3Gap className={styles.icon} />
        <HiOutlineDotsVertical className={styles.icon} />
      </div>
    </div>
  );
}

export default Header;