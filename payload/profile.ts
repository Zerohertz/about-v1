import { faBolt, faEnvelope, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Hyogeun Oh',
    small: '(Zerohertz)',
  },
  contact: [
    {
      title: 'ohg3417@gmail.com',
      link: 'mailto:ohg3417@gmail.com',
      icon: faEnvelope,
    },
    // {
    //   title: 'Curriculum Vitae',
    //   link: '',
    //   icon: faScroll,
    // },
    {
      title: 'GitHub @Zerohertz',
      link: 'https://github.com/Zerohertz',
      icon: faGithub,
    },
    {
      title: 'Tech Blog',
      link: 'https://zerohertz.github.io/',
      icon: faBolt,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/hyogeun-oh-67470b242/',
      icon: faLinkedin,
    },
    {
      title: 'Google Scholar',
      link: 'https://scholar.google.com/citations?user=TxiJyc0AAAAJ',
      icon: faGoogle,
    },
  ],
  notice: {
    title: "Greedy하게 발전하는 Machine Learning Engineer.",
    icon: faSeedling,
  },
};

export default profile;
