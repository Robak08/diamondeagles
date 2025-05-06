import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
	const handleThemeToggle = () => {
		const currentTheme =
			document.documentElement.attributes.getNamedItem("data-theme")?.value;
		document.dispatchEvent(
			new CustomEvent("set-theme", {
				detail: currentTheme === "dark" ? "light" : "dark",
			})
		);
	};
	return (
		<Button
			id="theme-toggle"
			title="Toggle theme"
			variant="outline"
			size="icon"
			className="cursor-pointer transition-colors hover:text-primary-darker dark:hover:text-primary"
			onClick={handleThemeToggle}>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 pointer-events-none" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 pointer-events-none" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
