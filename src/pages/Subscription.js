import Layout from '../components/shared/Layout';
import sortedYoutubeData from '../data/sortedYoutubeData.json';
import ContentsLayout from '../components/shared/ContentsLayout';
import SubscriptionCard from '../components/subscription/SubscriptionCard';
// moment/locale/ko는 시간 차이를 한글로 출력
function Subscription() {
  return (
    <Layout activeMenu="subscription">
      <ContentsLayout>
        {sortedYoutubeData['data'].map(function (data, index) {
          return (
            // 단순 정렬을 통해 리렌더링 조건에 만족 X
            // 기존데이터를 State로 구성
            <SubscriptionCard data={data} key={`subscription-card-${index}`} />
          );
        })}
      </ContentsLayout>
    </Layout>
  );
}

export default Subscription;