import Image from 'app/components/image'
import { HomeProjects } from 'app/components/home-projects'

export default function Page() {
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Mihai Cojocaru',
            jobTitle: 'Mobile App Developer',
            url: 'https://mihaicojocaru.online',
            image: 'https://mihaicojocaru.online/me.jpg',
            'sameAs': [
              'https://github.com/mihaidanielcojocaru',
              'https://www.linkedin.com/in/mihai-cojocaru-1b6552308/'
            ],
            'description': 'I am a versatile mobile app developer specializing in Flutter, iOS, and Android development.',
            'address': {
              '@type': 'PostalAddress',
              'addressCountry': 'Romania'
            },
            'knowsAbout': [
              'Swift', 'SwiftUI', 'Python', 'React', 'React Native', 'Next.js', 'Typescript', 'Javascript', 'C++', 'SQL'
            ],
            'alumniOf': {
              '@type': 'CollegeOrUniversity',
              'name': 'National University of Science and Technology Politehnica Bucharest',
              'sameAs': 'https://upb.ro/en/'
            },
            'contactPoint': {
              '@type': 'ContactPoint',
              'email': 'mihaicojocarudev@gmail.com',
              'telephone': '+40750404550',
              'contactType': 'customer support'
            },
            'hasCredential': {
              '@type': 'EducationalOccupationalCredential',
              'name': 'Python for Everybody Specialization',
              'url': 'https://www.coursera.org/account/accomplishments/specialization/G5DMEPQSG8ZS'
            }
          }),
        }}
      />
      <div className="flex items-start gap-4 mb-8">
        <Image
          src="/me.jpg"
          alt="Mihai Cojocaru"
          width={100}
          height={100}
          className="rounded-full"
          priority
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Mihai Cojocaru
          </h1>
          <div className="flex items-center gap-4 mt-2 mb-2">
            <a
              href="https://github.com/mihaidanielcojocaru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-logo.png"
                alt="Github"
                width={20}
                height={20}
                className="grayscale hover:grayscale-0 transition-all invert dark:invert-0"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mihai-cojocaru-1b6552308/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-logo.png"
                alt="LinkedIn"
                width={20}
                height={20}
                className="grayscale hover:grayscale-0 transition-all"
              />
            </a>
            <a
              href="mailto:mihaicojocarudev@gmail.com"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col text-sm text-neutral-600 dark:text-neutral-400">
            <span>Pitesti, Romania</span>
            <span>+40750404550</span>
          </div>
        </div>
      </div>
      <hr className="my-12 border-neutral-100 dark:border-neutral-800" />

      <HomeProjects />

      <hr className="my-12 border-neutral-100 dark:border-neutral-800" />

      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Work Experience</h2>

      <div className="mb-6">
        <h3 className="font-medium text-lg">Mobile App Developer</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">2024 - Present</p>
        <p className="italic mb-2">Independent App Developer</p>
        <ul className="list-disc list-inside mb-4">
          <li>Developing innovative mobile applications for iOS and Android platforms using Flutter and native technologies.</li>
          <li>Created Rider Weather, a specialized weather application for motorcycle riders with personalized recommendations.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-lg">Walti</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">2023 - Present</p>
        <p className="italic mb-2">IT Manager</p>
        <ul className="list-disc list-inside mb-4">
          <li>Managing IT infrastructure and technical operations while continuing to develop mobile solutions.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-lg">Arges TV</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">2021 - 2023</p>
        <p className="italic mb-2">Chief Technology Officer</p>
        <ul className="list-disc list-inside mb-4">
          <li>Led technical strategy and operations as CTO, overseeing technology infrastructure and digital initiatives.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-lg">GrizzlyStudio</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">2019 - 2021</p>
        <p className="italic mb-2">Game Developer</p>
        <ul className="list-disc list-inside mb-4">
          <li>Developed and maintained game applications, contributing to the studio's gaming portfolio.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-lg">Electronic Arts</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">2017 - 2018</p>
        <p className="italic mb-2">Gameplay Programmer</p>
        <ul className="list-disc list-inside mb-4">
          <li>Developed gameplay features for a racing game using C++.</li>
        </ul>
      </div>

      <hr className="my-12 border-neutral-100 dark:border-neutral-800" />

      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Studies</h2>

      <div className="mb-6">
        <h3 className="font-medium text-lg">University of Pitesti</h3>
        <p className="mb-2">Bachelor's Degree in Computer Science (2018 - 2022)</p>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-lg">University of Michigan</h3>
        <p className="mb-2">Certification in Python and Python Data Structures</p>
      </div>

      <hr className="my-12 border-neutral-100 dark:border-neutral-800" />

      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Specializations and Certificates</h2>

      <div className="mb-6">
        <h3 className="font-medium text-lg">Python for Everybody Specialization</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">University of Michigan</p>
        <ul className="list-disc list-inside mb-4">
          <li>Programming for Everybody (Getting Started with Python)</li>
          <li>Python Data Structures</li>
          <li>Using Python to Access Web Data</li>
          <li>Using Databases with Python</li>
          <li>Capstone: Retrieving, Processing, and Visualizing Data with Python</li>
        </ul>
        <p className="mb-4">
          This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language. In the Capstone Project, you'll use the technologies learned throughout the Specialization to design and create your own applications for data retrieval, processing, and visualization.
        </p>
        <a
          href="https://www.coursera.org/account/accomplishments/specialization/G5DMEPQSG8ZS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 underline"
        >
          View Certification
        </a>
      </div>

      <hr className="my-12 border-neutral-100 dark:border-neutral-800" />

      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Technical skills</h2>

      <div className="mb-6">
        <h3 className="font-medium text-lg">Mobile Development</h3>
        <p className="mb-2">Proficient in Flutter, iOS, and Android development, creating cross-platform and native mobile applications.</p>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-lg">Programming Languages</h3>
        <p className="mb-2">Experienced in Python, Dart, Swift, and Kotlin, with strong data structures and algorithms knowledge.</p>
      </div>
    </section >
  )
}
