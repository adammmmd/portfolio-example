import React from "react"

export default function Footer(props) {

    const socmed = props.socmed.map(item => {
        return(
            <a target="_blank" rel="noreferrer" href={item.url}>
                <img
                    className="main-footer__icon"
                    src={item.logo}
                    alt="icon"
                />
            </a>
        )
    })

    return(
        <footer className="main-footer">
            <div className="main-container">
                <div className="main-footer__upper">
                    <div className="main-footer__row main-footer__row-1">
                        <h2 className="heading heading-sm main-footer__heading-sm">
                            <span>Social</span>
                        </h2>
                        <div className="main-footer__social-cont">
                            {socmed}
                        </div>
                    </div>
                    <div className="main-footer__row main-footer__row-2">
                        <h4 className="heading heading-sm text-lt">Adam Muhammad</h4>
                        <p className="main-footer__short-desc">
                            
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}