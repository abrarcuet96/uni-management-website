"use client"

import * as React from "react"


import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar.tsx"
import {LayoutHeader} from "@/layouts/components/LayoutHeader.tsx";
import {SidebarItems} from "@/layouts/components/SidebarItems.tsx";
import {NavUser} from "@/layouts/components/NavUser.tsx";

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },

}


export function LayoutSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <LayoutHeader/>
            </SidebarHeader>
            <SidebarContent>
                <SidebarItems/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
