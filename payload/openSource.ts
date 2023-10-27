import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Awesome 병역 특례',
      descriptions: [
        {
          content: '전문연구요원을 위한 데이터 적재 및 시각화',
          weight: 'MEDIUM',
          href: 'https://github.com/Zerohertz/awesome-jmy',
          postImage: 'https://img.shields.io/github/stars/Zerohertz/awesome-jmy.svg?style=popout',
        },
        {
          content: '산업기능요원을 위한 데이터 적재 및 시각화',
          weight: 'MEDIUM',
          href: 'https://github.com/Zerohertz/awesome-sgy',
          postImage: 'https://img.shields.io/github/stars/Zerohertz/awesome-sgy.svg?style=popout',
        },
      ],
    },
    {
      title: 'SPTSv2',
      descriptions: [
        {
          content: 'bytedance/SPTSv2',
          weight: 'MEDIUM',
          href: 'https://github.com/bytedance/SPTSv2',
          postImage: 'https://img.shields.io/github/stars/bytedance/SPTSv2.svg?style=popout',
        },
        { content: 'Tensor 차원의 오류 해결 및 일반화' },
        { content: '예측, 평가, 시각화에 대한 코드 일반화' },
      ],
    },
  ],
};

export default openSource;
