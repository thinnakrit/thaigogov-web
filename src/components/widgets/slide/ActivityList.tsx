import { ActivityBoxListWrapper } from '@root/components/commons/layout/box';

const ActivityList = ({
  title,
  shortDescription,
  sourceBackground,
  sourceUrl
}: {
  title: string;
  shortDescription?: string;
  sourceBackground?: string;
  sourceUrl?: string;
}) => {
  return (
    <ActivityBoxListWrapper
      sourceBackground={sourceBackground}
      sourceUrl={sourceUrl}
    >
      <div className="__box-background-source" />
      <div className="__box-body">
        <div className="__box-body-content">
          <div className="__box-title">{title}</div>
          <div className="__box-desc">{shortDescription}</div>
        </div>
        <div className="__box-body-footer">
          <button className="__button-secondary">รายละเอียด</button>
        </div>
      </div>
    </ActivityBoxListWrapper>
  );
};

export default ActivityList;
