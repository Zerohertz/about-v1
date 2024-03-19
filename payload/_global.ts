import { IGlobal } from '../component/common/IGlobal';

const title = 'About Hyogeun Oh (오효근)';
const description = 'About Hyogeun Oh';

export const _global: IGlobal.Payload = {
  favicon: 'favicon.ico',
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: '/preview.png',
          alt: 'OpenGraphImage.png',
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
