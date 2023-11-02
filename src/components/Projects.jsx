import React from "react"

export default function Projects(props) {

    const projects = props.projects.map(item => {
        return(
            <div className="projects__row">
                <div className="projects__row-img-cont">
                    <img
                        src={item.photo}
                        alt="Software Screenshot"
                        className="projects__row-img"
                        loading="lazy"
                    />
                </div>
                <div className="projects__row-content">
                    <h3 className="projects__row-content-title">{item.name}</h3>
                    <p className="projects__row-content-desc">
                        {item.desc}
                    </p>
                    <div className="project-details__links">
                        <a
                            href={item.live_link}
                            className="btn btn--med btn--theme project-details__links-btn"
                            target="_blank"
                        >
                            Live Link
                        </a>
                        <a
                            href={item.code_link}
                            className="btn btn--med btn--theme-inv project-details__links-btn"
                            target="_blank"
                        >
                            Code Link
                        </a>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <section id="projects" className="projects sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-bg">
                    <span className="heading-sec__main">Projects</span>
                    <span className="heading-sec__sub">
                        All my projects include links to the code and live version. Click the button to learn more about each one.
                    </span>
                </h2>

                <div className="projects__content">
                    {projects}
                </div>
            </div>
        </section>
    )
}