import { rootRoute } from "@/routes";
import { createRoute } from "@tanstack/react-router";
import { MusicIcon } from "lucide-react";
import React from "react";



export default {
    name: "Sculpture",
    icon: <MusicIcon  />,
    route: createRoute({
        getParentRoute: () => rootRoute,
        path: "/Sculpture",
        component: React.lazy(() => import("."))                 
    })
}

