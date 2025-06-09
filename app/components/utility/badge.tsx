export default function Badge({ text }: { text: string }) {
    return (
        <span className='rounded-full bg-[#e7f2fd] text-primary-theme text-xs py-1 px-3'>
            {text}
        </span>
    )
}
