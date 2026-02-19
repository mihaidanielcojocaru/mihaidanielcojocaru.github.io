'use client'

import { useRouter, usePathname } from 'next/navigation'

export function LanguageSelector({ slug, basePath = '/privacy-policy' }: { slug: string, basePath?: string }) {
    const router = useRouter()

    // Determine the base slug (without language suffix)
    const baseSlug = slug.replace(/-[a-z]{2}$/, '')

    // Determine current language from slug
    let currentLang = 'en'
    if (slug.endsWith('-es')) currentLang = 'es'
    else if (slug.endsWith('-fr')) currentLang = 'fr'
    else if (slug.endsWith('-de')) currentLang = 'de'

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value
        if (lang === 'en') {
            router.push(`${basePath}/${baseSlug}`)
        } else {
            router.push(`${basePath}/${baseSlug}-${lang}`)
        }
    }

    return (
        <div className="mb-6">
            <select
                value={currentLang}
                onChange={handleChange}
                className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
            </select>
        </div>
    )
}
