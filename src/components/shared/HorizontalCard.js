// HorizontalCard
import moment from 'moment';
import 'moment/locale/ko';
import { ProcessViewCount } from '../../utils';
import styles from './HorizontalCard.module.css';
// 데이터의 조회수, 등록날짜, 썸네일 등 다양한 스타일 
// 중간중간 깨지는 영상이 있을 수 있음!

function HorizontalCard({ data }) {
  return (
    <a href={`https://www.youtube.com/watch?v=${data.id}`}>
      <div className={styles.card}>
        <img
          className={styles.thumbnail}
          src={data.thumbnail}
          alt={`${data.title}의 썸네일`}
        />
        <div className={styles.info}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.meta}>
            <a
              href={`https://www.youtube.com/channel/${data.channelId}`}
              className={styles.uploader}
            >
              {data.channelTitle}
            </a>
            <div className={styles.view}>
              {ProcessViewCount(data.viewCount)}
            </div>
            <div className={styles.time}>{moment(data.date).fromNow()}</div>
          </div>
          <div className={styles.desc}>{data.description}</div>
        </div>
      </div>
    </a>
  );
}
export default HorizontalCard;