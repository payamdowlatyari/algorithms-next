'use client'

import {useTheme} from "next-themes";
import { CopyBlock, hybrid, github} from "react-code-blocks";

export default function CodeSnippet({codeSample}: any)  {

    const { theme } = useTheme()

    return (
        <div className="demo text-xs p-2">
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