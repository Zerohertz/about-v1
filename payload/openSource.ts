import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Awesome 병역 특례',
      descriptions: [
        {
          content: '전문연구요원을 위한 데이터 적재 및 시각화',
          weight: 'REGULAR',
          href: 'https://github.com/Zerohertz/awesome-jmy',
          postImage: 'https://img.shields.io/github/stars/Zerohertz/awesome-jmy.svg?style=popout',
        },
        {
          content: '산업기능요원을 위한 데이터 적재 및 시각화',
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
          content: 'Python 의존성 해결',
          weight: 'REGULAR',
          href: 'https://github.com/bytedance/SPTSv2/pull/1',
        },
        {
          content: 'Tensor 차원의 오류 해결 및 예측, 평가, 시각화에 대한 일반화',
          weight: 'REGULAR',
          href: 'https://github.com/bytedance/SPTSv2/pull/3',
          postImage: 'https://img.shields.io/github/stars/bytedance/SPTSv2.svg?style=popout',
        },
      ],
    },
  ],
};

export default openSource;
