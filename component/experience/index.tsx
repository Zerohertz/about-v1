import { DateTime, Duration } from 'luxon';
import { PropsWithChildren } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import { EmptyRowCol } from '../common';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IExperience } from './IExperience';
import ExperienceRow from './row';

type Payload = IExperience.Payload;
type TimeCount = { endedAt: DateTime; startedAt: DateTime };

export const Experience = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const totalPeriod = () => {
    if (payload.disableTotalPeriod) {
      return '';
    }
    return (
      <span style={{ fontSize: '50%' }}>
        <Badge>{getFormattingExperienceTotalDuration(payload)}</Badge>
      </span>
    );
  };

  // 여기는 기간 표시, Skill Keywords 같은 특이 요소가 있어서 CommonSection, CommonRow 로 못바꾸지 않을까..
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>EXPERIENCES {totalPeriod()}</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

function getFormattingExperienceTotalDuration(payload: IExperience.Payload) {
  const durations = (payload.list
    .map((item) => {
      if (item.title.includes('Lab')) {
        return null;
      }
      return {
        endedAt: item.endedAt
          ? DateTime.fromFormat(item.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
          : DateTime.local(),
        startedAt: DateTime.fromFormat(item.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
      };
    })
    .filter((item) => item) as TimeCount[]).map(({ endedAt, startedAt }) => {
    return endedAt.plus({ month: 1 }).diff(startedAt);
  });

  const totalExperience = durations.reduce((prev, cur) => prev.plus(cur), Duration.fromMillis(0));

  const totalMonths = Math.floor(totalExperience.as('months'));
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `Total ${months} month${months > 1 ? 's' : ''}`;
  }

  return `Total ${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
}
