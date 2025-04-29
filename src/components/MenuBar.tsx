import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// TODO hightlight current route

export function MenuBar({links, currentPath}:any) {
  const listItems = links.map((link: any, index : number)=> 
    (link?.children ?
      <NavigationMenuItem key={link.href+index} className="mx-1">
          <NavigationMenuTrigger className="font-light">{link.label}</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_.75fr_.75fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <div
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                     Diamond Eagles USA
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Don't <u>miss out</u> on being the best company in Your region.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              {link.children.map((ch : any, i : number) => {
               return <li key={ch.href+i} className="row-span-1 flex place-content-center place-items-center w-full h-full">
                  <NavigationMenuLink asChild>
                  <a href={ch.href}
                  title={ch.label}
                  target="_blank"
                  className="w-full text-center block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  // {ch.description}
                >
                  <div className="text-sm font-medium leading-none">{ch.label}</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {ch.description}
                  </p>
                  </a>
                  </NavigationMenuLink>
                </li>
              })}
            </ul>
          </NavigationMenuContent>
      </NavigationMenuItem>
      :
        <NavigationMenuItem key={link.href+index}>
          <NavigationMenuLink asChild>
            <a href={link.href} title={link.label} className={currentPath === link.href ? 'text-primary' : ''}  >{link.label}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
    ) 
    );
  return (
    <NavigationMenu className="text-sm leading-tight">
      <NavigationMenuList>
        {listItems}
      </NavigationMenuList>
    </NavigationMenu>
  )
}