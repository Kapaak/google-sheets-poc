import Formular from "./Formular/Formular";

interface Props {
  courseType: string;
}

const PageFormular = ({ courseType }: Props) => {
  const fixCourseType =
    courseType === "odpoledni-kurzy" ? "odpoledniKurzy" : courseType;
  return <Formular courseType={fixCourseType} />;
};
export default PageFormular;
