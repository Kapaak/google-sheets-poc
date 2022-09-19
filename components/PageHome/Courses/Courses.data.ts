import { ICourse } from "./Courses.interface";

export const data: ICourse[] = [
  {
    name: "Školky",
    path: "skolky",
    link: "/skolky",
    image: "/images/kindergarden.jpg",
    description:
      "Cílem je neplavce zbavit strachu, položit na vodu s hlavou pod vodou na bříšku a zakopat.",
  },
  {
    name: "Školy",
    path: "skoly",
    link: "/skoly",
    image: "/images/school.jpg",
    description:
      "Cílem je plavce naučit základům plavání. Děti již trochu plavat umí. Našim úkolem je naučit kraul a znak.",
  },
  {
    name: "Odpolední kurzy",
    path: "odpoledni-kurzy",
    link: "/odpoledni-kurzy",
    image: "/images/course.jpg",
    description:
      "Děti se zde mohou učit plavat již od 5 do 17 let a potom přejít do závodního plavání.",
  },
];
