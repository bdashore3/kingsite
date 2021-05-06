// Miscellaneous components used in the website
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Code, ImageWithDescription, SanityBlock } from '@/models/schema';
import { urlFor } from '@/lib/sanity';

type SeparatorProps = {
  id?: string;
};

export function Separator(props: SeparatorProps) {
  return <div id={props.id || ''} className="h-10 md:h-16 lg:h-20" />;
}

type CodeProps = {
  node: Code;
};

export function CodeSerializer({ node }: CodeProps) {
  if (!node.code) {
    return null;
  }

  if (node.language == 'sass') {
    node.language = 'rust';
  }

  return (
    <div className="my-3">
      <SyntaxHighlighter language={node.language || 'text'} showLineNumbers={true} style={a11yDark}>
        {node.code}
      </SyntaxHighlighter>
    </div>
  );
}

type ImageProps = {
  node: ImageWithDescription;
};

export function ImageSerializer({ node }: ImageProps) {
  return (
    <img
      src={urlFor(node.asset).url() || undefined}
      alt={node.alt}
      className="block mx-auto my-5"
    />
  );
}

// Any used here due to ambiguous type
export function blockToString(blocks: SanityBlock[] | undefined) {
  if (blocks) {
    return blocks
      .map((block) => {
        if (block._type !== 'block' || !block.children) {
          return '';
        }
        // eslint-disable-next-line
        return block.children.map((child: any) => child.text).join('');
      })
      .join('\n\n');
  }
}
