
import HorizontalCard from '../shared/HorizontalCard';
import styles from './SubscriptionCard.module.css';

// card 클래스로 전체적인 형태를 잡아줌!
// a태그로 업로드 정보 공개
function SubscriptionCard({ data }) {
  return (
    <div className={styles.card}>
      <a
        className={styles.uploader}
        href={`https://www.youtube.com/channel/${data.channelId}`}
      >
        <img
          className={styles['channel-image']}
          src={data.channelThumbnail}
          alt={`${data.channelTitle} 프로필 사진`}
        />
        <div className={styles.name}>{data.channelTitle}</div>
      </a>
      <div className={styles.body}>
        <HorizontalCard data={data} />
      </div>
    </div>
  );
}

export default SubscriptionCard;