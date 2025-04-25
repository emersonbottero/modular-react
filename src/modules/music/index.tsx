import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"; // Import ShadCN Checkbox
import { Separator } from "@/components/ui/separator";
import { SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { ChevronRight, FilePlus2Icon, FileTextIcon } from "lucide-react";
import Filters from "@/components/filters";

export default function Music() {
    const Musics = [
        {
            name: "My Music",
            items: ["Personal", "Work", "Family"],
        },
        {
            name: "Favorites",
            items: ["Holidays", "Birthdays"],
        },
        {
            name: "Other",
            items: ["Travel", "Reminders", "Deadlines"],
        },
    ];
    return (
        <>
            <h1>Music Requests</h1>
            <Filters>
            <div>
                    <Checkbox
                    
                        id="option-one"
                        className="sr-only"
                    />
                    <Label data-button
                        htmlFor="option-one" className="peer-[button]:peer-aria-checked:border-primary"
                    >
                        <FilePlus2Icon />
                        New Music Request
                    </Label>
                </div>
                <div>
                    <Checkbox
                        id="option-two"
                        className="peer sr-only"
                    />
                    <Label  data-button
                    className="peer-[button]:peer-aria-checked:border-primary"
                        htmlFor="option-two"
                    >
                        <FileTextIcon />
                        Music Request
                    </Label>
                </div>
                </Filters>
            {Musics.map((calendar, index) => (
                <>
                    <Collapsible defaultOpen={index === 0} className="group/collapsible">
                        <SidebarGroupLabel
                            asChild
                            className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        >
                            <CollapsibleTrigger>
                                {calendar.name}{" "}
                                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {calendar.items.map((item, index) => (
                                        <SidebarMenuItem key={item}>
                                            <SidebarMenuButton>
                                                <div className="flex items-center justify-between w-full" key={index}>
                                                    <Label htmlFor={item} className="w-full">
                                                        {item}
                                                    </Label>
                                                    <Switch id={item} />
                                                </div>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </Collapsible>
                    <Separator />
                </>
            ))}
        </>
    );
}