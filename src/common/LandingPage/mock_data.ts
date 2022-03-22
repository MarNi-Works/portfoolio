
import profileImage from '../../assets/img/MarnienCueva2.png'

const mock_data = {
  id: 'landing',
  greeting: 'Hi, I am',
  name: 'Marnien Cueba',
  description1: `Currently working as a Team Lead UI Designer at DNA Micro
  Software, Inc. Quick learner and love to explore new ideas
  and technologies. My key skills include: UI designing, Responsive
  Design, Wireframing using Mockflow. And love to explore UX for
  prototyping using Figma.`,
  description2: `My passion in designing is something I do in my free time which is
  the main reason that I spend hours creating spikes for future
  development.`,
  actions: [
    {
      id: 'hire-me',
      label: 'Hire Me',
      color: 'primary',
      icon: '',
      onClick: () => {},
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      color: 'primary',
      icon: '',
      onClick: () => {},
    }
  ],
  image: {
    alt: 'Marnien Cueba profile',
    src: profileImage,
  }
}
export default mock_data