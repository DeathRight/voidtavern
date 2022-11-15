import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeading from '../../common/components/common/PageHeading';
import Projects from '../../common/utils/Projects';
import ProjectPage from '../../modules/ProjectPage';
import ProjectHeading from '../../modules/ProjectPage/ProjectHeading';

const ProjectRoutePage = ({ pId }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const project = Projects.find((p) => p.id === pId);
  if (!project) return <>How did you do this?</>;

  return (
    <ProjectPage project={project}>
      <PageHeading>
        <ProjectHeading />
      </PageHeading>
      {project.body}
    </ProjectPage>
  );
};

export default ProjectRoutePage;

export async function getStaticPaths() {
  return {
    paths: Projects.map((p) => ({ params: { pid: p.id.toString() } })),
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps<{ pId: number; [key: string]: any }> = async ({
  locale,
  params,
}) => {
  const _pid = params?.pid;
  const pId = Number(_pid);

  const project = Projects.find((p) => p.id === pId);

  if (!project) return { notFound: true };

  return {
    props: {
      pId,
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
    },
  };
};