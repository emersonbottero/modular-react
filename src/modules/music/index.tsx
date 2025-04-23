import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { Check, ChevronRight, FilePlus2Icon } from "lucide-react";

export default function Music() {
    const calendars = [
        {
          name: "My Calendars",
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
      ]
    return (
        <>
        <h1>Music Main</h1>
        <div className="flex gap-2">
            <Button variant="outline"  className="size-27 flex flex-col gap-3 justify-between">
                <FilePlus2Icon className="size-9 bg-blue-400 stroke-white p-2 border-r-2" />
                <span className="text-wrap text-blue-500">New Music Request</span>
            </Button>
            <Button variant="outline"  className="size-27 flex flex-col gap-3 justify-between">
                <FilePlus2Icon className="size-9 bg-blue-400 stroke-white p-2 border-r-2" />
                <span className="text-wrap text-blue-500">New Music Request</span>
            </Button>
        </div>
        {calendars.map((calendar, index) => (
        <Collapsible
              defaultOpen={index === 0}
              className="group/collapsible"
            >
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
                          {/* <div
                            data-active={index < 2}
                            className="group/calendar-item flex aspect-square size-4 shrink-0 items-center justify-center rounded-sm border border-sidebar-border text-sidebar-primary-foreground data-[active=true]:border-sidebar-primary data-[active=true]:bg-sidebar-primary"
                          >
                            <Check className="hidden size-3 group-data-[active=true]/calendar-item:block" />
                          </div>
                          {item} */}
                          <div className="flex items-center justify-between w-full" key={index}>
                            <Label htmlFor={item} className="w-full">{item}</Label>
                            <Switch id={item}/>
                        </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>))}
        </>
    )
}