import { ReactNode } from "react";

function CategoryNav({
    categories,
    changeCategory
}: {
    categories: string[],
    changeCategory: (i: number) => void
}): ReactNode {

    return <>
        <ul className="list-none">
            {
                categories.map((category, i) => {
                    return (
                        <li key={Math.random() * (i + 1)} className="my-1">
                            <button onClick={() => changeCategory(i)} className="capitalize w-full px-2 text-left py-2 hover:bg-slate-100 active:underline transition ease-in-out duration-100">{category}</button>
                        </li>
                    )
                })
            }
        </ul>
    </>
}

export default CategoryNav;