import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Konkuk University, Seoul, Korea',
      subTitle: 'M.S. in Mechanical Design and Production Engineering',
      startedAt: '2021-03',
      endedAt: '2023-02',
      descriptions: [
        { content: 'Thesis: A study on feature variable density for a highly efficient diagnosis model of rotary machine in roll-to-roll continuous process' },
        { content: 'Advisor: Changwoo Lee' },
        { content: 'GPA: 4.15 / 4.5' },
      ]
    },
    {
      title: 'Konkuk University, Seoul, Korea',
      subTitle: 'B.S. in Department of Mechanical Engineering',
      startedAt: '2017-03',
      endedAt: '2021-02',
      descriptions: [
        { content: 'Thesis: Smart Data-Based 3D Printer Fault Diagnosis System Through FDR' },
        { content: 'Advisor: Changwoo Lee' },
        { content: 'GPA: 3.72 / 4.5' },
      ]
    },
  ],
};

export default education;
