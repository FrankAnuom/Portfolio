import data from "../../data/index.json";


export default function MySkills(){
    return(
        <section className="skills--section" id="mySkills" color="yellow">
           <div className="portfolio--container">
            <p className="section--title">My Skills</p>
            <h2 className="skills--section--heading">
                My Expertise
            </h2>
           </div>
           <div className="skills--section--container">
            {data?.skills?.map((items, index) => (
                <div key={index} className="skills--section--card">
                    <div className="skills--section--img">
                        <img src={items.src} alt="Product chain"/>
                    </div>
                    <div className="skills--section--card--content">
                        <h3 className="skills--section--title">{items.title}</h3>
                        <p className="skills--section--description">{items.description}</p>
                    </div>
                </div>
            ))}
           </div>
        </section>    
        );
}