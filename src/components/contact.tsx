import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react'
import Icon from './ui/icon'
import ContactCard from './card/contact-card'

const contactDetails = [
  {
    href: 'https://www.linkedin.com/in/ajay-krishna-pathak/',
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
    text: 'ajay-krishna-pathak',
  },
  {
    href: 'https://github.com/AjaxStepGit',
    icon: <GithubIcon />,
    label: 'GitHub',
    text: 'AjaxStepGit',
  },
  {
    href: 'mailto:pathak.ajayofficial@gmail.com',
    icon: <MailIcon />,
    label: 'Email',
    text: 'pathak.ajayofficial@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper bg-accent-medium">
      <div className="flex w-res flex-col lg:flex-row items-center gap-16 lg:gap-[130px]">
        <ContactCard />

        {/* Contact Info */}
        <div className="flex flex-col gap-6 p-0 sm:p-7 w-full max-w-lg text-tdark">
          <h3 className="title-text">Contact</h3>
          <h2 className="heading-text">Contact Me</h2>
          <p className="small-text">
            A digital agency is a business you hire to outsource your digital marketing efforts,
            instead of handling in-house.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            {contactDetails.map(({ href, icon, label, text }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon icon={icon} className="icon-md" />
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
