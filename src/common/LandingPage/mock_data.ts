import profileImage from '../../assets/img/MarnienCueva2.png'

const mock_data = [
  {
    id: 'landing',
    greeting: 'Hi, I am',
    name: 'Marnien Cueba',
    alt: 'Marnien Cueba profile',
    image: profileImage,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
    sint saepe molestiae perspiciatis aspernatur ullam, dolores ipsa
    beatae pariatur debitis? Enim nihil quam quaerat velit quas,
    assumenda veritatis quis repellendus.`,
    actions: [
      {
        id: 'hire-me',
        label: 'Hire Me',
        icon: '',
        onClick: () => {},
      },
      {
        id: 'portfolio',
        label: 'Portfolio',
        icon: '',
        onClick: () => {},
      }
    ]
  }
]
export default mock_data