import { ReactNode } from "react";

interface FiltersProps {
    children: ReactNode;
}

export default function Filters({ children }: FiltersProps) {
    return (
        <div className="grid grid-cols-3 auto-rows-min gap-4 **:data-button:h-full **:data-button:font-normal **:data-button:text-center **:data-button:text-sm **:data-button:leading-none **:data-button:peer-disabled:cursor-not-allowed **:data-button:peer-disabled:opacity-70 **:data-button:flex **:data-button:flex-col **:data-button:items-center **:data-button:justify-between **:data-button:rounded-md **:data-button:border-2 **:data-button:border-muted **:data-button:bg-transparent **:data-button:p-4 **:data-button:hover:bg-accent **:data-button:hover:text-accent-foreground">
        {children}
        </div>
    )
}