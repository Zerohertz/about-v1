import { IEtc } from '../component/etc/IEtc';

const etc: IEtc.Payload = {
  disable: false,

  list: [
    {
      title: 'CKA',
      subTitle: 'Certified Kubernetes Administrator',
      startedAt: '2024-05',
      endedAt: '2026-05',
    },
    {
      title: '전문연구요원',
      subTitle: 'AgileSoDA',
      startedAt: '2023-02',
      endedAt: '2026-02',
    },
    {
      title: 'BOAZ 19기 수료 (분석 부문)',
      subTitle: '국내 최초 빅데이터 동아리',
      startedAt: '2022-07',
      endedAt: '2023-07',
      descriptions: [
        {
          content: 'Study 및 Project (GitHub)',
          href: 'https://github.com/stars/Zerohertz/lists/99-boaz',
        },
      ],
    },
  ],
};

export default etc;
