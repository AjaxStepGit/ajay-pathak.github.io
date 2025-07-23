import { DribbbleIcon, GithubIcon, LinkedinIcon } from 'lucide-react'
import Icon from './ui/icon'
import { Separator } from './ui/separator'
import Link from 'next/link'

const menuLinks = [
  { href: '#about', label: 'About' },
  { href: '#service', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

const serviceLinks = [
  { label: 'Design' },
  { label: 'Development' },
  { href: '#faq', label: 'FAQ' },
  // { label: 'See More' },
]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/ajay-krishna-pathak/',
    icon: <LinkedinIcon className="size-12 p-2" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/AjaxStepGit',
    icon: <GithubIcon className="size-12 p-2" />,
    label: 'GitHub',
  },
  {
    href: 'https://dribbble.com/YOUR_USERNAME', // Replace if needed
    icon: <DribbbleIcon className="size-12 p-2" />,
    label: 'Dribbble',
  },
]

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-primary-dark text-white h-[450px]">
      <div className="w-res flex flex-col justify-around mt-[90px]">
        <div className="flex w-full justify-between flex-wrap gap-6">
          {/* Brand */}
          <h3 className="heading-mtext">Personal</h3>

          {/* Menu */}
          <div className="flex flex-col gap-2">
            <h3 className="title-text mb-1">MENU</h3>
            {menuLinks.map(({ href, label }) => (
              <Link key={label} href={href}>
                <p className="small-text text-white cursor-pointer">{label}</p>
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-2">
            <h3 className="title-text mb-1">SERVICE</h3>
            {serviceLinks.map(({ href, label }) =>
              href ? (
                <Link key={label} href={href}>
                  <p className="small-text text-white cursor-pointer">{label}</p>
                </Link>
              ) : (
                <p key={label} className="small-text text-white">
                  {label}
                </p>
              )
            )}
          </div>

          {/* Social Icons */}
          <div className="flex h-fit gap-2">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:scale-110 transition-transform duration-200"
              >
                <Icon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        <Separator className="w-full" />

        {/* Footer Bottom */}
        <div className="flex justify-between">
          <p className="small-text text-white opacity-60">
            © {new Date().getFullYear()} Ajax. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
