import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '현재 AgileSoDA에서 전문연구요원으로 재직 중 이며 Computer Vision 분야의 다양한 인공지능 모델 (OCR, Segmentation)을 연구개발 및 서빙하고 있습니다.',
    'Data Engineering, DevOps, MLOps에 큰 관심이 있어 다양한 스택 (k8s, Airflow 등)을 공부 중에 있습니다.'
  ],
  sign: 'Zerohertz',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
