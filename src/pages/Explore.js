import Layout from '../components/shared/Layout';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';
import HorizontalCard from '../components/shared/HorizontalCard';

// youtubeData['data'].map 이 데이터에 저장된 유튜브정보들을 수집해온다! 
function Explore() {
  return (
    <Layout activeMenu="explore">
      <ContentsLayout>
        
        {youtubeData['data'].map(function (data, index) {
          return <HorizontalCard key={`explore-card-${index}`} data={data} />;
        })}
      </ContentsLayout>
    </Layout>
  );
}

export default Explore;