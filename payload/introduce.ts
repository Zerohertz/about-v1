import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '🌱 Continuously Growing Engineer',
    'Passionate about learning and growth, I manage a technical blog featuring over 200 articles on various topics, including Kubernetes, PyTorch, and Airflow. Additionally, I participate in more than 10 study groups. I take great pleasure in delving into the core principles of technology and leveraging them to address real-world challenges.',

    '🚀 Efficiency-Maximizing Engineer',
    'I strive to automate inefficient repetitive processes and seek more efficient methods for operational improvement. I have developed libraries for frequently used functionalities and built a sustainable deployment system through the construction of CI/CD pipelines.',

    '🫂 Collaboration-Focused Engineer',
    'I have integrated project source codes using Git Submodules to facilitate a smooth collaborative environment. Additionally, I have incorporated MLOps tools such as DVC and MLflow into team workflows, significantly improving our collaborative efforts on data and models, and fostering a productive team environment.',
  ],
  sign: 'Zerohertz',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
