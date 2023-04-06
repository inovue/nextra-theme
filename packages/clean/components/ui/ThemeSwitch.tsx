import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'nextra/icons'
import { useMounted } from 'nextra/hooks'

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const isMounted = useMounted();
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');
  const onKeyDownHandler = (e:React.KeyboardEvent<HTMLButtonElement>) => e.key==='Enter' && toggleTheme()

  return (
    <button className='nx-p-1 nx-w-8 nx-h-8 nx-flex nx-items-center nx-justify-center' aria-label="Toggle Dark Mode" tabIndex={0} onClick={toggleTheme} onKeyDown={onKeyDownHandler}>
      {isMounted ? isDark ? <MoonIcon /> : <SunIcon /> : <></>}
    </button>
  )
}
