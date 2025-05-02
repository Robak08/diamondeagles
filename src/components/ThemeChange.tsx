import * as React from "react"
import { Moon, Sun } from "lucide-react"
// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ThemeChange() {
  const [theme, setThemeState] = React.useState<
    "light" | "dark" | "system"
  >("system")
  // TODO not a fix -> pass theme store value here ?
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "light")
  }, [])
 
  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
    // localStorage?.setItem("theme", theme);
  }, [theme])

  return (
    <Button title="Toggle theme" variant="outline" size="icon" onClick={() => setThemeState(document.documentElement.classList.contains("dark") ? "light" : "dark")} 
       className="cursor-pointer transition-colors hover:text-primary-darker dark:hover:text-primary"
    >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 pointer-events-none" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 pointer-events-none" />
        <span className="sr-only">Toggle theme</span>
  </Button>
  )
}