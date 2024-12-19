import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Download, PlayCircle, Shield, HelpCircle, UserPlus, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CreateAccountDialog } from "@/components/CreateAccountDialog"
import { SignInDialog } from "@/components/SignInDialog"

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="mr-8 flex items-center space-x-2">
            <PlayCircle className="h-6 w-6 text-[#ea384c]" />
            <span className="text-xl font-bold">Family Video Saver</span>
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#ea384c] hover:text-[#ea384c]/90">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#ea384c]/50 to-[#ea384c] p-6 no-underline outline-none focus:shadow-md"
                          href="#features"
                        >
                          <Download className="h-6 w-6 text-white" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Download Videos
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Download and watch YouTube videos offline, perfect for families in Africa.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#features" title="Safe & Secure" icon={<Shield className="h-4 w-4" />}>
                      100% virus-free application designed for family use
                    </ListItem>
                    <ListItem href="#how-it-works" title="Easy to Use" icon={<PlayCircle className="h-4 w-4" />}>
                      Simple interface for downloading videos
                    </ListItem>
                    <ListItem href="#faq" title="Help & Support" icon={<HelpCircle className="h-4 w-4" />}>
                      Get answers to common questions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#ea384c]/90 focus:text-[#ea384c]"
                  href="#how-it-works"
                >
                  How It Works
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#ea384c]/90 focus:text-[#ea384c]"
                  href="#faq"
                >
                  FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#ea384c]/90 focus:text-[#ea384c]"
                  href="#contact"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4">
          <SignInDialog>
            <Button variant="outline" className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c]/10">
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </SignInDialog>
          <CreateAccountDialog>
            <Button className="bg-[#ea384c] hover:bg-[#ea384c]/90">
              <UserPlus className="mr-2 h-4 w-4" />
              Create Account
            </Button>
          </CreateAccountDialog>
        </div>
      </div>
    </nav>
  )
}

const ListItem = ({ className, title, icon, children, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export default Navigation