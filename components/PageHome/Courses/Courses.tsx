//components
import { Grid } from "@mui/material";
import Course from "./Course/Course";
//data
import { data } from "./Courses.data";

const Courses = () => {
  return (
    <Grid
      gap="20px"
      container={true}
      direction="column"
      alignItems="center"
      sx={{ flexDirection: { md: "row" } }}
    >
      {data.map((d, i) => (
        <Course
          key={i}
          link={d.link}
          name={d.name}
          image={d.image}
          path={d.path}
          description={d.description}
        />
      ))}
    </Grid>
  );
};
export default Courses;
