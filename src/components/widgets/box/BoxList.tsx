import { BoxListWrapper } from '@root/components/commons/layout/box';

const BoxList = ({ title, shortDescription }: { title: string; shortDescription?: string }) => {
  return (
    <BoxListWrapper>
      <div className="__box-list-source">
        <img src="https://prod-mfp-imgsrv.tillitsdone.com/uploads/medium__76d149dd4f.jpg" alt="xx" />
      </div>
      <div className="__box-list-content">
        <div className="__box-list-title">{title}</div>
        <div className="__box-list-short-desc">{shortDescription}</div>
      </div>
    </BoxListWrapper>
  );
};

export default BoxList;
