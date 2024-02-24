import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

export default function App() {
  const imgStyle = {
    height: "400px", // Set your desired fixed height here
    objectFit: "cover", // This property ensures the image covers the entire container
  };
  return (
    <MDBCarousel showControls fade>
      <MDBCarouselItem itemId={1}>
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
          className="d-block w-100 faded-rounded-img"
          style={imgStyle}
          alt="..."
        />
        <MDBCarouselCaption>
          <h5>If you can dream it, Mac can do it.</h5>
          <p>
            Get 3% Daily Cash back. And pay for your new Mac over 12 months,
            interest‑free when you choose to check out with Card Monthly
            Installments.
          </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img
          src="https://images.unsplash.com/photo-1616353071855-2c045c4458ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="d-block w-100 faded-rounded-img"
          style={imgStyle}
          alt="..."
        />
        <MDBCarouselCaption>
          <h5>Love the power. Love the price.</h5>
          <p>
            Get $180–$620 in credit toward iPhone 15 or iPhone 15 Pro when you
            trade in iPhone 11 or higher.
          </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img
          src="https://images.unsplash.com/photo-1558126319-c9feecbf57ee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="d-block w-100 faded-rounded-img"
          style={imgStyle}
          alt="..."
        />
        <MDBCarouselCaption>
          <h5>⌚️ Smarter. Brighter. Mightier.</h5>
          <p>It’s the ultimate device for a healthy life.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
