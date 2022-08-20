import { IconCode, IconInfoCircle } from '@tabler/icons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next/types';
import { useId, useState } from 'react';
import Row from '../components/common/Row';
import StickyTabber, { SectionTabObj } from '../components/Index/StickyTabber';
import VoidTavernWelcome from '../components/Index/VoidTavernWelcome';

const ScrollTrackingGroup = {
  Container: dynamic(() => import('../components/ScrollTrackingGroup/Container')),
  Window: dynamic(() => import('../components/ScrollTrackingGroup/Window')),
  Section: dynamic(() => import('../components/ScrollTrackingGroup/Section')),
};

export default function HomePage() {
  const sections: SectionTabObj[] = [
    { id: 'about', icon: <IconInfoCircle /> },
    { id: 'lang', icon: <IconCode /> },
  ];

  const [scrolledTo, setScrolledTo] = useState('About');

  const uId = useId();
  return (
    <>
      <Row>
        <VoidTavernWelcome />
      </Row>
      <StickyTabber tabs={sections} value={scrolledTo} />
      <ScrollTrackingGroup.Container
        id={uId}
        onScrolledToChange={(id) => setScrolledTo(id.substring(uId.length + 1))}
      >
        <ScrollTrackingGroup.Window id={`${uId}.Window`} offset="35vh" />
        <ScrollTrackingGroup.Section id={`${uId}.about`}>
          <div id="about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan
            lacus vel facilisis volutpat est. Senectus et netus et malesuada. Duis ut diam quam
            nulla porttitor massa id neque aliquam. Semper risus in hendrerit gravida rutrum. Aenean
            sed adipiscing diam donec adipiscing tristique risus. Pretium quam vulputate dignissim
            suspendisse in. Orci eu lobortis elementum nibh tellus molestie. Sapien nec sagittis
            aliquam malesuada bibendum. Mauris cursus mattis molestie a iaculis at erat. Vulputate
            ut pharetra sit amet. Aliquet risus feugiat in ante metus dictum at. Tempor nec feugiat
            nisl pretium fusce. Aliquam malesuada bibendum arcu vitae. Montes nascetur ridiculus mus
            mauris. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Urna
            porttitor rhoncus dolor purus non enim. Consequat interdum varius sit amet mattis
            vulputate enim nulla. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
            Ullamcorper malesuada proin libero nunc consequat. Vel orci porta non pulvinar neque.
            Tellus rutrum tellus pellentesque eu tincidunt. At urna condimentum mattis pellentesque
            id nibh tortor. Accumsan lacus vel facilisis volutpat. Est ullamcorper eget nulla
            facilisi. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Praesent elementum
            facilisis leo vel fringilla est ullamcorper eget nulla. Ultricies mi eget mauris
            pharetra et. Volutpat est velit egestas dui id ornare arcu odio ut. Arcu cursus euismod
            quis viverra nibh cras pulvinar. Turpis egestas maecenas pharetra convallis posuere. Sit
            amet nisl purus in mollis nunc sed id. Lorem ipsum dolor sit amet consectetur adipiscing
            elit. Dolor magna eget est lorem ipsum dolor sit. Tempus imperdiet nulla malesuada
            pellentesque elit. Id diam vel quam elementum pulvinar. Ac ut consequat semper viverra
            nam libero justo laoreet sit. Justo nec ultrices dui sapien eget mi proin. Et pharetra
            pharetra massa massa. Integer vitae justo eget magna fermentum iaculis eu. Laoreet
            suspendisse interdum consectetur libero id faucibus. Aliquam ut porttitor leo a diam
            sollicitudin tempor id eu. Id aliquet risus feugiat in. A diam maecenas sed enim ut sem
            viverra aliquet. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Maecenas
            sed enim ut sem viverra aliquet. Molestie ac feugiat sed lectus vestibulum mattis
            ullamcorper velit sed. Non quam lacus suspendisse faucibus. Sed adipiscing diam donec
            adipiscing tristique risus nec feugiat in. At erat pellentesque adipiscing commodo elit
            at imperdiet dui. Sed odio morbi quis commodo odio aenean sed. Faucibus interdum posuere
            lorem ipsum. Varius duis at consectetur lorem donec massa sapien. Condimentum lacinia
            quis vel eros. Blandit massa enim nec dui nunc mattis enim. Neque viverra justo nec
            ultrices dui sapien. Id cursus metus aliquam eleifend mi. Neque convallis a cras semper
            auctor neque vitae tempus. Sit amet consectetur adipiscing elit pellentesque habitant
            morbi tristique senectus. Ultrices sagittis orci a scelerisque purus semper eget. Proin
            sed libero enim sed faucibus turpis in eu mi. Turpis egestas maecenas pharetra convallis
            posuere morbi leo urna molestie. Elementum nibh tellus molestie nunc non blandit massa
            enim nec. Cursus risus at ultrices mi. Non odio euismod lacinia at quis risus sed
            vulputate odio. Ut diam quam nulla porttitor massa id neque aliquam. Pulvinar etiam non
            quam lacus suspendisse faucibus interdum posuere lorem. Auctor eu augue ut lectus arcu.
            Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Vivamus at augue eget arcu
            dictum. Justo donec enim diam vulputate. Dignissim enim sit amet venenatis. Curabitur
            gravida arcu ac tortor dignissim convallis aenean. Fringilla phasellus faucibus
            scelerisque eleifend donec pretium vulputate sapien nec. Augue interdum velit euismod in
            pellentesque massa placerat duis. Pellentesque massa placerat duis ultricies lacus.
            Massa sapien faucibus et molestie ac feugiat sed lectus. Nibh sit amet commodo nulla
            facilisi nullam vehicula ipsum. Pulvinar proin gravida hendrerit lectus a. Sit amet
            luctus venenatis lectus magna. Eu scelerisque felis imperdiet proin. Nulla aliquet enim
            tortor at auctor urna nunc id. Feugiat in fermentum posuere urna nec tincidunt praesent
            semper. Aliquet nec ullamcorper sit amet risus nullam eget. Tristique senectus et netus
            et malesuada fames ac turpis. Consectetur adipiscing elit pellentesque habitant morbi
            tristique senectus et. Lorem ipsum dolor sit amet consectetur adipiscing. Sagittis orci
            a scelerisque purus semper eget duis. Odio facilisis mauris sit amet massa vitae.
            Pretium viverra suspendisse potenti nullam ac. Imperdiet sed euismod nisi porta lorem.
            Euismod quis viverra nibh cras pulvinar mattis nunc sed. Pretium vulputate sapien nec
            sagittis aliquam malesuada bibendum. Odio eu feugiat pretium nibh ipsum consequat. Enim
            blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Massa vitae tortor
            condimentum lacinia quis vel. Leo integer malesuada nunc vel risus commodo viverra. Quam
            pellentesque nec nam aliquam sem et tortor consequat id. Quis imperdiet massa tincidunt
            nunc pulvinar sapien et. Pellentesque id nibh tortor id aliquet lectus proin nibh. Elit
            ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Tincidunt arcu
            non sodales neque sodales ut. Id diam vel quam elementum pulvinar. Vulputate eu
            scelerisque felis imperdiet proin fermentum leo vel. Sed viverra ipsum nunc aliquet
            bibendum enim. Quis hendrerit dolor magna eget est. Id aliquet lectus proin nibh. Orci
            sagittis eu volutpat odio facilisis mauris sit. Luctus venenatis lectus magna fringilla
            urna porttitor rhoncus dolor. At quis risus sed vulputate odio ut enim blandit. Quam
            viverra orci sagittis eu volutpat. Egestas sed sed risus pretium quam vulputate. Duis
            convallis convallis tellus id. Faucibus vitae aliquet nec ullamcorper. Lectus nulla at
            volutpat diam ut venenatis. Nisi scelerisque eu ultrices vitae auctor. Vitae suscipit
            tellus mauris a. Turpis nunc eget lorem dolor sed viverra ipsum. Nulla pharetra diam sit
            amet nisl suscipit adipiscing. Dictum non consectetur a erat nam at lectus urna duis.
            Morbi tincidunt ornare massa eget egestas. Maecenas accumsan lacus vel facilisis
            volutpat est velit. Amet consectetur adipiscing elit pellentesque habitant morbi. Quis
            enim lobortis scelerisque fermentum dui faucibus in ornare quam. Aliquam malesuada
            bibendum arcu vitae elementum curabitur vitae nunc sed. Turpis egestas pretium aenean
            pharetra. Tristique senectus et netus et malesuada fames ac. Cursus mattis molestie a
            iaculis at erat pellentesque adipiscing. Sapien et ligula ullamcorper malesuada proin
            libero nunc consequat. Mi in nulla posuere sollicitudin aliquam ultrices. In iaculis
            nunc sed augue lacus viverra vitae congue. Tellus mauris a diam maecenas. Auctor augue
            mauris augue neque gravida in fermentum et. Augue lacus viverra vitae congue eu. Neque
            ornare aenean euismod elementum nisi quis eleifend quam. Arcu ac tortor dignissim
            convallis. Elit sed vulputate mi sit. Aliquet lectus proin nibh nisl. Orci ac auctor
            augue mauris augue neque gravida. Quis ipsum suspendisse ultrices gravida dictum fusce
            ut placerat orci. Integer feugiat scelerisque varius morbi enim nunc faucibus. Magna ac
            placerat vestibulum lectus. Ut ornare lectus sit amet est placerat in egestas erat. Sit
            amet purus gravida quis blandit turpis cursus in.
          </div>
        </ScrollTrackingGroup.Section>
        <ScrollTrackingGroup.Section id={`${uId}.lang`}>
          <div id="lang">
            Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Massa vitae tortor
            condimentum lacinia quis vel eros. Lacus suspendisse faucibus interdum posuere lorem
            ipsum dolor sit amet. Ipsum faucibus vitae aliquet nec ullamcorper sit. Ut tristique et
            egestas quis ipsum suspendisse ultrices gravida dictum. Tellus cras adipiscing enim eu
            turpis egestas pretium aenean. Nam at lectus urna duis convallis convallis tellus id.
            Dui accumsan sit amet nulla facilisi morbi. Interdum posuere lorem ipsum dolor sit amet
            consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas
            accumsan lacus vel facilisis volutpat est. Senectus et netus et malesuada. Duis ut diam
            quam nulla porttitor massa id neque aliquam. Semper risus in hendrerit gravida rutrum.
            Aenean sed adipiscing diam donec adipiscing tristique risus. Pretium quam vulputate
            dignissim suspendisse in. Orci eu lobortis elementum nibh tellus molestie. Sapien nec
            sagittis aliquam malesuada bibendum. Mauris cursus mattis molestie a iaculis at erat.
            Vulputate ut pharetra sit amet. Aliquet risus feugiat in ante metus dictum at. Tempor
            nec feugiat nisl pretium fusce. Aliquam malesuada bibendum arcu vitae. Montes nascetur
            ridiculus mus mauris. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse
            sed. Urna porttitor rhoncus dolor purus non enim. Consequat interdum varius sit amet
            mattis vulputate enim nulla. Imperdiet dui accumsan sit amet nulla facilisi morbi
            tempus. Ullamcorper malesuada proin libero nunc consequat. Vel orci porta non pulvinar
            neque. Tellus rutrum tellus pellentesque eu tincidunt. At urna condimentum mattis
            pellentesque id nibh tortor. Accumsan lacus vel facilisis volutpat. Est ullamcorper eget
            nulla facilisi. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Praesent
            elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ultricies mi eget
            mauris pharetra et. Volutpat est velit egestas dui id ornare arcu odio ut. Arcu cursus
            euismod quis viverra nibh cras pulvinar. Turpis egestas maecenas pharetra convallis
            posuere. Sit amet nisl purus in mollis nunc sed id. Lorem ipsum dolor sit amet
            consectetur adipiscing elit. Dolor magna eget est lorem ipsum dolor sit. Tempus
            imperdiet nulla malesuada pellentesque elit. Id diam vel quam elementum pulvinar. Ac ut
            consequat semper viverra nam libero justo laoreet sit. Justo nec ultrices dui sapien
            eget mi proin. Et pharetra pharetra massa massa. Integer vitae justo eget magna
            fermentum iaculis eu. Laoreet suspendisse interdum consectetur libero id faucibus.
            Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Id aliquet risus feugiat in.
            A diam maecenas sed enim ut sem viverra aliquet. Purus viverra accumsan in nisl nisi
            scelerisque eu ultrices. Maecenas sed enim ut sem viverra aliquet. Molestie ac feugiat
            sed lectus vestibulum mattis ullamcorper velit sed. Non quam lacus suspendisse faucibus.
            Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. At erat
            pellentesque adipiscing commodo elit at imperdiet dui. Sed odio morbi quis commodo odio
            aenean sed. Faucibus interdum posuere lorem ipsum. Varius duis at consectetur lorem
            donec massa sapien. Condimentum lacinia quis vel eros. Blandit massa enim nec dui nunc
            mattis enim. Neque viverra justo nec ultrices dui sapien. Id cursus metus aliquam
            eleifend mi. Neque convallis a cras semper auctor neque vitae tempus. Sit amet
            consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Ultrices
            sagittis orci a scelerisque purus semper eget. Proin sed libero enim sed faucibus turpis
            in eu mi. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.
            Elementum nibh tellus molestie nunc non blandit massa enim nec. Cursus risus at ultrices
            mi. Non odio euismod lacinia at quis risus sed vulputate odio. Ut diam quam nulla
            porttitor massa id neque aliquam. Pulvinar etiam non quam lacus suspendisse faucibus
            interdum posuere lorem. Auctor eu augue ut lectus arcu. Dolor sed viverra ipsum nunc
            aliquet bibendum enim facilisis. Vivamus at augue eget arcu dictum. Justo donec enim
            diam vulputate. Dignissim enim sit amet venenatis. Curabitur gravida arcu ac tortor
            dignissim convallis aenean. Fringilla phasellus faucibus scelerisque eleifend donec
            pretium vulputate sapien nec. Augue interdum velit euismod in pellentesque massa
            placerat duis. Pellentesque massa placerat duis ultricies lacus. Massa sapien faucibus
            et molestie ac feugiat sed lectus. Nibh sit amet commodo nulla facilisi nullam vehicula
            ipsum. Pulvinar proin gravida hendrerit lectus a. Sit amet luctus venenatis lectus
            magna. Eu scelerisque felis imperdiet proin. Nulla aliquet enim tortor at auctor urna
            nunc id. Feugiat in fermentum posuere urna nec tincidunt praesent semper. Aliquet nec
            ullamcorper sit amet risus nullam eget. Tristique senectus et netus et malesuada fames
            ac turpis. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus
            et. Lorem ipsum dolor sit amet consectetur adipiscing. Sagittis orci a scelerisque purus
            semper eget duis. Odio facilisis mauris sit amet massa vitae. Pretium viverra
            suspendisse potenti nullam ac. Imperdiet sed euismod nisi porta lorem. Euismod quis
            viverra nibh cras pulvinar mattis nunc sed. Pretium vulputate sapien nec sagittis
            aliquam malesuada bibendum. Odio eu feugiat pretium nibh ipsum consequat. Enim blandit
            volutpat maecenas volutpat blandit aliquam etiam erat velit. Massa vitae tortor
            condimentum lacinia quis vel. Leo integer malesuada nunc vel risus commodo viverra. Quam
            pellentesque nec nam aliquam sem et tortor consequat id. Quis imperdiet massa tincidunt
            nunc pulvinar sapien et. Pellentesque id nibh tortor id aliquet lectus proin nibh. Elit
            ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Tincidunt arcu
            non sodales neque sodales ut. Id diam vel quam elementum pulvinar. Vulputate eu
            scelerisque felis imperdiet proin fermentum leo vel. Sed viverra ipsum nunc aliquet
            bibendum enim. Quis hendrerit dolor magna eget est. Id aliquet lectus proin nibh. Orci
            sagittis eu volutpat odio facilisis mauris sit. Luctus venenatis lectus magna fringilla
            urna porttitor rhoncus dolor. At quis risus sed vulputate odio ut enim blandit. Quam
            viverra orci sagittis eu volutpat. Egestas sed sed risus pretium quam vulputate. Duis
            convallis convallis tellus id. Faucibus vitae aliquet nec ullamcorper. Lectus nulla at
            volutpat diam ut venenatis. Nisi scelerisque eu ultrices vitae auctor. Vitae suscipit
            tellus mauris a. Turpis nunc eget lorem dolor sed viverra ipsum. Nulla pharetra diam sit
            amet nisl suscipit adipiscing. Dictum non consectetur a erat nam at lectus urna duis.
            Morbi tincidunt ornare massa eget egestas. Maecenas accumsan lacus vel facilisis
            volutpat est velit. Amet consectetur adipiscing elit pellentesque habitant morbi. Quis
            enim lobortis scelerisque fermentum dui faucibus in ornare quam. Aliquam malesuada
            bibendum arcu vitae elementum curabitur vitae nunc sed. Turpis egestas pretium aenean
            pharetra. Tristique senectus et netus et malesuada fames ac. Cursus mattis molestie a
            iaculis at erat pellentesque adipiscing. Sapien et ligula ullamcorper malesuada proin
            libero nunc consequat. Mi in nulla posuere sollicitudin aliquam ultrices. In iaculis
            nunc sed augue lacus viverra vitae congue. Tellus mauris a diam maecenas. Auctor augue
            mauris augue neque gravida in fermentum et. Augue lacus viverra vitae congue eu. Neque
            ornare aenean euismod elementum nisi quis eleifend quam. Arcu ac tortor dignissim
            convallis. Elit sed vulputate mi sit. Aliquet lectus proin nibh nisl. Orci ac auctor
            augue mauris augue neque gravida. Quis ipsum suspendisse ultrices gravida dictum fusce
            ut placerat orci. Integer feugiat scelerisque varius morbi enim nunc faucibus. Magna ac
            placerat vestibulum lectus. Ut ornare lectus sit amet est placerat in egestas erat. Sit
            amet purus gravida quis blandit turpis cursus in. Etiam non quam lacus suspendisse
            faucibus interdum posuere lorem. Massa vitae tortor condimentum lacinia quis vel eros.
            Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Ipsum faucibus
            vitae aliquet nec ullamcorper sit. Ut tristique et egestas quis ipsum suspendisse
            ultrices gravida dictum. Tellus cras adipiscing enim eu turpis egestas pretium aenean.
            Nam at lectus urna duis convallis convallis tellus id. Dui accumsan sit amet nulla
            facilisi morbi. Interdum posuere lorem ipsum dolor sit amet consectetur.
          </div>
        </ScrollTrackingGroup.Section>
      </ScrollTrackingGroup.Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});
