export type CourseData = {
  name: string;
  sheetId: string;
};

export interface ICoursesData {
  [key: string]: CourseData;
}

export const data: ICoursesData = {
  skolky: {
    name: "Školky",
    sheetId: "0",
  },
  skoly: {
    name: "Školy",
    sheetId: "406637276",
  },
  odpoledniKurzy: {
    name: "Odpolední kurzy",
    sheetId: "550950779",
  },
};

//budu vybirat stylem ... routerem dostanu /skolky .. oddelam lomitko
//pak budu hledat, kde data["skolky"]
