// Demo resume data for "Load Demo" feature
export const demoData = {
  personal: {
    name: 'Alexandra Chen',
    title: 'Senior Full-Stack Engineer',
    email: 'alexandra.chen@email.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexchen',
    github: 'github.com/alexchen-dev',
    website: 'alexchen.dev',
  },
  summary:
    'Passionate full-stack engineer with 7+ years of experience building scalable web applications and developer tools. Led cross-functional teams to ship products used by 5M+ users. Deep expertise in React, Node.js, and cloud infrastructure. Committed to writing clean, maintainable code and mentoring junior developers.',
  experience: [
    {
      id: '1',
      company: 'Stripe',
      role: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      startDate: 'Jan 2022',
      endDate: 'Present',
      current: true,
      bullets: [
        'Architected and shipped a real-time fraud detection system processing 500K+ transactions/day, reducing chargebacks by 34%.',
        'Led a team of 5 engineers to rebuild the merchant dashboard in React, improving page load time by 60%.',
        'Designed a GraphQL API layer serving 200+ internal and external consumers.',
        'Mentored 3 junior engineers; 2 promoted within 18 months.',
      ],
    },
    {
      id: '2',
      company: 'Airbnb',
      role: 'Software Engineer',
      location: 'San Francisco, CA',
      startDate: 'Jun 2019',
      endDate: 'Dec 2021',
      current: false,
      bullets: [
        'Built the host onboarding flow used by 1M+ new hosts, increasing completion rate by 22%.',
        'Contributed to the design system (React component library) adopted across 8 product teams.',
        'Optimized database queries reducing average API response time from 800ms to 120ms.',
      ],
    },
    {
      id: '3',
      company: 'Shopify',
      role: 'Junior Developer',
      location: 'Toronto, ON (Remote)',
      startDate: 'Aug 2017',
      endDate: 'May 2019',
      current: false,
      bullets: [
        'Developed and maintained Ruby on Rails API endpoints for the Shopify Payments product.',
        'Built internal tooling that automated deployment pipelines, saving the team 4 hours/week.',
      ],
    },
  ],
  education: [
    {
      id: '1',
      institution: 'University of California, Berkeley',
      degree: 'B.S. Computer Science',
      location: 'Berkeley, CA',
      startDate: '2013',
      endDate: '2017',
      gpa: '3.8',
      highlights: ['Dean\'s List (6 semesters)', 'ACM Club President', 'Hackathon Winner — CalHacks 2016'],
    },
  ],
  skills: {
    'Languages': ['TypeScript', 'JavaScript', 'Python', 'Ruby', 'Go', 'SQL'],
    'Frontend': ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'GraphQL', 'Redux'],
    'Backend': ['Node.js', 'Express', 'Rails', 'PostgreSQL', 'Redis', 'REST APIs'],
    'Cloud & DevOps': ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    'Tools': ['Git', 'Figma', 'Datadog', 'Jest', 'Cypress', 'Linear'],
  },
  projects: [
    {
      id: '1',
      name: 'OpenResume',
      description: 'An open-source resume builder with AI-powered suggestions and 10+ templates. Built with Next.js and OpenAI API.',
      link: 'github.com/alexchen/openresume',
      tech: ['Next.js', 'OpenAI', 'Tailwind', 'PostgreSQL'],
    },
    {
      id: '2',
      name: 'Streamline CLI',
      description: 'A developer productivity CLI tool to automate repetitive git and deployment workflows. 2,000+ GitHub stars.',
      link: 'github.com/alexchen/streamline',
      tech: ['Go', 'Docker', 'GitHub Actions'],
    },
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect — Professional',
      issuer: 'Amazon Web Services',
      date: 'Mar 2023',
      credentialId: 'AWS-SAP-2023-04821',
    },
    {
      id: '2',
      name: 'Google Cloud Professional Data Engineer',
      issuer: 'Google Cloud',
      date: 'Oct 2022',
      credentialId: 'GCP-DE-2022-73920',
    },
  ],
}

export const emptyData = {
  personal: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    website: '',
  },
  summary: '',
  experience: [],
  education: [],
  skills: {
    'Skills': [],
  },
  projects: [],
  certifications: [],
}
