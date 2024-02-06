import { ReactNode } from "react"

/** Panel Layout
 *  Renders children in a series of panels, handles positioning and layout styles.
 *     
    logoPanel,
    topPanel,
    leftPanel,
    centerPanel,
    rightPanel,
    bottomPanel,
}: {
    logoPanel: ReactNode;
    topPanel: ReactNode;
    leftPanel: ReactNode;
    centerPanel: ReactNode;
    rightPanel: ReactNode;
    bottomPanel: ReactNode;
 */
function PanelLayout({
    children
}: { children: ReactNode[] }) {
    return <div className="bg-slate-400 p-4">
        <div className="grid grid-cols-12 grid-rows-3 gap-4">
            <div className="bg-slate-200 col-span-2 row-span-1 p-6 rounded-md">{children[0]}</div>
            <div className="bg-slate-200 col-span-10 p-6 row-span-1 rounded-md">{children[1]}</div>
            <div className="bg-slate-200 col-span-2 p-6 row-span-10 rounded-md">{children[2]}</div>
            <div className="bg-slate-200 col-span-6 p-6 row-span-10 rounded-md">{children[3]}</div>
            <div className="bg-slate-200 col-span-4 p-6 row-span-10 rounded-md">{children[4]}</div>
            <div className="bg-slate-200 col-span-12 p-6 row-span-1 rounded-md">{children[5]}</div>
        </div>
    </div>
}
export default PanelLayout