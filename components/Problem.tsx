import { useTheme } from "next-themes";
import { CodeBlock, hybrid, github } from "react-code-blocks";

/**
 * A component to render a problem.
 *
 * @param {Object} props - The component props.
 * @param {string} props.problem - The problem to render.
 *
 * @example
 * <Problem problem="A coding problem here" />
 */
export default function Problem({ problem }: { problem: string }) {
  const { theme } = useTheme();

  return (
    <div className="demo text-xs sm:text-sm p-1 md:p-2">
      <CodeBlock
        language="text"
        text={problem}
        showLineNumbers={false}
        theme={theme === "dark" ? hybrid : github}
      />
    </div>
  );
}
