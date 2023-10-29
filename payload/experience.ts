import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'AgileSoDA',
      link: 'http://www.agilesoda.com/',
      position: 'Machine Learning Research Engineer',
      startedAt: '2023-02',
      descriptions: ['TwinReader 연구개발', '화상 환자 진료보조 AI 서비스 개발'],
      skillKeywords: [
        'Python',
        'Docker',
        'Kubernetes',
        'Research',
        'Machine Learning',
        'Deep Learning',
      ],
    },
    {
      title: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      link: 'https://sites.google.com/view/simlabkonkuk',
      position: 'Research Student',
      startedAt: '2021-03',
      endedAt: '2023-02',
      descriptions: [
        'Advisor: Changwoo Lee',
        '다양한 공정에 대한 상태 진단 모델 연구개발',
        '실시간 모니터링을 위한 Graphic User Interface 개발',
        'Roll-to-Roll 연속 공정의 장력 및 온도에 따른 전산 유체 역학 (CFD) 시뮬레이션 수행',
      ],
      skillKeywords: ['Python', 'MATLAB', 'Ansys', 'Research', 'Machine Learning', 'Deep Learning'],
    },
    {
      title: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      link: 'https://sites.google.com/view/simlabkonkuk',
      position: 'Research Intern',
      startedAt: '2019-11',
      endedAt: '2021-02',
      descriptions: [
        'Advisor: Changwoo Lee',
        'Bearing 상태 진단 모델 및 Graphic User Interface 개발',
      ],
      skillKeywords: ['MATLAB', 'Research', 'Machine Learning', 'Deep Learning'],
    },
    {
      title: 'MRV Lab. (Medical Robotics and Virtual Reality Laboratory)',
      link: 'https://rvlab.konkuk.ac.kr/',
      position: 'Research Intern',
      startedAt: '2018-06',
      endedAt: '2019-11',
      descriptions: ['Advisor: Hoeryong Jung', 'Unreal Engine 기반 가상 현실 환경 구축'],
      skillKeywords: ['Unreal Engine', 'C++', 'Research'],
    },
  ],
};

export default experience;
