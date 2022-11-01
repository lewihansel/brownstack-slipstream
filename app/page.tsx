export default function Home() {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-1 flex w-full items-center gap-2">
                    <p className="font-semibold text-amber-900 lg:text-lg">
                        Brown Stack
                    </p>
                    <p className="rounded-full bg-amber-700 px-2 py-1 text-xs text-white">
                        SlipStream
                    </p>
                </div>

                <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                    Let&apos;s create something cools! 👋🏼
                </h2>

                <p className="max-w-screen-md text-gray-500 md:text-lg">
                    This is a section of some simple filler text, also known as
                    placeholder text. It shares some characteristics of a real
                    written text but is random or otherwise generated.
                </p>
            </div>
        </div>
    )
}
