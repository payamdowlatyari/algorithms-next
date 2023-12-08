'use client'

import {useTheme} from "next-themes";
import { CodeBlock, atomOneDark, atomOneLight } from "react-code-blocks";

export default function Problem({problem}: any)  {

const { theme, setTheme } = useTheme()

  return (
      <div className="demo text-sm p-2">
        <CodeBlock
          language='text'
          text={problem}
          showLineNumbers={false}
          theme={theme === 'dark' ? atomOneDark : atomOneLight}
        />
      </div>
  );
};