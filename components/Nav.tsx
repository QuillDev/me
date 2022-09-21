import { DetailedHTMLProps, PropsWithChildren } from "react"

type NavItemProps = PropsWithChildren & {
    right?: boolean,
}

export const NavItem = ({ right, children }: NavItemProps) => {

    const style = `${right ? "float-right" : ""}`

    return (
        <>
            <li className={`p-2 text-3xl hover:bg-red-900 inline ${style}`}>
                {children}
            </li>
        </>
    )
}

export const NavBar = ({ children }: PropsWithChildren) => {
    return (
        <>
            <ul className="list-none m-0 p-0 overflow-hidden bg-zinc-900">
                {children}
            </ul>
        </>
    )
}