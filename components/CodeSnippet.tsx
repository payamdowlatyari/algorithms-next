import { useTheme } from "next-themes";
import { CopyBlock, hybrid, github } from "react-code-blocks";

/**
 * A CodeSnippet component which takes a code sample as a prop and renders it
 * with line numbers and a copy button. The code block is rendered with a
 * hybrid theme when in dark mode and a github theme when in light mode.
 *
 * @param {string} codeSample - The code sample to render.
 */
export default function CodeSnippet({ codeSample }: { codeSample: string }) {
  const { theme } = useTheme();

  return (
    <div className="demo text-xs p-2 font-mono">
      <CopyBlock
        language="tsx"
        text={codeSample}
        showLineNumbers={true}
        theme={theme === "dark" ? hybrid : github}
        codeBlock
      />
    </div>
  );
}
