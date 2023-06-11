import React, { Component } from "react";
import './css/Services.css'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Enjoy complimentary cocktails during your stay.",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "Explore endless hiking trails in the surrounding area.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Take advantage of our free shuttle service to nearby attractions.",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info: "We offer a wide selection of beer options in our storage.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <h1 className="ser">services</h1>

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
