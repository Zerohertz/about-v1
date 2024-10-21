import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Technical Blog\n(zerohertz.github.io)',
      descriptions: [
        {
          content:
            'Customized a technical blog based on the Hexo NexT theme to document and share solutions to challenges encountered during personal learning and professional work.',
          weight: 'REGULAR',
          href: 'https://github.com/Zerohertz/zerohertz.github.io',
        },
        {
          content:
            'Achieved 1,500 MAU and 2,600 monthly page views by consistently writing over 200 posts since 2018.',
          weight: 'REGULAR',
          href: 'https://zerohertz.github.io/',
        },
      ],
    },
    {
      title: 'Awesome 병역 특례',
      descriptions: [
        {
          content: 'awesome-jmy',
          weight: 'REGULAR',
          href: 'https://github.com/Zerohertz/awesome-jmy',
          postImage: 'https://img.shields.io/github/stars/Zerohertz/awesome-jmy.svg?style=popout',
        },
        {
          content: 'awesome-sgy',
          weight: 'REGULAR',
          href: 'https://github.com/Zerohertz/awesome-sgy',
          postImage: 'https://img.shields.io/github/stars/Zerohertz/awesome-sgy.svg?style=popout',
        },
      ],
    },
    {
      title: 'bytedance/SPTSv2',
      descriptions: [
        {
          content: 'Resolving Python dependencies.',
          weight: 'REGULAR',
          href: 'https://github.com/bytedance/SPTSv2/pull/1',
        },
        {
          content:
            'Solving tensor dimension erros and generalizing prediction, evaluation, and visualization.',
          weight: 'REGULAR',
          href: 'https://github.com/bytedance/SPTSv2/pull/3',
          postImage: 'https://img.shields.io/github/stars/bytedance/SPTSv2.svg?style=popout',
        },
      ],
    },
  ],
};

export default openSource;
