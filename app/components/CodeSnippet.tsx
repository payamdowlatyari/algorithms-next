'use client'

import {useTheme} from "next-themes";
import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";

export default function CodeSnippet({codeSample}: any)  {

    const { theme, setTheme } = useTheme()

    return (
        <div className="demo text-sm">
            <CopyBlock
            language='tsx'
            text={codeSample}
            showLineNumbers={true}
            theme={theme === 'dark' ? atomOneDark : atomOneLight}
            codeBlock
            />
        </div>
    );
};