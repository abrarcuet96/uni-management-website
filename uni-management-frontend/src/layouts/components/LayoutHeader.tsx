import {SidebarMenu, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar.tsx"
import {UniversityIcon} from "lucide-react";

export function LayoutHeader() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div
                        className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <UniversityIcon className="size-4"/>
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">CUET</span>
                        <span className="truncate text-xs">Center of Excellence</span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
