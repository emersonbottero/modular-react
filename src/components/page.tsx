"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import MapView from "@/map-view"

export const iframeHeight = "800px"

export const description = "A sidebar that collapses to icons."

import { Module } from "@/types"
import {  Link, Outlet } from "@tanstack/react-router"
import { Map } from "lucide-react"
import { Input } from "./ui/input"

export default function Page({routes}: {routes:Module<any>[]}) {

  return (<>
  <SidebarProvider  style={{
    "--sidebar-width": "28rem",
    "--sidebar-width-mobile": "20rem",
  } as React.CSSProperties}>
      <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader className="border-b">
          <SidebarMenu>
            <SidebarMenuItem>
            <SidebarMenuButton className="h-12">
              <Link to="/">
                <Map  className="h-4 -ml-1"/> 
              </Link>
              <Input placeholder="Search"/>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="flex flex-row gap-0">
          <SidebarGroup  className="w-12 flex-none border-r">
            <SidebarMenu>
              {routes.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link to={item.route.to}>
                      {item.icon}

                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        <SidebarGroup className="flex-1">
          <Outlet />
        </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>             
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarTrigger variant="secondary" className="ml-2 md:ml-0 mt-2 z-1 fill-white" />
      <SidebarInset className="bg-trasnparent absolute inset-0 z-0 h-full w-full overflow-hidden">
        <MapView/>
      </SidebarInset>
    </SidebarProvider>
    </>
  )
}