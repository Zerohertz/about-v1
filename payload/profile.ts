import { faBolt, faEnvelope, faSeedling, faScroll } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,
  image: 'profile.jpg',
  name: {
    title: 'Hyogeun Oh',
    small: '(오효근)',
  },
  contact: [
    {
      title: 'ohg3417@gmail.com',
      link: 'mailto:ohg3417@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'GitHub',
      link: 'https://github.com/Zerohertz',
      icon: faGithub,
    },
    {
      title: 'Tech Blog',
      link: 'https://zerohertz.github.io/',
      icon: faBolt,
    },
    {
      title: 'Resume',
      link: 'https://cloud.zerohertz.xyz/s/kHm6ckdnj9SH2pW',
      icon: faScroll,
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
    title: 'Greedy하게 발전하는 Machine Learning Engineer.',
    icon: faSeedling,
  },
};

export default profile;
