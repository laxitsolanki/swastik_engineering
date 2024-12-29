import React from 'react';
import './Machine.css';
import ranishowtools from '../assets/ranishowtools.jpg'; // Local image import
import schunktoolmachine from '../assets/schunktoolmachine.webp';
import GUHRINGtool from '../assets/GUHRINGtool.jpg';
import tsi_power from '../assets/TSI_Power.jpg';
const Machine = () => {
  return (
    <div>
      <div className="container" style={{marginTop:"20px"}}>
  <div className="blog-row">
    <div className="blog">
      <div className="blog-image">
        <img
          src={ranishowtools}
          alt="Blog Image 1"
        />
        <div className="date">June 10, 2024</div>
      </div>
      <div className="blog-content">
        <h2>Blog Post 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
          metus vel est fermentum consectetur.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
    <div className="blog">
      <div className="blog-image">
        <img
          src={schunktoolmachine}
          alt="Blog Image 2"
        />
        <div className="date">June 11, 2024</div>
      </div>
      <div className="blog-content">
        <h2>Blog Post 2</h2>
        <p>
          Nullam vehicula turpis in tellus lacinia euismod. Proin tristique arcu
          vel ullamcorper fermentum.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
    <div className="blog">
      <div className="blog-image">
        <img
          src={GUHRINGtool}
          alt="Blog Image 3"
        />
        <div className="date">June 12, 2024</div>
      </div>
      <div className="blog-content">
        <h2>Blog Post 3</h2>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
  <div className="blog-row">
    <div className="blog">
      <div className="blog-image">
        <img
          src={tsi_power}
          alt="Blog Image 4"
        />
        <div className="date">June 13, 2024</div>
      </div>
      <div className="blog-content">
        <h2>Blog Post 4</h2>
        <p>
          Etiam nec justo euismod, maximus dui in, posuere nunc. Phasellus
          mollis felis sed felis ullamcorper.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
    <div className="blog">
      <div className="blog-image">
        <img
          src="https://denizhalil.com/wp-content/uploads/2024/05/End-to-End-Encryption-Implementation-and-Practical-Code-1024x580.png"
          alt="Blog Image 5"
        />
        <div className="date">June 14, 2024</div>
      </div>
      <div className="blog-content">
        <h2>Blog Post 5</h2>
        <p>
          Curabitur dignissim quam a felis rhoncus, non sagittis nunc ultricies.
          Sed vel massa semper, egestas.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
    <div className="blog">
      <div className="blog-image">
        <img
          src="https://denizhalil.com/wp-content/uploads/2024/05/recommendations-for-learning-cryptography-1024x580.png"
          alt="Blog Image 6"
        />
        <div className="date">June 15, 2024</div>
      </div>
      <div className="blog-content">
        <h2>Blog Post 6</h2>
        <p>
          Donec mattis libero sit amet dui vehicula, vel suscipit nulla aliquam.
          Fusce in ex nec est dapibus.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</div>

    </div>

  );
};

export default Machine;
