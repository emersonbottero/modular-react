import { MusicIcon } from "lucide-react";
import React from "react";

export default {
    name: "Music",
    icon: <MusicIcon size={20} />,
    path: "/music",
    element: React.lazy(() => import("./Music")),
}