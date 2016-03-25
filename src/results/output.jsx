import React from 'react';
import Area from '../ui/area';

import { getUserPayload } from '../../common/utils';

export default ({output, highlight=[]}) => {
  const { user, segments } = output;
  const { traits } = getUserPayload(user, segments);
  return <Area value={traits} highlight={highlight} type='info'/>
}
