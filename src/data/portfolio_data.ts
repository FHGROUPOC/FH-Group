import portfolio_img_1 from "https://res.cloudinary.com/dgtk4rthy/image/upload/v1737545201/FHGROUPOC/FABRICATION/gvsnioakxhnwt1je8st1.jpg";
import portfolio_img_2 from "https://res.cloudinary.com/dgtk4rthy/image/upload/v1737545202/FHGROUPOC/FABRICATION/vm2odm9gk5atuk2w2vri.jpg";
import portfolio_img_3 from "https://res.cloudinary.com/dgtk4rthy/image/upload/v1737545203/FHGROUPOC/FABRICATION/kgcltqxnrsork6vikxqq.jpg";
import portfolio_img_4 from "https://res.cloudinary.com/dgtk4rthy/image/upload/v1737545201/FHGROUPOC/FABRICATION/q8rxpkcsmkxtvavujhdl.jpg";
import portfolio_img_5 from "@/assets/img/project_successfull_5.jpg";
import { StaticImageData } from "next/image";

interface PortfolioDataType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}

const portfolio_data: PortfolioDataType[] = [
  {
    id: 1,
    img: portfolio_img_1,
    title: "Project Task Management",
    des: "Digital Services / App Design",
  },
  {
    id: 2,
    img: portfolio_img_2,
    title: "Project Task Management",
    des: "Digital Services / App Design",
  },
  {
    id: 3,
    img: portfolio_img_3,
    title: "Project Task Management",
    des: "Digital Services / App Design",
  },
  {
    id: 4,
    img: portfolio_img_4,
    title: "Project Task Management",
    des: "Digital Services / App Design",
  },
  {
    id: 5,
    img: portfolio_img_5,
    title: "Project Task Management",
    des: "Digital Services / App Design",
  },
];

export default portfolio_data;
