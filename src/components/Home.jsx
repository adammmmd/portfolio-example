import React from "react"

export default function Home(props) {

    const socmed = props.socmed.map(item => {
        return(
            <div className="home-hero__social">
                <a href={item.url} className="home-hero__social-icon-link">
                    <img
                        src={item.logo}
                        alt="icon"
                        className="home-hero__social-icon"
                    />
                </a>
            </div>
        )
    })

    return(
        <section className="home-hero">
            <div className="home-hero__content">
                <h1 className="heading-primary">Hey, My name is Adam Muhammad</h1>
                <div className="home-hero__info">
                <p className="text-primary">
                    I am a passionate frontend developer based in Jakarta, Indonesia. My specialities are <strong>React JS</strong> and <strong>Golang</strong>, and I love building apps that are delightful to use.
                </p>
                </div>
                <div className="home-hero__cta">
                <a href="./#projects" className="btn btn--bg">See my projects</a>
                </div>
            </div>
            <div className="home-hero__socials">
                {socmed}
            </div>
            <div className="home-hero__mouse-scroll-cont">
                <div className="mouse"></div>
            </div>
        </section>
    )
}