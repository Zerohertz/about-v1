import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Badge, Col, Row } from 'reactstrap';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IExperience } from './IExperience';

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9}>
          <h4>
            <a href={item.link} style={{ color: '#000000' }}>
              {item.title}
            </a>
          </h4>
          <i style={Style.gray}>{item.position}</i>
          {createSkillKeywords(item.skillKeywords)}
          <ul className="pt-3">
            {item.descriptions.map((description, descIndex) => (
              <li key={descIndex.toString()}>{description}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <div>
      {skillKeywords.map((keyword, index) => (
        <Badge
          style={Style.skillKeywordBadge}
          key={index.toString()}
          color="secondary"
          className="mr-1"
        >
          {keyword}
        </Badge>
      ))}
    </div>
  );
}

function createWorkingPeriod(startedAtString: string, endedAtString?: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL);

  const { periodTitle, endedAt, isWorking } = (() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~`,
        isWorking: true,
        endedAt: undefined,
      };
    }

    const _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL);
    return {
      periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ ${_endedAt.toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      )}`,
      endedAt: _endedAt,
      isWorking: false,
    };
  })();

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 style={Style.gray}>{periodTitle}</h4>
      </Col>
      <Col md={12} xs={isWorking ? 5 : 3} className="text-md-right text-center">
        {isWorking ? (
          <Badge color="primary" className="mr-1">
            Current
          </Badge>
        ) : (
          ''
        )}
        <Badge color="info">{Util.getFormattingDuration(startedAt, endedAt)}</Badge>
      </Col>
    </Row>
  );
}
