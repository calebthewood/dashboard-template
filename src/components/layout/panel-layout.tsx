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
    return <div className="bg-slate-100 p-4">
        <div className="grid grid-cols-12 grid-rows-3 gap-4">
            <div className="col-span-2  py-6 px-2 row-span-1 bg-white shadow-sm">{children[0]}</div>
            <div className="col-span-10 py-6 px-2 row-span-1 bg-white shadow-sm">{children[1]}</div>
            <div className="col-span-2 py-6 px-2 row-span-10 bg-white shadow-sm">{children[2]}</div>
            <div className="col-span-6 py-6 px-2 row-span-10 bg-white shadow-sm">{children[3]}</div>
            <div className="col-span-4 py-6 px-2 row-span-10 bg-white shadow-sm">{children[4]}</div>
            <div className="col-span-12 py-6 px-2 row-span-1 bg-white shadow-sm">{children[5]}</div>
        </div>
    </div>
}
export default PanelLayout