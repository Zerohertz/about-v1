import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 2년차 Machine Learning Engineer 오효근 입니다.',

    '🌱 지속적으로 성장하는 엔지니어',
    '배움과 성장에 대한 열정으로 기술 블로그를 운영하며 Kubernetes, PyTorch, Airflow 등의 다양한 주제로 200개 이상의 글을 작성해왔고 10개 이상의 스터디를 진행했습니다. 기술의 본질을 이해하고 이를 실제 문제 해결에 적용하는 과정에서 큰 성취감을 느낍니다.',

    '🚀 효율성을 극대화하는 엔지니어',
    '비효율적인 반복 프로세스를 자동화하거나 효율적인 방법을 모색하여 개선하는 것을 추구합니다. 자주 사용하는 기능들을 패키지화 하고 CI/CD 파이프라인 구축을 통해 지속 가능한 배포 시스템을 구축했습니다.',

    '🫂 협업을 중시하는 엔지니어',
    '많은 프로젝트들이 통합된 제품의 소스 코드를 Git Submodule로 구조화하여 원활한 협업 환경을 구축했습니다. DVC, MLflow와 같은 MLOps 도구들을 팀 환경에 통합함으로써 데이터와 모델에 대한 협업을 원활하게 진행할 수 있는 환경을 조성하기 위해 노력했습니다.'
  ],
  sign: 'Zerohertz',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
