"use client"

import {ChevronRight} from "lucide-react"

import {Collapsible, CollapsibleContent, CollapsibleTrigger,} from "@/components/ui/collapsible.tsx"
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar.tsx"
import {sidebarItemsGenerator} from "@/layouts/utils/sidebarItemsGenerator.tsx";
import {adminRoutesConstant, facultyRoutesConstant, studentRoutesConstant} from "@/constants";
import type {SIDEBAR_ITEMS} from "@/types";

export function SidebarItems() {
    const role = 'admin';
    let items: SIDEBAR_ITEMS = [];

    switch (role) {
        case 'admin':
            items = sidebarItemsGenerator(adminRoutesConstant, 'admin');
            break;
        case 'faculty':
            items = sidebarItemsGenerator(facultyRoutesConstant, 'faculty');
            break;
        case 'student':
            items = sidebarItemsGenerator(studentRoutesConstant, 'student');
            break;
        default:
            break
    }

    return (
        <SidebarGroup>
            <SidebarMenu>
                {items.map((item) => {
                        return item?.key === "Dashboard" ? <SidebarMenuButton>
                                {item.label}
                            </SidebarMenuButton>
                            :
                            <Collapsible
                                key={item.key}
                                asChild
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.key}>
                                            <span>{item.key}</span>
                                            <ChevronRight
                                                className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"/>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item?.children?.map((child) => (
                                                <SidebarMenuSubItem key={child.key}>
                                                    <SidebarMenuSubButton asChild>
                                                        {child.label}
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                    }
                )}
            </SidebarMenu>
        </SidebarGroup>
    )
}
