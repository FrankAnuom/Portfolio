import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
      <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        </div>

      <div className="portfolio--section--container">
        {data?.portfolio.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text--sm portfolio--link">
                <a
                  href={item.link}  // Add the link from your data
                  target="_blank"   // Open link in a new tab
                  rel="noopener noreferrer"
                >
                   {item.linkText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"  // Use camelCase for JSX attributes
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
