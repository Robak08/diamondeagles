import { useState } from "react";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { X, SquareMenu } from "lucide-react";
import { ThemeToggle } from "@components/ThemeToggle.tsx";

// TODO hightlight current route
// TODO add socials + INDUSTRIES ? + CONTACT INFO ?

export function MobileMenu({ links, currentPath, className }: any) {
	const [open, setOpen] = useState(false);

	const closeDrawer = () => setOpen(false);

	const listItems = links.map((link: any, index: number) => (
		<NavigationMenuItem key={link.href + index}>
			<NavigationMenuLink asChild>
				<a
					onClick={closeDrawer}
					href={link.href}
					title={link.label}
					className={currentPath === link.href ? "text-primary" : ""}>
					{link.label}
				</a>
			</NavigationMenuLink>
		</NavigationMenuItem>
	));

	return (
		<Drawer open={open} onOpenChange={setOpen} direction="right">
			<DrawerTrigger asChild>
				<Button variant="ghost" title="Open menu" className="has-[>svg]:px-2">
					<SquareMenu className="!w-6 !h-6" />
				</Button>
			</DrawerTrigger>
			<DrawerContent className="h-full">
				<DrawerHeader className="relative py-6">
					<DrawerTitle className="uppercase text-xl text-left mt-2">
						Diamond Eagles
					</DrawerTitle>
					<DrawerClose asChild className="absolute right-10 top-7">
						<Button variant="outline">
							<X />
						</Button>
					</DrawerClose>
				</DrawerHeader>
				<div className="menu-content">
					<NavigationMenu className="mobile-menu-nav">
						<NavigationMenuList>{listItems}</NavigationMenuList>
					</NavigationMenu>
				</div>
				<DrawerFooter>
					<ThemeToggle />
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
