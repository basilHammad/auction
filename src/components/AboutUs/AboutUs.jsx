import OrangeTitle from "../OrangeTitle/OrangeTitle";
import stl from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={`${stl.wrapper} container`}>
      <OrangeTitle text={"About Us"} />
      <div className={stl.container}>
        <div className={stl.fdiv}>
          <p>
            At our auction website, we pride ourselves on providing an
            unparalleled platform for both buyers and sellers. What sets us
            apart is our commitment to creating a seamless, user-friendly
            experience that fosters trust, transparency, and excitement in every
            transaction. With our intuitive interface, users can easily browse,
            bid, and win unique items from a diverse range of categories. Our
            dedication to security ensures a safe environment for all
            participants, guaranteeing the authenticity of items and
            facilitating smooth transactions. Whether you're a seasoned
            collector or a first-time bidder, our dynamic marketplace offers a
            vibrant community and endless opportunities to discover treasures,
            connect with fellow enthusiasts, and indulge in the thrill of the
            auction experience. Join us and unlock a world of possibilities,
            where every bid opens doors to exceptional finds and memorable
            moments.
          </p>
        </div>
        <div className={stl.sdiv}>
          <h2>Our Team</h2>
          <div className={stl.members}>
            <div className={stl.member}>
              <img
                src={"/images/omar.jpeg"}
                alt="img"
                className={stl.member_img}
              />
              <h4 className={stl.name}>Omar Hammad</h4>
            </div>
            <div className={stl.member}>
              <img
                src={"/images/hussam.jpeg"}
                alt=""
                className={stl.member_img}
              />
              <h4 className={stl.name}>Hussam Ibrahim</h4>
            </div>
            <div className={stl.member}>
              <img
                src={"/images/layan.jpeg"}
                alt=""
                className={stl.member_img}
              />
              <h4 className={stl.name}>Layan Isaa</h4>
            </div>
          </div>
        </div>
        <div className={stl.thdiv}>
          <p>
            You should know if you want to use our features you should be a
            member in our website, so you can sign up and login to use our
            features.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
