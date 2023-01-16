import React from 'react'
import "./Servicess.css";

const Servicess = () => {

      const data = [
        {
          id: 1,
          name: "Development",
          img: "https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          icon: "assets/twitter.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "UI/UX DESIGNER",
          img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          icon: "assets/youtube.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "CREATIVE/STRATEGIES",
          img: "https://images.unsplash.com/photo-1495291916458-c12f594151e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          icon: "assets/linkedin.png",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];

    return (
      <div className="Servicess" id="services">
        <h1>Services</h1>
        <div className="container">
          {data.map((d) => (
            <div className={d.featured ? "card featured" : "card"}>
              <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img className="user" src={d.img} alt="" />
                <img className="right" src={d.icon} alt="" />
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Servicess