export type CourseName = "Školky" | "Školy" | "Odpolední kurzy";
export type CoursePath = "skolky" | "skoly" | "odpoledni-kurzy";

export interface ICourse {
  name: CourseName;
  path: CoursePath;
  link: string;
  image: string;
  description: string;
}
