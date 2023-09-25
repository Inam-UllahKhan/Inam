import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export const Fifth_Slides = () => {
    const [loading, setLoading] = useState(true);
    // useEffect(() => {

    // }, [])
    setInterval(() => {
        setLoading(false)
    }, 250);
    return (
        <div>
            <div id="carouselExampleCaptions" className="container main-slide-div carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                {loading ?
                    <>
                        <Skeleton className='carousel-inner' height='50vw'/>
                    </>
                    : <>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://source.unsplash.com/1000x501/?shop" className="d-block w-100 rounded" alt="..." />
                                <div className="carousel-caption d-none d-md-block bg-dark rounded opacity-75">
                                    <h5>"Shop 'til You Drop: Unleash Your Retail Fantasies"</h5>
                                    <p>Some "Welcome to 'Retail Therapy,' your ultimate destination for a shopping experience like no other. Step into a world of endless choices and boundless possibilities as you explore a treasure trove of products spanning every category imaginable.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://source.unsplash.com/1000x502/?shops" className="d-block w-100 rounded" alt="..." />
                                <div className="carousel-caption d-none d-md-block bg-dark rounded opacity-75">
                                    <h5>"Retail Wonderland: Explore Endless Shopping Possibilities"</h5>
                                    <p>"Welcome to 'Retail Therapy,' your ultimate destination for a shopping experience like no other. Step into a world of endless choices and boundless possibilities as you explore a treasure trove of products spanning every category imaginable.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://source.unsplash.com/1000x503/?shops" className="d-block w-100 rounded" alt="..." />
                                <div className="carousel-caption d-none d-md-block bg-dark rounded opacity-75">
                                    <h5>"Retail Therapy: Your Gateway to Shopping Bliss"</h5>
                                    <p>Some "Welcome to 'Retail Therapy,' your ultimate destination for a shopping experience like no other. Step into a world of endless choices and boundless possibilities as you explore a treasure trove of products spanning every category imaginable.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://source.unsplash.com/1000x504/?shops" className="d-block w-100 rounded" alt="..." />
                                <div className="carousel-caption d-none d-md-block bg-dark rounded opacity-75">
                                    <h5>"Retail Therapy: Your Gateway to Shopping Bliss"</h5>
                                    <p>Some "Welcome to 'Retail Therapy,' your ultimate destination for a shopping experience like no other. Step into a world of endless choices and boundless possibilities as you explore a treasure trove of products spanning every category imaginable.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://source.unsplash.com/1000x505/?shops" className="d-block w-100 rounded" alt="..." />
                                <div className="carousel-caption d-none d-md-block bg-dark rounded opacity-75">
                                    <h5>"Retail Therapy: Your Gateway to Shopping Bliss"</h5>
                                    <p>Some "Welcome to 'Retail Therapy,' your ultimate destination for a shopping experience like no other. Step into a world of endless choices and boundless possibilities as you explore a treasure trove of products spanning every category imaginable.</p>
                                </div>
                            </div>
                        </div>
                    </>
                }
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
