import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 2년차 Machine Learning Engineer 오효근 입니다.',
    '다룰 수 있는 기술은 Python, Docker, Kubernetes, Jenkins 등이 있습니다.',
    'AI 기반 제품의 개발을 위해 지속적이며 유연한 협업이 가능한 MLOps 환경을 구축하는 것을 선호합니다.',
    '명료하지만 엄격한 코드를 개발하고 공유하며 협업하는 것에 행복을 느낍니다.',
  ],
  sign: 'Zerohertz',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
