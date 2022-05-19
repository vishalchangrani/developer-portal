import { ReactComponent as FlowDocsLogo } from '../../Images/logos/flow-docs-logo-light.svg';
import { ReactComponent as GithubIcon } from '../../Images/social/github-light.svg';
import { ReactComponent as DiscordIcon } from '../../Images/social/discord-light.svg';
import { ReactComponent as ForumIcon } from '../../Images/social/forum-light.svg';
import { ReactComponent as OnFlowIcon } from '../../Images/logos/flow-icon-bw-light.svg';

// reduce repetition of the section layout in Footer component
const footerSections = [
  {
    header: 'Documentation',
    links: [
      {
        link: '#', // TODO: replace with actual links
        text: 'Getting Started',
      },
      {
        link: '#',
        text: "SDK's",
      },
      {
        link: '#',
        text: 'Tutorials',
      },
      {
        link: '#',
        text: 'Guides',
      },
      {
        link: '#',
        text: 'Concepts',
      },
      {
        link: '#',
        text: 'Walkthroughs',
      },
      {
        link: '#',
        text: 'How-To',
      },
      {
        link: '#',
        text: 'FAQ',
      },
      {
        link: '#',
        text: 'Tools',
      },
    ],
  },
  {
    header: 'Community',
    links: [
      {
        link: '#',
        text: 'Ecosystem',
      },
      {
        link: '#',
        text: 'GitHub',
      },
      {
        link: '#',
        text: 'Discord',
      },
      {
        link: '#',
        text: 'Flowverse',
      },
      {
        link: '#',
        text: 'Forum',
      },
    ],
  },
  {
    header: 'Start Building',
    links: [
      {
        link: '#',
        text: 'Flow Playground',
      },
      {
        link: '#',
        text: 'Crypto Kitties',
      },
    ],
  },
  {
    header: 'Network',
    links: [
      {
        link: '#',
        text: 'Network Status',
      },
      {
        link: '#',
        text: 'Mainnet',
      },
      {
        link: '#',
        text: 'Testnet',
      },
      {
        link: '#',
        text: 'Canary',
      },
      {
        link: '#',
        text: 'Sporks FAQ',
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black px-6 text-white">
      <div className="container mx-auto">
        <div className="block px-2 pt-8 pb-6 md:flex md:items-center md:justify-between md:px-4 md:pt-16">
          <div>
            <FlowDocsLogo className="h-10 w-min object-contain" />
          </div>
          <div className="flex items-center justify-start gap-6 pt-8 md:pt-0 lg:justify-center">
            <a href="#">
              <GithubIcon fill="red" height={32} width={32} />
            </a>
            <a href="#">
              <DiscordIcon fill="white" height={28} width={28} />
            </a>
            <a href="#">
              <ForumIcon fill="white" height={24} width={24} />
            </a>
            <a href="#">
              <OnFlowIcon height={28} width={28} />
            </a>
            <a href="#" className="pl-3">
              Eng
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 border-y border-y-gray-500 px-2 pt-9 pb-6 md:grid-cols-5 md:px-4">
          {footerSections.map((footer, i) => (
            <section key={i} className="pb-12 md:pb-0">
              <div className="pb-3">
                <h3 className="text-base font-bold lg:text-2xl">
                  {footer.header}
                </h3>
              </div>
              <ul>
                {footer.links.map((link, j) => (
                  <li className="py-1 pl-0" key={j}>
                    <a
                      className="text-xs text-gray-400 lg:text-base"
                      href={link.link}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="px-2 pt-4 pb-16 lg:px-4">@2022 Flow</div>
      </div>
    </footer>
  );
}