import { IPublication } from '../component/publication/IPublication';

const publication: IPublication.Payload = {
  disable: false,

  list: [
    {
      title: '',
      subTitle: '',
      at: '2023-09',
      descriptions: [
        {
          content:
            'Patent: Classification and Redundancy Quantitative Evaluation Algorithm for Highly Efficient Fault Diagnosis of Rotary Machines in Roll-to-Roll systems',
          weight: 'BOLD',
          href: 'http://kpat.kipris.or.kr/kpat/biblioa.do?method=biblioFrame',
          descriptions: [
            {
              content: 'Application number (date): 1020220017419 (2022.02.10)',
              weight: 'MEDIUM',
            },
            {
              content: 'Grant number (date): 1025842600000 (2023.09.25)',
              weight: 'MEDIUM',
            },
          ],
        },
      ],
    },
    {
      title: '',
      subTitle: '',
      at: '2023-01',
      descriptions: [
        {
          content:
            'SCI(E): Classification and Redundancy Quantitative Evaluation Algorithm for Highly Efficient Fault Diagnosis of Rotary Machines in Roll-to-Roll systems',
          weight: 'BOLD',
          href: 'https://www.sciencedirect.com/science/article/pii/S0263224122014889?via=ihub',
          descriptions: [
            {
              content:
                'Author: Hyogeun Oh, Jaehyun Noh, Changbeom Joo, Gyoujin Cho, Jeongdai Jo, Changwoo Lee',
              weight: 'MEDIUM',
            },
            {
              content: 'Journal: Measurement [JCR Top 17.19%]',
              weight: 'MEDIUM',
            },
          ],
        },
      ],
    },
    {
      title: '',
      subTitle: '',
      at: '2022-04',
      descriptions: [
        {
          content:
            'SCI(E): Feature Selection Algorithm Based on Density and Distance for Fault Diagnosis Applied to a Roll-to-Roll Manufacturing System',
          weight: 'BOLD',
          href: 'https://academic.oup.com/jcde/article/9/2/805/6573580',
          descriptions: [
            {
              content: 'Author: Hyogeun Oh, Yoonjae Lee, Jongsu Lee, Changbeom Joo, Changwoo Lee',
              weight: 'MEDIUM',
            },
            {
              content: 'Journal: Journal of Computational Design and Engineering [JCR Top 10.87%]',
              weight: 'MEDIUM',
            },
          ],
        },
      ],
    },
  ],
};

export default publication;
