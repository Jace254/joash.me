export interface Project {
  name: string
  description: string
  year: string
  link: string
}
export const projects: Project[] = [
  {
    name: '100',
    description: '100 day challenge on design and development',
    year: '2024',
    link: 'https://100.joash.me',
  },
  {
    name: 'Beeetle Chatbot',
    description: 'A chatbot assitant for myself',
    year: '2024',
    link: 'https://chatbot.joash.me',
  },
  {
    name: 'CodeGround',
    description: 'Automated docs and coding playground',
    year: '2023',
    link: 'https://code.joash.me',
  },
  {
    name: 'SurNote',
    description: 'A text editor',
    year: '2023',
    link: 'https://sur.joash.me',
  },
]
