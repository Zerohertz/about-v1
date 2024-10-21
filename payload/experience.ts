import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Tmax WAPL',
      link: 'https://tmaxcore.ai/',
      position: 'Backend Engineer',
      startedAt: '2024-09',
      descriptions: [
        'Developed and deployed backend infrastructure for Tmax WAPL, a comprehensive collaboration platform aimed at improving workplace efficiency and enabling real-time communication, based on a microservices architecture (MSA) within an 11-member team.',
        'Implemented scheduling functionality utilizing a Netty-based in-house Java backend framework, supporting the efficient creation, deletion, and retrieval of schedules.',
      ],
      skillKeywords: ['Java', 'Tibero', 'Docker', 'Kubernetes'],
    },
    {
      title: 'AgileSoDA',
      link: 'http://www.agilesoda.com/',
      position: 'Machine Learning Research Engineer',
      startedAt: '2023-02',
      endedAt: '2024-09',
      descriptions: [
        'Managed the entire lifecycle of machine learning services (modeling, training, deployment) and oversaw Kubernetes-based IDC infrastructure within an 11-member team.',
        'Developed and deployed various models for text, signature, and checkbox detection, as well as information extraction, for the AI optical character recognition (OCR) product TwinReader.',
        'Developed a Python backend for model serving and optimized pipelines to enhance efficiency.',
        'Resolved source and version control issues during Triton Inference Server deployment by improving the architecture using GitLab CI and Kubernetes.',
        'Executed AI projects and proof of concept (PoC) to meet client specifications.',
      ],
      skillKeywords: ['Python', 'Docker', 'Kubernetes', 'Research', 'Machine Learning'],
    },
    {
      title: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      link: 'https://sites.google.com/view/simlabkonkuk',
      position: 'Research Student',
      startedAt: '2021-03',
      endedAt: '2023-02',
      descriptions: [
        'Conducted research and development on diagnostic models for monitoring various process conditions.',
        'Developed a graphical user interface (GUI) for real-time monitoring.',
        'Performed computational fluid dynamics (CFD) simulations based on tension and temperature in roll-to-roll continuous processes.',
      ],
      skillKeywords: ['Python', 'C++', 'MATLAB', 'Ansys', 'Research', 'Machine Learning'],
    },
    {
      title: 'SiM Lab. (Smart intelligent Manufacturing system Laboratory)',
      link: 'https://sites.google.com/view/simlabkonkuk',
      position: 'Research Intern',
      startedAt: '2019-11',
      endedAt: '2021-02',
      descriptions: ['Developed bearing condition diagnostic model and graphic user interface.'],
      skillKeywords: ['MATLAB', 'Research', 'Machine Learning'],
    },
    {
      title: 'MRV Lab. (Medical Robotics and Virtual Reality Laboratory)',
      link: 'https://rvlab.konkuk.ac.kr/',
      position: 'Research Intern',
      startedAt: '2018-06',
      endedAt: '2019-11',
      descriptions: ['Developed virtual reality environments based on C++ and Unreal Engine.'],
      skillKeywords: ['Unreal Engine', 'C++', 'Research'],
    },
  ],
};

export default experience;
