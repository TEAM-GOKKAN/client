import React from 'react';
import { lotDetailAtom } from '../store/lotDetailAtom';
import { useAtom } from 'jotai';
import CategoryInfo from '../components/LotDetail/CategoryInfo';
import InfoMain from '../components/LotDetail/InfoMain';
import InfoDetail from '../components/LotDetail/InfoDetail';
import LotDescription from '../components/LotDetail/LotDescription';

const ExpertWorkDetailPage = () => {
  const [lotDetail] = useAtom(lotDetailAtom);

  return (
    <div>
      <CategoryInfo category={lotDetail.category} />
      <InfoMain
        lotName={lotDetail.name}
        lotNumber={lotDetail.itemNumber}
        lotImageUrls={lotDetail.imageItemUrls}
      />
      <InfoDetail
        brand={lotDetail.brand}
        designer={lotDetail.designer}
        material={lotDetail.material}
        period={lotDetail.productionYear}
        size={`${lotDetail.width} x ${lotDetail.depth} x ${lotDetail.height} cm`}
        conditionGrade={lotDetail.conditionGrade}
        conditionDescription={lotDetail.conditionDescription}
      />
      <LotDescription content={lotDetail.text} />
    </div>
  );
};

export default ExpertWorkDetailPage;
