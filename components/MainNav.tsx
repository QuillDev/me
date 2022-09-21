import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { NavBar, NavItem } from "./Nav"

export const MainNav = () => (
    <>
        <NavBar>
            <NavItem>
                <Link href={"/"}>
                    Home
                </Link>
            </NavItem>
            {/* GitHub Logo */}
            <NavItem right>
                <a href={"https://github.com/quilldev"} target="_blank" rel="noopener noreferrer">
                    <FaGithub className={"h-full"} />
                </a>
            </NavItem>
        </NavBar>
        {/* Under Construction banner */}
        <div className="bg-red-500 text-center">Website is currently under construction</div>
        <div className="py-4">
            <div className="text-center text-4xl">Hey, I&apos;m QuillDev!</div>
        </div>
        <hr />
        {/* Title for the section */}
        <div className="text-center py-3 text-3xl">
            Projects and Experience
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4">
            {/* Twitch Rivals */}
            <a href={"https://www.twitch.tv/videos/1406569209?t=3h43m25s"} target="_blank" rel="noopener noreferrer">
                <div className="p-14 text-center bg-twitchrivals bg-center rounded-lg hover:border-red-800 border-black border-4">
                    <div className="text-4xl">Twitch Rivals</div>
                </div>
            </a>
            {/* Minehut */}
            <a href={"https://minehut.com/"} target="_blank" rel="noopener noreferrer">
                <div className="p-14 text-4xl text-center bg-minehut bg-center rounded-lg hover:border-red-800 border-black border-4">
                    Minehut
                </div>
            </a>
            {/* Open Source */}
            <a href={"https://minehut.com/"} target="_blank" rel="noopener noreferrer">
                <div className="p-14 text-4xl text-center bg-blue-900 bg-center rounded-lg hover:border-red-800 border-black border-4">
                    Open Source Projects
                </div>
            </a>
        </div>
    </>
)