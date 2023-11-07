import _debug from 'debug';
import { DateTime } from 'luxon';

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = 'yyyy-LL-dd',
  YYYY_LL = 'yyyy-LL',
  YYYY_DOT_LL = 'yyyy. LL',
  YYYY_DOT_LL_DOT_DD = 'yyyy. LL. dd',
  KINDNESS_FULL = 'DDDD',

  // DURATION_KINDNESS = 'y년 M개월',
  // DURATION_KINDNESS_ONLY_MONTH = 'M개월',
}

function getFormattingDuration(from: DateTime, to: DateTime = DateTime.local()) {
  const log = debug('Util:getFormattingDuration');
  const diff = to.plus({ month: 1 }).diff(from);
  log(diff.milliseconds, diff.get('years'));
  const totalMonths = Math.floor(diff.as('months'));
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} mo${months > 1 ? 's' : ''}`;
  }
  return `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}`;
}

function debug(channel: string) {
  return _debug(`yosume:${channel}`);
}

const Util = {
  LUXON_DATE_FORMAT,
  getFormattingDuration,
  debug,
};

export default Util;
