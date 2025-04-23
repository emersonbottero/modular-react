import { rootRoute } from "@/routes";
import { createRoute } from "@tanstack/react-router";
import { MusicIcon } from "lucide-react";
import React from "react";



export default {
    name: "Music",
    icon: <MusicIcon size={20} />,
    route: createRoute({
        getParentRoute: () => rootRoute,
        path: "/music",
        component: React.lazy(() => import("."))                 
    })
}

