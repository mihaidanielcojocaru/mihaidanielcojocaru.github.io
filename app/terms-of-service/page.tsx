import type { Metadata } from 'next'
import { TermsOfServiceList } from 'app/components/terms-of-service-list'

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service',
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Terms of Service</h1>
            <TermsOfServiceList />
        </section>
    )
}
