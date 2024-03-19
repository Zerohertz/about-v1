import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import { IProfile } from './IProfile';
import { HrefTargetBlank } from '../common';

export default function ProfileContact({
  payload,
}: PropsWithChildren<{ payload: IProfile.Contact }>) {
  return (
    <Row className="pb-2">
      <Col xs={1} className="text-right">
        <FontAwesomeIcon icon={payload.icon} style={{ width: '16px', height: '16px' }} />
      </Col>
      <Col xs="auto">{createLink(payload)}</Col>
    </Row>
  );
}

function createLink(payload: IProfile.Contact) {
  if (payload.badge) {
    return <Badge color="secondary">{payload.title || payload.link}</Badge>;
  }
  return payload.link ? (
    <HrefTargetBlank url={payload.link} text={payload.title} />
  ) : (
    <span>{payload.title}</span>
  );
}
