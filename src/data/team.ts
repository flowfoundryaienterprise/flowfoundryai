export interface TeamMember {
  id: string;
  number: string;
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  imageScale?: string;
  bio?: string;
  location?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "sri-harsha-m",
    number: "01",
    name: "Sri Harsha M",
    role: "Founder & CTO",
    image: "/images/team/harsha-nandha.jpg",
    imagePosition: "object-[center_15%]",
    imageScale: "scale-100",
    location: "Vijayawada, Andhra Pradesh",
    phone: "+91 73309 37354",
    bio: "Directing strategic vision, product innovation, and commercial trajectory for FlowFoundry AI.",
  },
  {
    id: "ravi",
    number: "02",
    name: "Ravi Vaghela",
    role: "Co-Founder & CMO",
    image: "/images/team/Ravi.jpeg",
    imagePosition: "object-[center_15%]",
    imageScale: "scale-100",
    location: "Ahmedabad, Gujarat",
    phone: "+91 92287 26763",
    bio: "Pioneering technological exploration and AI integration models for modern business transformation.",
  },
  {
    id: "nithish",
    number: "03",
    name: "Nithish",
    role: "Tech Lead",
    image: "/images/team/Nithish.jpeg",
    imagePosition: "max-sm:object-[center_25%] sm:object-[center_15%]",
    imageScale: "scale-100",
    location: "Madurai, Tamil Nadu",
    phone: "+91 93454 23474",
    bio: "Guiding core architecture and intelligent engineering solutions across high-impact digital systems.",
  },
  {
    id: "ajay",
    number: "04",
    name: "Ajay",
    role: "Backend Developer",
    image: "/images/team/ajay.jpg",
    imagePosition: "object-[center_15%]",
    imageScale: "scale-100",
    location: "Vijayawada, Andhra Pradesh",
    phone: "+91 89198 44106",
    bio: "Building robust infrastructure, data pipelines, and scalable APIs behind intelligent products.",
  },
  {
    id: "janarthanan",
    number: "05",
    name: "Janarthanan",
    role: "Frontend Developer",
    image: "/images/team/Jana.jpeg",
    imagePosition: "object-center",
    imageScale: "scale-100",
    location: "Madurai, Tamil Nadu",
    phone: "+91 90877 57323",
    bio: "Crafting fluid, high-performance visual interfaces and interactive editorial web experiences.",
  },
];
