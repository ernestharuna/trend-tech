import { Link, Outlet, useNavigation } from "react-router";
import type { Route } from "./+types/route";
import { useEffect, useState } from "react";
import { ChevronRight, Menu } from "lucide-react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Trend Tech" },
        { name: "description", content: "Innovating for development impact." },
    ];
}

export default function DefaultLayout() {
    const { state } = useNavigation();
    let busy: boolean = state === "submitting" || state === "loading";

    const [menu, setMenu] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="-translate-x-1/2 fixed left-1/2 transform z-50 w-full">
                {/* Navbar */}
                <nav
                    className={`py-1.5 transition-all duration-300 ease-in-out 
                        ${scrolled ? "shadow-xl bg-white/70 backdrop-blur-xl" : "bg-white"} border-gray-200 `}
                >
                    <div className="container flex justify-between items-center gap-2">
                        <section className="flex items-center gap-4">
                            <div className="flex gap-2 items-center">
                                <Link to="/" className="text-primary font-bold md:text-lg">
                                    <img src="/images/trendtech-logo.png" alt="logo" width={80} />
                                </Link>
                            </div>

                        </section>
                        <div className="md:flex gap-8 hidden items-center text-sm tracking-tight text-gray-500">
                            <Link to={"#about-us"} className="text-primary font-light">
                                About us
                            </Link>
                            <Link to={"#services"} className="text-primary font-light">
                                Services
                            </Link>
                            <Link to={"#clients"} className="text-primary font-light">
                                Clients
                            </Link>
                        </div>
                        <button aria-label="Menu" className="block md:hidden" type="button" onClick={() => setMenu(!menu)}>
                            <Menu />
                        </button>
                    </div>
                </nav>
                {menu && (
                    <div className="bg-white shadow-2xl block md:hidden mt-1 mx-auto px-4 py-4 z-50">
                        <div>
                            <div className="mb-3">
                                <div className="border-b py-4">
                                    <Link onClick={() => setMenu(false)} to={"#about-us"} className="text-primary font-medium">
                                        About us
                                    </Link>
                                </div>
                                <div className="border-b py-4">
                                    <Link onClick={() => setMenu(false)} to={"#services"} className="text-primary font-medium">
                                        Services
                                    </Link>
                                </div>
                                <div className="border-b py-4">
                                    <Link onClick={() => setMenu(false)} to={"#clients"} className="text-primary font-medium">
                                        Clients
                                    </Link>
                                </div>
                                <div className="py-4">
                                    <a href="tel:+2348036343778" className="flex text-foreground text-sm font-light gap-2 items-center">
                                        <span>Contact us </span> <ChevronRight size={12} />
                                    </a>
                                </div>
                            </div>
                            {/* <div className="flex flex-col gap-4">
                                <Link to="/login" className="bg-white border border-secondary-foreground rounded-[6px] text-center text-secondary-foreground text-sm w-full block font-extrabold hover:shadow-lg py-2 uppercase">
                                    Log in
                                </Link>
                                <Link to="/register" className="bg-[#083156] border border-[#083156] rounded-[6px] text-[#FBE56D] text-center text-sm w-full block font-bold hover:bg-gray-800 py-2 uppercase">
                                    Sign up
                                </Link>
                            </div> */}
                        </div>
                    </div>
                )}
            </div>
            <div className={`${busy && "opacity-50"} transition-all`}>
                <Outlet />
            </div>
            <footer>
                <div className="bg-muted py-10 border-t">
                    <div className="container">
                        <div className="mb-20">
                            <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
                                <div className="max-w-xl">
                                    <p className="text-gray-600 text-center  md:text-start  text-sm">
                                        Trendtech Limited has and continues to provide successful Information Technology (IT) solutions to government and private sector clients across Africa.
                                    </p>
                                </div>
                                <div className="max-w-lg text-center">
                                    <img
                                        src="/images/trendtech-logo.png"
                                        alt="Trendtech Logo"
                                        className="w-40 inline-block mb-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-muted-foreground text-sm">
                            <span>&copy; 2015 - {new Date().getFullYear()} Trendtech limited</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
