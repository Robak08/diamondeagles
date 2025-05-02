import * as React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
// import { cn } from "@/lib/utils"
import { Button } from "./ui/button";
// import { Separator } from "@/components/ui/separator"
import {X, SquareMenu} from 'lucide-react';

// TODO hightlight current route
// TODO add socials + INDUSTRIES ? + CONTACT INFO ?

export function MobileMenu({links, currentPath, className} : any) {
  const [open, setOpen] = React.useState(false)

  const listItems = links.map((link: any, index : number)=> 
      <NavigationMenuItem key={link.href+index}>
          <NavigationMenuLink asChild>
            <a href={link.href} title={link.label} className={currentPath === link.href ? 'text-primary' : ''}  >{link.label}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
  );

  return (
      <Drawer open={open} onOpenChange={setOpen} direction="right">
        <DrawerTrigger asChild>
          <Button variant="ghost" title="Open menu"><SquareMenu  className="!w-6 !h-6" /></Button>
        </DrawerTrigger>
        <DrawerContent className="h-full">
          <DrawerHeader className="relative py-6">
              <DrawerTitle className="uppercase text-xl text-left mt-2">Diamond Eagles</DrawerTitle>
              {/* <DrawerDescription> */}
                
              {/* </DrawerDescription> */}
            <DrawerClose asChild className="absolute right-10 top-7">
              <Button variant="outline"><X /></Button>
            </DrawerClose>
            </DrawerHeader>
            <div className="menu-content">
              <NavigationMenu className="mobile-menu-nav" >
                <NavigationMenuList>
                    {listItems}
                  </NavigationMenuList>
                </NavigationMenu>
            </div>
        </DrawerContent>
      </Drawer>
  )
}