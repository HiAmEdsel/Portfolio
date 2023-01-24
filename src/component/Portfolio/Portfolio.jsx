import { useEffect, useState } from "react";
import "./Portfolio.css";
import PortfolioList from "../PortfolioList/PortfolioList.jsx"
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
   const list = [
     {
       id: "featured",
       title: "Featured",
     },
     {
       id: "web",
       title: "Activities",
     },
     {
       id: "mobile",
       title: "Exercises",
     },
     {
       id: "design",
       title: "Design",
     },
     {
       id: "content",
       title: "Content",
     },
   ];
   useEffect(() => {
     switch (selected) {
       case "featured":
         setData(featuredPortfolio);
         break;
       case "web":
         setData(webPortfolio);
         break;
       case "mobile":
         setData(mobilePortfolio);
         break;
       case "design":
         setData(designPortfolio);
         break;
       case "content":
         setData(contentPortfolio);
         break;
       default:
         setData(featuredPortfolio);
     }
   }, [selected]);
  return (
    <>
    <section id="portfolio"></section>
    <secion className="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </secion>
    </>
  );
};

export default Portfolio;