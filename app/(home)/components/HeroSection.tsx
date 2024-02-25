import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="min-h-[60] flex items-center justify-between">
            {/* LEFT */}
            <div className="space-y-8">
                <h1 className="text-4xl lg:text-7xl font-bold">Nice to meet you! 👋
                    <br /> <span className="underline underline-offset-8 decoration-green-500">{"I'm Sokheng."}</span>
                </h1>

                <p className="md:w-96 text-lg text-gray-300">
                    {"Based in Cambodia, I'm a web developer passionate about building a modern web application that users love."}
                </p>

                <Link href={"mailto:test@gmail.com"} className="inline-block group">
                    <div>
                        <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">Contact Me 📬</h1>
                        <div className="w-40 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
                    </div>
                </Link>

            </div>

            {/* RIGHT */}
            <div>
                <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className="w-32 h-32 rounded-full bg-green-500"></div>
                    </div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}
