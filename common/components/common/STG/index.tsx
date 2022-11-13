import { ContainerProps, SectionProps, WindowProps } from '@deathright/react-scrolltrackinggroup';
import STG from '@deathright/react-scrolltrackinggroup/ScrollTrackingGroup';
import useIsClient from '../../../hooks/useIsClient';

const Container = (props: ContainerProps) => {
  const isClient = useIsClient();

  return isClient ? <STG.Container {...props} /> : <>{props.children}</>;
};

const Section = (props: SectionProps) => {
  const isClient = useIsClient();

  return isClient ? <STG.Section {...props} /> : <>{props.children}</>;
};

const Window = (props: WindowProps) => {
  const isClient = useIsClient();

  return isClient ? <STG.Window {...props} /> : <></>;
};

export default { Container, Section, Window };
