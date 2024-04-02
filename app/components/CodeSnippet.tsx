import {useTheme} from "next-themes";
import { CopyBlock, hybrid, github} from "react-code-blocks";

export default function CodeSnippet({codeSample}: {codeSample: string})  {

    const { theme } = useTheme()

    return (
        <div className="demo text-xs p-2 font-mono">
            <CopyBlock
                language='tsx'
                text={codeSample}
                showLineNumbers={true}
                theme={theme === 'dark' ? hybrid : github}
                codeBlock
            />
        </div>
    );
};