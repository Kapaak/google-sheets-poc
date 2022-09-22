import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import PageFormular from "../components/PageFormular/PageFormular";

interface IParams extends ParsedUrlQuery {
  courseType: string;
}

interface Props {
  courseType: string;
}

const CourseType = ({ courseType }: Props) => {
  return <PageFormular courseType={courseType} />;
};

export default CourseType;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { courseType } = ctx.params as IParams;

  return {
    props: { courseType },
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const paths = [
    { params: { courseType: "skolky" } },
    { params: { courseType: "skoly" } },
    { params: { courseType: "odpoledni-kurzy" } },
  ];

  return {
    paths,
    fallback: false,
  };
};
