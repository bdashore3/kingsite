// Miscellaneous components used in the website

interface Props {
  id: string;
}

export function Separator(props: Props) {
  return <div id={props.id} className="invisible md:visible md:h-16 lg:h-20" />;
}
