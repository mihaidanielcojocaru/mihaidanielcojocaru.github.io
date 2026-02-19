import type { Metadata } from 'next'
import { PrivacyPolicyList } from 'app/components/privacy-policy-list'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy',
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Privacy Policy</h1>
            <PrivacyPolicyList />
        </section>
    )
}
