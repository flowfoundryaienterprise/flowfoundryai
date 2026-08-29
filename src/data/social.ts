export interface SocialLink {
  id: 'instagram' | 'x' | 'linkedin';
  name: string;
  url: string;
  handle: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/flowfoundryaisolutions/',
    handle: '@flowfoundryaisolutions',
    ariaLabel: 'Visit FlowFoundry AI Solutions on Instagram',
  },
  {
    id: 'x',
    name: 'Twitter',
    url: 'https://x.com/flowfoundryai',
    handle: '@flowfoundryai',
    ariaLabel: 'Visit FlowFoundry AI Solutions on Twitter',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/flowfoundry-ai-solutions/',
    handle: 'FlowFoundry AI Solutions',
    ariaLabel: 'Visit FlowFoundry AI Solutions on LinkedIn',
  },
];
