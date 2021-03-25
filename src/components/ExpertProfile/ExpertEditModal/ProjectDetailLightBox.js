import React from "react";
import ifoslider1 from '../../app_assets/img/images/portfolios/gallery/1.jpg';
import ifoslider2 from '../../app_assets/img/images/portfolios/gallery/2.jpg';
import ifoslider3 from '../../app_assets/img/images/portfolios/gallery/3.jpg';
import ifoslider4 from '../../app_assets/img/images/portfolios/3.png';
import ifoslider5 from '../../app_assets/img/images/portfolios/4.png';
import Lightbox from "react-image-lightbox";
import { FaSearchPlus} from "react-icons/fa";

class ProjectDetailLightBox extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    ifoslider1, ifoslider2, ifoslider3, ifoslider4, ifoslider5,
  ]
}


render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <div>
         <a href="#">
          <FaSearchPlus className="fa fa-search-plus" onClick={()=>
          this.setState({ isOpen: true })
          }
          />
        </a>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </div>
    );
  }
}

export default ProjectDetailLightBox;