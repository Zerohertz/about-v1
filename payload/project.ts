import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Development and CI/CD Pipeline Construction of Python Library',
      startedAt: '2023-11',
      where: 'Personal Project',
      descriptions: [
        {
          content: 'Zerohertz/zerohertzLib (GitHub)',
          href: 'https://github.com/Zerohertz/zerohertzLib',
          weight: 'MEDIUM',
        },
        {
          content: 'Established a Jenkins-based CI/CD pipeline.',
          href: 'https://github.com/Zerohertz/zerohertzLib/blob/v1.1.3/Jenkinsfile',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/284292801-35b6affc-eb9d-43c9-abf9-4c82b2963d39.png',
        },
        {
          content: 'Implemented documentation through Sphinx.',
          href: 'https://zerohertz.github.io/zerohertzLib/',
          postImage:
            'https://github.com/Zerohertz/Zerohertz/assets/42334717/a7adb2d3-defd-4cf6-956a-af46a0b31b29',
        },
        {
          content: 'Distributed the library via GitHub & PyPI.',
          href: 'https://pypi.org/project/zerohertzLib/',
          postImage:
            'https://github.com/Zerohertz/Zerohertz/assets/42334717/b2c20fd1-8cce-4117-84a4-76035336ef4f',
        },
        {
          content: 'Migrated CI/CD pipeline from Jenkins to GitHub Actions.',
          href: 'https://github.com/Zerohertz/zerohertzLib/actions',
          postImage:
            'https://github.com/Zerohertz/Zerohertz/assets/42334717/e310ad4e-aaed-4808-9067-fff71ea40fbf',
        },
      ],
    },
    {
      title: 'Python Library for Pre/Post-Processing, Visualization, and Model Backend',
      startedAt: '2023-10',
      where: 'AgileSoDA',
      descriptions: [
        {
          content:
            'Performed documentation of functions and classes within the library based on Docstring.',
        },
        {
          content: 'Maintained the integrity of the library through type hints and PyTest.',
        },
        {
          content:
            'Standardized the preprocessing of various document images and visualization of model inference results.',
        },
        {
          content:
            'Improved the post-processing speed of the text detection model through algorithm enhancements using Cython. (inference time decreased by 74.12%)',
          href: 'https://github.com/Zerohertz/pan_pp.pytorch/tree/SpeedImprovement',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/282500746-76966f28-efac-49cf-9a4d-3bc9560bad4c.png',
        },
        {
          content:
            'Developed a unified class and inheritance structure for Triton Inference Server.',
        },
      ],
    },
    {
      title: 'AI-based OCR Solution, TwinReader',
      startedAt: '2023-02',
      where: 'AgileSoDA',
      descriptions: [
        {
          content: 'Developed a Kubernetes-based Triton Inference Server for model deployment.',
        },
        {
          content:
            'Resolved source and version control challenges during Triton Inference Server deployment by improving the architecture using GitLab CI and Kubernetes.',
          postImage:
            'https://github.com/Zerohertz/Zerohertz/assets/42334717/6a906566-f23f-4eea-8781-f0473d12c413',
        },
        {
          content:
            'Fixed critical flaws in the Triton Inference Server. (GPU Memory reduced by 47.9%)',
          postImage:
            'https://github.com/Zerohertz/Zerohertz/assets/42334717/3f36b1fb-7213-4d79-b3dd-0a3938a5285a',
        },
        {
          content:
            'Enhanced inference time of the text detection model using TensorRT. (inference time decrease by 87.31%)',
          href: 'https://github.com/Zerohertz/PANPP/tree/TensorRT',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/282501186-e0440b91-cb4d-449e-a4ba-85d284fff658.png',
        },
        {
          content:
            'Solved misclassification issues of rotated documents through model structural improvements. (accuracy improved by 2.01%)',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/282508245-61cda1fc-671f-48b4-92e6-30754f70d1eb.png',
        },
        {
          content:
            'Developed models for document area detection, rotated document classification, and detection of text, signatures, checkboxes.',
        },
      ],
    },
    {
      title: 'Information Extraction Model Development for Trade Document Processing',
      startedAt: '2024-02',
      endedAt: '2024-05',
      where: 'AgileSoDA',
      descriptions: [
        {
          content:
            'Developed an AI OCR-based document classification pipeline for categorizing unstructured document data.',
        },
        {
          content: 'Accelerated data annotation through Label Studio SDK and pre-labeling.',
        },
        {
          content:
            'Developed a Streamlit-based GUI for reviewing through annotations with challenging requirements.',
        },
        {
          content:
            'Developed models tailored to the specific needs of clients and types of trade documents.',
        },
      ],
    },
    {
      title: 'AI-based Automotive Damage and Depth Recognition Product, TwinCar',
      startedAt: '2023-11',
      endedAt: '2024-02',
      where: 'AgileSoDA',
      descriptions: [
        { content: 'Developed a vehicle type classification model for PoC execution.' },
        {
          content:
            'Conducted research and development models for filter, part recognition, repair type, and damage type, along with the model inference pipeline.',
        },
        { content: 'Developed a demo page using Streamlit and deployed it on Kubernetes.' },
      ],
    },
    {
      title: 'AI Diagnostic Service for Burn Patients',
      startedAt: '2023-04',
      endedAt: '2023-11',
      where: 'AgileSoDA',
      descriptions: [
        {
          content:
            'Developed models for segmentation of burn areas and severity diagnosis in burn patients.',
        },
        {
          content:
            'Designed and developed an API for model deployment using Triton Inference Server.',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/278788717-4639cd97-0363-4d66-8f84-a1ade9a80177.png',
        },
      ],
    },
    {
      title: 'Construction of a Kubernetes Cluster',
      startedAt: '2023-08',
      endedAt: '2023-09',
      where: 'Personal Project',
      descriptions: [
        {
          content: 'Zerohertz/k8s-on-premise (GitHub)',
          weight: 'MEDIUM',
          href: 'https://github.com/Zerohertz/k8s-on-premise',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/279639181-6d0a07c4-a99f-43f3-8632-236ecac7ced9.png',
        },
        {
          content: 'Blog posts',
          href: 'https://zerohertz.github.io/tags/home-server/',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/260747675-647d4089-f58f-4a46-b580-ed2760f52623.png',
        },
      ],
    },
    {
      title: 'Mosaic Classification',
      startedAt: '2023-01',
      endedAt: '2023-07',
      where: 'BOAZ',
      descriptions: [
        {
          content: 'Team-BoonMoSa (GitHub)',
          weight: 'MEDIUM',
          href: 'https://github.com/Team-BoonMoSa',
          postImage:
            'https://user-images.githubusercontent.com/42334717/227575043-5c65230c-f283-46b0-a46c-0569ee20cd56.gif',
        },
        { content: 'Developed a YOLOv5 based logo segmentation model.' },
        {
          content: 'Constructed a model deployment server on Amazon EC2 Inf1.',
          postImage:
            'https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/253738363-d1cbc5e5-e0a1-4763-adeb-6657568a6a85.png',
        },
      ],
    },
    // {
    //   title: '',
    //   startedAt: '2018-06',
    //   endedAt: '2023-01',
    //   where: 'Konkuk University',
    //   descriptions: [
    //     {
    //       content:
    //         '권취 롤(copper film) 내부 응력 분포를 고려한 Web handling 불량 개선 방안 연구, SK 넥실리스',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 10 ~ 2023. 01)' },
    //         { content: '제품 운송 진동, 충격에 따른 가속도 데이터 특징 분석' },
    //       ],
    //     },
    //     {
    //       content: '미래형 센서를 위한 초정밀 대면적 생산시스템 전문 인력 양성, 한국연구재단',
    //       weight: 'BOLD',
    //       descriptions: [{ content: 'SiM Lab. (2021. 09 ~ 2023. 01)' }],
    //     },
    //     {
    //       content: '소형위성 분리용 어댑터 최적설계, 스페이스베이',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 09 ~ 2023. 01)' },
    //         { content: '모터 동특성 분석 모델 개발 및 최적화' },
    //       ],
    //     },
    //     {
    //       content:
    //         '이차전지전극을 위한 멀티코터가 구비된 지능형 롤투롤 코팅시스템 개발, 산업통상자원부',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 05 ~ 2023. 01)' },
    //         { content: 'Roll-to-Roll 연속 공정 내 편심 롤 진단을 위한 신호 처리 및 모델 개발' },
    //       ],
    //     },
    //     {
    //       content:
    //         '대면적 고효율 기능성 필름 대량 생산을 위한 스마트 인쇄 전자 제조 기술 개발, 한국연구재단',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'SiM Lab. (2021. 01 ~ 2022. 12)' },
    //         {
    //           content:
    //             'Roll-to-Roll slot-die coating 공정의 코팅층 진단 모델 및 Graphic User Interface 개발',
    //         },
    //       ],
    //     },
    //     {
    //       content: '열주름 해석을 통한 보정 기술 및 정밀 장력제어 기술, LG 전자',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 03 ~ 2022. 12)' },
    //         { content: '롤 정렬도 불량에 따른 사행량 예측 모델 개발' },
    //       ],
    //     },
    //     {
    //       content:
    //         '웹 핸들링 기반 롤 배치 최적화 및 Tilting에 따른 사행/주름 분석, LG 에너지솔루션',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 05 ~ 2022. 12)' },
    //         { content: '롤 정렬도 불량에 따른 사행량 예측 모델 개발' },
    //       ],
    //     },
    //     {
    //       content:
    //         '자동차용 배터리 전극 소재 떨림 최소화를 위한 건조 시스템 해석 및 공기 부양 유닛 노즐 최적화, LG 에너지솔루션',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'SiM Lab. (2022. 04 ~ 2022. 11)' },
    //         { content: '소재 온도 분포 파악을 위한 열전도도 프로파일 개발' },
    //       ],
    //     },
    //     {
    //       content: 'R2R 인쇄 유연컴퓨터개발 연구센터, 한국연구재단',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'SiM Lab. (2021. 06 ~ 2022. 05)' },
    //         {
    //           content:
    //             'Roll-to-Roll slot-die coating 공정의 meniscus vision data 기반 진행 방향 코팅층 두께 예측 모델 개발',
    //         },
    //         {
    //           content: 'Roll-to-Roll 공정의 장력 전달 모델 시뮬레이터 개발',
    //           href: 'https://github.com/Zerohertz/Roll-to-Roll-Simulation-GUI',
    //         },
    //         {
    //           content: 'Roll-to-Roll 공정의 수학적 사행 모델 시뮬레이터 개발',
    //           href: 'https://github.com/Zerohertz/Lateral-Dynamics-due-to-Roll-Misalignment',
    //         },
    //       ],
    //     },
    //     {
    //       content: '머신러닝 기반의 지능형 친환경 머서라이징 시스템 실증, 한국산업기술평가관리원',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'SiM Lab. (2021. 04 ~ 2022. 05)' },
    //         { content: 'Vision data 기반 머서라이징 공정 모니터링 시스템 개발' },
    //       ],
    //     },
    //     {
    //       content: '복합형상 부품가공용 스마트 컴팩트 라인센터 개발, 한국산업기술평가관리원',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'SiM Lab. (2021. 01 ~ 2021. 12)' },
    //         {
    //           content: 'Bearing 상태 진단 모델 및 Graphic User Interface 개발',
    //           href: 'https://github.com/Zerohertz/Bearing-condition-monitoring-GUI',
    //         },
    //       ],
    //     },
    //     {
    //       content:
    //         '실감형 실내 사이클링을 위한 2자유도 실내 사이클링 플랫폼 및 가상현실기반 고품질 사이클링 시뮬레이션기술 개발, 중소벤처기업진흥공단',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'MRV Lab. (2019. 05 ~ 2020. 05)' },
    //         {
    //           content: 'Unreal Engine 기반 가상 현실 환경 구축',
    //         },
    //       ],
    //     },
    //     {
    //       content: '스마트 커뮤니티 폴리싱 시스템(Googi) 개발, 한국연구재단',
    //       weight: 'BOLD',
    //       descriptions: [
    //         { content: 'MRV Lab. (2018. 06 ~ 2019. 11)' },
    //         {
    //           content: 'Unreal Engine 기반 가상 현실 환경 구축',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default project;
