import {
    Calendar,
    ChevronUp,
    DatabaseIcon,
    HelpCircleIcon,
    Home,
    icons,
    Inbox,
    Search,
    Settings,
    User2
} from "lucide-react"
import {EyeIcon} from 'lucide-react';

import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu, SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator,
} from "@/components/ui/sidebar"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Data Sources",
        url: "#",
        icon: DatabaseIcon,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
    {
        title: "Help",
        url: "#",
        icon: HelpCircleIcon,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className='mb-8 mt-5'>
                        <Avatar className='mr-5 w-7'>
                            <AvatarImage
                                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"/>
                            <AvatarFallback>AWS</AvatarFallback>
                        </Avatar>
                        <span className='text-lg text-gray-600'>Enterprise Search</span>

                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                    <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator/>
                <SidebarMenu>
                    <Collapsible defaultOpen className="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton className="m-2">
                                    <EyeIcon className="search" size='lg'/>Past Searches
                                    <SidebarMenuBadge>5</SidebarMenuBadge>
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem className="text-gray-400 text-xs hover:text-blue-500"><Link
                                        href="#">claims process uk</Link></SidebarMenuSubItem>
                                    <SidebarMenuSubItem className="text-gray-400 text-xs">uk motor policy
                                        limits</SidebarMenuSubItem>
                                    <SidebarMenuSubItem className="text-gray-400 text-xs">canada motor policy
                                        limits</SidebarMenuSubItem>
                                    <SidebarMenuSubItem className="text-gray-400 text-xs hover:text-blue-500">
                                        <Link className="line-clamp-1" href="#">canada and uk international claims
                                            process</Link>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem className="text-gray-400 text-xs hover:text-blue-500">
                                        <Link className="line-clamp-1" href="#">corporate claims outsourcing
                                            partners</Link>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>


            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2/>dixonaws@amazon.com
                                    <ChevronUp className="ml-auto"/>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Billing</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>

    )
}
