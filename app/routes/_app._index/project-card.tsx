export default function ProjectCard({ name, tags, image }: {
    name: string, tags: string, image?: string
}) {
    return (
        <div
            className="p-5 flex flex-col justify-between h-[300px] md:h-[300px] bg-gray-100 cursor-pointer hover:outline outline-secondary-theme transition"
            style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        >
            <h5 className="flex-1 font-semibold text-2xl text-gray-800 bg-white/70 rounded px-2 py-1 w-fit">
                {name}
            </h5>
            <div className="text-gray-700 bg-white/70 rounded px-2 py-1 w-fit">
                {tags}
            </div>
        </div>
    )
}
