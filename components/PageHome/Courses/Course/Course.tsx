import NextLink from "next/link";
//styles
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import * as S from "./Course.style";
//interface
import { ICourse } from "../Courses.interface";

interface Props {
  name: ICourse["name"];
  path: ICourse["path"];
  link: ICourse["link"];
  image: ICourse["image"];
  description: ICourse["description"];
}

const Course = ({ image, link, name, path, description }: Props) => {
  return (
    <S.Course>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={`obrazek ${name}`}
      />
      <S.CardContainer
        pl={1.4}
        pr={1.4}
        display="flex"
        flexDirection="column"
        flex="1"
        sx={{ minHeight: { md: "13rem" } }}
      >
        <CardContent sx={{ padding: "1rem .6rem" }}>
          <Typography variant="h6" component="h2" marginBottom="0">
            {name}
          </Typography>
        </CardContent>
        <CardContent sx={{ padding: "1rem .6rem" }}>
          <Typography variant="body2" paragraph marginBottom="0">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <NextLink href={link} passHref>
            <Link underline="none">
              <Button size="small" variant="outlined">
                přihlásit se
              </Button>
            </Link>
          </NextLink>
        </CardActions>
      </S.CardContainer>
    </S.Course>
  );
};
export default Course;
