// Miscellaneous components used in the website

import { ReactElement } from 'react';

interface Props {
  id: string;
}

export function Separator(props: Props): ReactElement {
  return <div id={props.id} className="invisible md:visible md:h-16 lg:h-20" />;
}
