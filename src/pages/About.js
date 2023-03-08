import SecontNavbar from "../component/SecondNavbar";

function About() {
  return (
    <div>
      <SecontNavbar />
      <div className="w-100">
        <iframe
          src="https://mdmojahid.netlify.app/"
          frameborder="0"
          className="w-100"
          style={{ minHeight: `calc(100vh - 75px)` }}
          title="My portfolio"
        ></iframe>
      </div>
    </div>
  );
}

export default About;
