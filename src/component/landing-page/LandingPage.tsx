'use client';
import Header from "@/component/layout/Header";
import Home from "@/component/landing-page/Home";
import About from "@/component/landing-page/About";
import Skills from "@/component/landing-page/Skills";
import Experience from "@/component/landing-page/Experience";
import Projects from "@/component/landing-page/Projects";
import Contact from "@/component/landing-page/Contact";
import { ReactNode, useEffect, useRef } from "react";

interface Section {
    id: string;
    component: ReactNode;
}

export default function LandingPage() {
    const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        const newHash = `#${sectionId}`;
                        if (window.location.hash !== newHash) {
                            window.history.replaceState(null, '', newHash);
                            window.dispatchEvent(new HashChangeEvent('hashchange'));
                        }
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            }
        );
        sectionRefs.current.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
    const sections: Section[] = [
        { id: "home", component: <Home /> },
        { id: "about", component: <About /> },
        { id: "skills", component: <Skills /> },
        { id: "experience", component: <Experience /> },
        { id: "projects", component: <Projects /> },
        { id: "contact", component: <Contact /> },
    ];
    return (
        <>
            <style>{`
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(40px, 15px); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-40px, 20px); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(35px, -15px); }
                }
                @keyframes float4 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-35px, -10px); }
                }
                @keyframes float5 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(25px, 25px); }
                }
                @keyframes float6 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-30px, 15px); }
                }
                @keyframes float7 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(20px, -20px); }
                }
                @keyframes float8 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-25px, -25px); }
                }
            `}</style>
            <div className="flex flex-col items-center justify-between bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 min-h-screen relative">
                <div
                    className="fixed w-32 h-32 bg-blue-300 rounded-full blur-2xl opacity-50 pointer-events-none"
                    style={{ top: '8%', left: '3%', animation: 'float1 8s ease-in-out infinite' }}
                ></div>
                <div
                    className="fixed w-28 h-28 bg-cyan-300 rounded-full blur-2xl opacity-50 pointer-events-none"
                    style={{ top: '12%', right: '8%', animation: 'float2 10s ease-in-out infinite' }}
                ></div>
                <div
                    className="fixed w-36 h-36 bg-sky-300 rounded-full blur-2xl opacity-50 pointer-events-none"
                    style={{ bottom: '12%', left: '5%', animation: 'float3 9s ease-in-out infinite' }}
                ></div>
                <div
                    className="fixed w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50 pointer-events-none"
                    style={{ bottom: '8%', right: '4%', animation: 'float4 12s ease-in-out infinite' }}
                ></div>

                <div
                    className="fixed w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-40 pointer-events-none"
                    style={{ top: '35%', left: '8%', animation: 'float5 11s ease-in-out infinite' }}
                ></div>
                <div
                    className="fixed w-20 h-20 bg-teal-200 rounded-full blur-2xl opacity-45 pointer-events-none"
                    style={{ top: '45%', right: '6%', animation: 'float6 7s ease-in-out infinite' }}
                ></div>
                <div
                    className="fixed w-28 h-28 bg-purple-200 rounded-full blur-2xl opacity-35 pointer-events-none"
                    style={{ top: '60%', left: '12%', animation: 'float7 13s ease-in-out infinite' }}
                ></div>
                <div
                    className="fixed w-24 h-24 bg-cyan-200 rounded-full blur-2xl opacity-40 pointer-events-none"
                    style={{ top: '70%', right: '15%', animation: 'float8 9s ease-in-out infinite' }}
                ></div>

                {/* Extra tiny circles for depth */}
                <div
                    className="fixed w-16 h-16 bg-blue-100 rounded-full blur-xl opacity-50 pointer-events-none"
                    style={{ top: '25%', left: '25%', animation: 'float3 6s ease-in-out infinite' }}
                ></div>
                <div
                    className="fixed w-14 h-14 bg-sky-200 rounded-full blur-xl opacity-45 pointer-events-none"
                    style={{ top: '50%', right: '25%', animation: 'float1 8s ease-in-out infinite' }}
                ></div>
                <div
                    className="fixed w-18 h-18 bg-indigo-100 rounded-full blur-xl opacity-40 pointer-events-none"
                    style={{ bottom: '35%', left: '30%', animation: 'float2 10s ease-in-out infinite' }}
                ></div>
                <div
                    className="fixed w-16 h-16 bg-teal-100 rounded-full blur-xl opacity-45 pointer-events-none"
                    style={{ bottom: '25%', right: '30%', animation: 'float4 7s ease-in-out infinite' }}
                ></div>

                <Header />
                <main className="w-full relative z-10">
                    {sections.map((section) => (
                        <section
                            key={section.id}
                            id={section.id}
                            ref={(el) => {
                                if (el) sectionRefs.current.set(section.id, el);
                            }}
                        >
                            <div className="max-w-[960px] mx-auto">{section.component}</div>
                        </section>
                    ))}
                </main>
            </div>
        </>
    );
}