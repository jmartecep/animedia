import React, { Component } from "react";
import MetaBlock from "../../MetaBlock";
import ScrollSpyBlock from "../../ScrollSpyBlock";

class Show extends Component {
  render() {
    return (
      <div className="container row">
        <p>Show page</p>
        <ScrollSpyBlock />
        <MetaBlock />
        <div class="divider" />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          impedit iure excepturi sed esse sint quae, fugiat molestiae blanditiis
          pariatur quo ea sunt, totam vel voluptate aliquid cum vero velit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          possimus porro. Consequatur aut, alias, unde saepe delectus a cumque
          maiores tempore at illo dicta! Ipsum amet atque eius voluptates culpa?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          voluptate, nemo illum officia autem hic nesciunt tempora quam eius
          reprehenderit nisi nam odio. Esse soluta illum repellat commodi
          cupiditate dolor! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Soluta dolorem dolores eveniet labore molestiae maxime eos,
          repudiandae architecto ducimus sunt at suscipit veritatis eaque esse
          non nulla ipsum voluptatibus. Vel!
        </div>
        <div className="section col l8" id="dinosaurgoliath">
          <h2>Dinomite</h2>
          <div class="divider" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quas
          odio nemo veniam consequatur quibusdam incidunt voluptatibus dolor,
          enim, fugiat perferendis! Expedita magni voluptates numquam qui at
          deserunt doloribus suscipit?
        </div>
        <div className="section col l6" id="dinosaurgoliath-subheading">
          <h3>Subheading</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel
          sed exercitationem, animi quis hic eligendi nihil, placeat optio non
          maxime! Ad aliquam numquam eveniet facilis omnis voluptatem impedit
          excepturi?
        </div>
        <div class="divider" />
      </div>
    );
  }
}

export default Show;
