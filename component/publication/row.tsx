import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';
import { IPublication } from './IPublication';

export default function PresentationRow({
  payload,
}: PropsWithChildren<{ payload: IPublication.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(item: IPublication.Item): IRow.Payload {
  return {
    left: {
      title: DateTime.fromFormat(item.at, Util.LUXON_DATE_FORMAT.YYYY_LL).toFormat(
        Util.LUXON_DATE_FORMAT.YYYY_DOT_LL,
      ),
    },
    right: {
      ...item,
    },
  };
}
