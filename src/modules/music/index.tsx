import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import {  ChevronRight, FilePlus2Icon, FileTextIcon } from "lucide-react";

export default function Music() {
    const calendars = [
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
      ]
    return (
        <>
        <h1>Music Rquests</h1>
        <div className="">
            <RadioGroup defaultValue="option-one" className="grid grid-cols-3 gap-4">
                <div>
                    <RadioGroupItem value="option-one" id="option-one" className="size-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"/>
                    <Label className="h-full font-normal text-center text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary" htmlFor="option-one">
                        <FilePlus2Icon/>
                        New Music Request
                    </Label>
                </div>
                <div>
                    <RadioGroupItem value="option-two" id="option-two" className="size-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"/>
                    <Label  className="h-full font-normal text-center text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary" htmlFor="option-two">
                    <FileTextIcon/>
                    Music Request</Label>
                </div>
            </RadioGroup>
        </div>
        {calendars.map((calendar, index) => (<>
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
            </Collapsible>
                      <Separator/>
</>
        ))}
        </>
    )
}