import stl from "./Footer.module.css";
const Footer = () => {
  const socialMediaLinks = [
    { name: "Facebook", link: "https://www.facebook.com/youraccount" },
    { name: "Twitter", link: "https://twitter.com/youraccount" },
    { name: "Instagram", link: "https://www.instagram.com/youraccount" },
  ];

  const phoneNumber = "+962787970995";
  const emailAddress = "omar.a.h1@hotmail.com";

  return (
    <footer className={stl.wrapper}>
      <div className={stl.socialmedia}>
        <h3>Follow Us</h3>
        <ul>
          {socialMediaLinks.map((socialMedia, index) => (
            <li key={index}>
              <a
                href={socialMedia.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialMedia.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={stl.contactinfo}>
        <h3>Contact Us</h3>
        <p>Phone: {phoneNumber}</p>
        <p>email: {emailAddress}</p>
      </div>
    </footer>
  );
};

export default Footer;
