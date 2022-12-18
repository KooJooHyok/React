import styles from './Home.module.css';
import Layout from '../components/shared/Layout';
import youtubeData from '../data/youtubeData.json';
import HomeFilter from '../components/home/HomeFilter';
import HomeCard from '../components/home/HomeCard';
import { useState } from 'react';
//홈 레이아웃 구성
const target = ['전체', 'Music', 'Entertainment', 'Comedy']; //각 해당하는 알고리즘 영상 등장

function Home() {
  const [filter, setFilter] = useState('전체');

  function mapFunc(data, index) {
    return (
      <HomeFilter
        filter={filter} // filter에서 받는 함수는 조건에 맞으면 True
        text={data}
        onClickFilter={function () { // 현재 필터의 값을 map으로 받은 배열의 요소로 설정하는 함수
          setFilter(data);
        }}
        key={`home-filter-${index}`}
      />
    );
  }

  function filterFunc(data) {
    // filterFunc가 리턴하는 조건! - 현재 선택된 필터가 전체일 때
    // 영상의 종류가 선택된 필터와 같을 때
    if (filter === '전체' || data.category === filter) return true;
    return false;
  }
  return (
    <Layout activeMenu="home">
      <div className={styles.header}>{target.map(mapFunc)}</div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {youtubeData['data'].filter(filterFunc).map(HomeCard)}
        </div>
      </div>
    </Layout>
  );
}

export default Home;