
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="gap-2 text-2xl">
        {theme === 'dark' && <span onClick={() => setTheme('light')}>{<RiSunFill/>}</span>}
        {theme === 'light' && <span onClick={() => setTheme('dark')}>{<RiMoonFill/>}</span>}
    </div>
  )
};
