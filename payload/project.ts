import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'TwinReader 연구개발',
      startedAt: '2023-02',
      where: 'AgileSoDA',
      descriptions: [
        { content: '문서 영역 탐지 모델 개발' },
        { content: '회전된 문서에 대한 방향 분류 모델 및 정방향 전환 후처리 모듈 개발' },
        { content: 'STD (Scene Text Detection) 및 STS (Scene Text Spotting) 모델 개발' },
        { content: '이미지 전, 후처리 알고리즘 개선' },
        { content: '모델 배포를 위한 Triton Inference Server 개발' },
        { content: '전, 후처리 및 시각화를 위한 python 패키지 개발 및 알고리즘 개선' },
        // {
        //   content: 'Add Foo Feature in 2019',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
        //     { content: 'Integer non turpis ante' },
        //   ],
        // },
        // {
        //   content: 'Launched Bar Service in 2018',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
        //     {
        //       content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
        //     },
        //   ],
        // },
      ],
    },
    {
      title: '화상 환자 진료보조 AI 서비스 개발, 정보통신산업진흥원',
      startedAt: '2023-04',
      endedAt: '2023-11',
      where: 'AgileSoDA',
      descriptions: [
        { content: '화상 환자의 환부 Segmentation 및 심각도 진단 모델 개발' },
        { content: '모델 배포를 위한 Triton Inference Server와 API 설계 및 개발' },
        { content: '화상 환자의 치료 이후 환부 이미지 생성을 위한 데이터 구축 방안 컨설팅' },
      ],
    },
    {
      title: 'Kubernetes 기반 Home Server 구축',
      startedAt: '2023-08',
      endedAt: '2023-09',
      where: '',
      descriptions: [
        { content: 'Zerohertz/k8s-on-premise', weight: 'MEDIUM', href: 'https://github.com/Zerohertz/k8s-on-premise' },
        { content: 'Blog posts', href: 'https://zerohertz.github.io/tags/home-server/index.html' },
      ],
    },
    {
      title: '분류 모자이크',
      startedAt: '2023-01',
      endedAt: '2023-07',
      where: 'BOAZ',
      descriptions: [
        { content: 'Team-BoonMoSa', weight: 'MEDIUM', href: 'https://github.com/Team-BoonMoSa' },
        { content: 'Logo detection 모델 개발 및 MLOps를 위한 서버 구축' },
      ],
    },
    {
      title: '권취 롤(copper film) 내부 응력 분포를 고려한 Web handling 불량 개선 방안 연구, SK 넥실리스',
      startedAt: '2022-10',
      endedAt: '2023-01',
      where: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      descriptions: [
        { content: '제품 운송 진동, 충격에 따른 가속도 데이터 특징 분석' },
      ],
    },
    {
      title: '소형위성 분리용 어댑터 최적설계, 스페이스베이',
      startedAt: '2022-09',
      endedAt: '2023-01',
      where: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      descriptions: [
        { content: '모터 동특성 분석 모델 개발 및 최적화' },
      ],
    },
    {
      title: '이차전지전극을 위한 멀티코터가 구비된 지능형 롤투롤 코팅시스템 개발, 산업통상자원부',
      startedAt: '2022-05',
      endedAt: '2023-01',
      where: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      descriptions: [
        { content: 'Roll-to-Roll 연속 공정 내 편심 롤 진단을 위한 신호 처리 및 모델 개발' },
      ],
    },
    {
      title: '대면적 고효율 기능성 필름 대량 생산을 위한 스마트 인쇄 전자 제조 기술 개발, 한국연구재단',
      startedAt: '2022-12',
      endedAt: '2021-01',
      where: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      descriptions: [
        { content: 'Roll-to-Roll slot-die coating 공정의 코팅층 진단 모델 및 Graphic User Interface 개발' },
      ],
    },
    {
      title: '열주름 해석을 통한 보정 기술 및 정밀 장력제어 기술, LG 전자',
      startedAt: '2022-03',
      endedAt: '2022-12',
      where: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      descriptions: [
        { content: '롤 정렬도 불량에 따른 사행량 예측 모델 개발' },
      ],
    },
    {
      title: '웹 핸들링 기반 롤 배치 최적화 및 Tilting에 따른 사행/주름 분석, LG 에너지솔루션',
      startedAt: '2022-05',
      endedAt: '2022-12',
      where: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      descriptions: [
        { content: '롤 정렬도 불량에 따른 사행량 예측 모델 개발' },
      ],
    },
    {
      title: '자동차용 배터리 전극 소재 떨림 최소화를 위한 건조 시스템 해석 및 공기 부양 유닛 노즐 최적화, LG 에너지솔루션',
      startedAt: '2022-04',
      endedAt: '2022-11',
      where: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      descriptions: [
        { content: '소재 온도 분포 파악을 위한 열전도도 프로파일 개발' },
      ],
    },
    {
      title: 'R2R 인쇄 유연컴퓨터개발 연구센터, 한국연구재단',
      startedAt: '2021-01',
      endedAt: '2021-12',
      where: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      descriptions: [
        { content: 'Roll-to-Roll slot-die coating 공정의 meniscus vision data 기반 진행 방향 코팅층 두께 예측 모델 개발' },
        { content: 'Roll-to-Roll 공정의 장력 전달 모델 시뮬레이터 개발', href: 'https://github.com/Zerohertz/Roll-to-Roll-Simulation-GUI' },
        { content: 'Roll-to-Roll 공정의 수학적 사행 모델 시뮬레이터 개발', href: 'https://github.com/Zerohertz/Lateral-Dynamics-due-to-Roll-Misalignment' },
      ],
    },
    {
      title: '머신러닝 기반의 지능형 친환경 머서라이징 시스템 실증, 한국산업기술평가관리원',
      startedAt: '2021-04',
      endedAt: '2022-05',
      where: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      descriptions: [
        { content: 'Vision data 기반 머서라이징 공정 모니터링 시스템 개발' },
      ],
    },
    {
      title: '복합형상 부품가공용 스마트 컴팩트 라인센터 개발, 한국산업기술평가관리원',
      startedAt: '2021-01',
      endedAt: '2021-12',
      where: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      descriptions: [
        { content: 'Bearing 상태 진단 모델 및 Graphic User Interface 개발', href: 'https://github.com/Zerohertz/Bearing-condition-monitoring-GUI' },
      ],
    },
    {
      title: '실감형 실내 사이클링을 위한 2자유도 실내 사이클링 플랫폼 및 가상현실기반 고품질 사이클링 시뮬레이션기술 개발, 중소벤처기업진흥공단',
      startedAt: '2019-05',
      endedAt: '2020-05',
      where: 'MRV Lab. (Medical Robotics and Virtual Reality Laboratory)',
      descriptions: [
        { content: 'Unreal Engine 기반 가상 현실 환경 구축' },
      ],
    },
    {
      title: '스마트 커뮤니티 폴리싱 시스템(Googi) 개발, 한국연구재단',
      startedAt: '2018-06',
      endedAt: '2019-11',
      where: 'MRV Lab. (Medical Robotics and Virtual Reality Laboratory)',
      descriptions: [
        { content: 'Unreal Engine 기반 가상 현실 환경 구축' },
      ],
    },
  ],
};

export default project;
