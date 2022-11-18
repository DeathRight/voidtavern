import { Text } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import { useId } from 'react';
import PageBody from '../../../components/common/PageBody';
import PageSection from '../../../components/common/PageSection';
import { SectionTabObj } from '../../../components/common/StickyTabber';
import { TypeScript } from '../../Skills/Languages';
import { React } from '../../Skills/Libraries';
import { Project } from '../types';

const Body = () => {
  const uId = useId();
  const { t } = useTranslation('home');

  const tabs: SectionTabObj[] = [{ id: 'about', icon: <IconInfoCircle /> }];

  return (
    <PageBody id={uId} tabs={tabs} t={t}>
      <PageSection globalId={uId} t={t} id="about">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Hendrerit dolor magna eget est. Non odio euismod lacinia
          at quis risus sed. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi
          tincidunt. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla.
          Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Quisque
          egestas diam in arcu. Libero id faucibus nisl tincidunt eget. Elementum nibh tellus
          molestie nunc non blandit. Cras sed felis eget velit aliquet. Donec enim diam vulputate ut
          pharetra sit amet aliquam. In nibh mauris cursus mattis molestie a iaculis at erat. Congue
          mauris rhoncus aenean vel elit. Scelerisque in dictum non consectetur a erat nam at.
          Tempus iaculis urna id volutpat lacus laoreet non. Risus feugiat in ante metus dictum at
          tempor commodo ullamcorper. Auctor urna nunc id cursus. Viverra aliquet eget sit amet. Ut
          morbi tincidunt augue interdum velit. Ut tristique et egestas quis ipsum suspendisse
          ultrices gravida dictum. Egestas diam in arcu cursus euismod. Ornare quam viverra orci
          sagittis eu volutpat odio facilisis. Mauris vitae ultricies leo integer malesuada nunc vel
          risus commodo. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.
          Sodales ut etiam sit amet nisl purus in. Adipiscing elit ut aliquam purus sit amet luctus
          venenatis lectus. Orci ac auctor augue mauris augue neque gravida. Amet nisl purus in
          mollis nunc sed. Orci a scelerisque purus semper eget duis at tellus. Condimentum lacinia
          quis vel eros donec ac odio. Velit aliquet sagittis id consectetur. Mollis aliquam ut
          porttitor leo a diam sollicitudin tempor id. Consequat mauris nunc congue nisi vitae
          suscipit tellus mauris a. Quam id leo in vitae. Urna nunc id cursus metus aliquam. Neque
          egestas congue quisque egestas diam. Posuere lorem ipsum dolor sit. Accumsan sit amet
          nulla facilisi morbi tempus. Nunc sed blandit libero volutpat sed cras ornare arcu.
          Ultricies leo integer malesuada nunc vel risus. Dictum varius duis at consectetur lorem
          donec. Diam phasellus vestibulum lorem sed risus ultricies. Rutrum quisque non tellus orci
          ac auctor augue. In metus vulputate eu scelerisque felis imperdiet proin. Amet nulla
          facilisi morbi tempus iaculis. Interdum posuere lorem ipsum dolor sit amet. Cursus vitae
          congue mauris rhoncus aenean. Et leo duis ut diam quam nulla porttitor massa. Lectus nulla
          at volutpat diam ut venenatis tellus in. Sem nulla pharetra diam sit amet. Sit amet mattis
          vulputate enim nulla aliquet porttitor. Ipsum dolor sit amet consectetur. Neque sodales ut
          etiam sit amet nisl purus in mollis. Lacus sed viverra tellus in hac habitasse platea
          dictumst. Eget nunc lobortis mattis aliquam. Dignissim sodales ut eu sem integer vitae
          justo eget magna. Non pulvinar neque laoreet suspendisse. Varius duis at consectetur lorem
          donec massa sapien faucibus. Eu tincidunt tortor aliquam nulla. Nascetur ridiculus mus
          mauris vitae ultricies leo integer malesuada nunc. Mollis aliquam ut porttitor leo a diam
          sollicitudin tempor id. Mauris pellentesque pulvinar pellentesque habitant morbi tristique
          senectus et netus. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque
          dignissim. In eu mi bibendum neque egestas congue quisque egestas diam. Eu scelerisque
          felis imperdiet proin fermentum. Odio tempor orci dapibus ultrices. Purus faucibus ornare
          suspendisse sed nisi. In fermentum posuere urna nec tincidunt praesent. Faucibus in ornare
          quam viverra. Pretium quam vulputate dignissim suspendisse in. In hendrerit gravida rutrum
          quisque non tellus orci.
        </Text>
      </PageSection>
    </PageBody>
  );
};

const STGProject: Project = {
  id: 'stg',
  name: 'ScrollTrackingGroup Component',
  link: 'https://github.com/DeathRight/ScrollTrackingGroup',
  description: 'React component that detects if a "Section" overlaps with a "Window"',
  skills: [React, TypeScript],
  body: <Body />,
};

export default STGProject;
