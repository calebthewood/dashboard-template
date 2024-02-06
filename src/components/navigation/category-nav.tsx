import { ReactNode } from "react";

function CategoryNav(): ReactNode {

    const categories = [
        "energy",
        "food",
        "housing",
        "education",
        "climate",
        "tourism",
        "military",
        "state"
    ]

    return <>
        <ul className="list-none">
            {
                categories.map((category, i) => {
                    return (
                        <li key={Math.random() * (i + 1)} className="my-1">
                            <button className="capitalize w-full px-2 text-left py-2 hover:bg-white">{category}</button>
                        </li>
                    )
                })
            }
        </ul>
    </>
}

export default CategoryNav;