import Image from 'app/components/image'

export function Gallery({ images }: { images: string[] }) {
    return (
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
            {images.map((src, index) => (
                <div key={index} className="flex-none w-[180px] snap-center">
                    <Image
                        src={src}
                        alt={`Screenshot ${index + 1}`}
                        width={180}
                        height={390}
                        className="rounded-xl border border-neutral-200 dark:border-neutral-800"
                    />
                </div>
            ))}
        </div>
    )
}
