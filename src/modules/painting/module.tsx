import { rootRoute } from "@/routes";
import { createRoute } from "@tanstack/react-router";
import {  PaintbrushVerticalIcon } from "lucide-react";
import React from "react";



export default {
    name: "Painting",
    icon: <PaintbrushVerticalIcon  />,
    route: createRoute({
        getParentRoute: () => rootRoute,
        path: "/Painting",
        component: React.lazy(() => import("."))                 
    })
}

