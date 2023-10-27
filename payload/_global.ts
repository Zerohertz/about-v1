import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.png';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume: Hyogeun Oh (Zerohertz)';
const description = "Hyogeun Oh's Resume";

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Hyogeun',
        lastName: 'Oh',
        username: 'Zerohertz',
        gender: 'male',
      },
    },
  },
};
