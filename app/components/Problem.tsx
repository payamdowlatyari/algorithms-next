import {useTheme} from "next-themes";
import { CodeBlock, hybrid, github } from "react-code-blocks";

export default function Problem({problem}: {problem: string})  {

const { theme } = useTheme()

  return (
      <div className="demo text-xs p-2">
        <CodeBlock
          language='text'
          text={problem}
          showLineNumbers={false}
          theme={theme === 'dark' ? hybrid : github}
        />
      </div>
  );
};