import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import PresentationRow from './row';
import { IPublication } from './IPublication';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IPublication.Payload;

export const Publication = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="PUBLICATION & PATENT">
      <PresentationRow payload={payload} />
    </CommonSection>
  );
}
