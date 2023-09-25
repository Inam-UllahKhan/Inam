import React from 'react'

export const Fifth_Footer = () => {
    return (
        <div>
            <section className="">
                {/* <!-- Footer --> */}
                <footer className="text-center text-white bg-dark mt-5">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4 pb-0">
                        {/* <!-- Section: CTA --> */}
                        <section className="">
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">Register for free</span>
                                <button type="button" className="btn btn-outline-light btn-rounded">
                                    Sign up!
                                </button>
                            </p>
                        </section>
                        {/* <!-- Section: CTA --> */}
                    </div>
                    {/* <!-- Grid container --> */}

                    {/* <!-- Copyright --> */}
                    <div className="text-center p-3">
                        © 2023 Copyright:
                        <a className="text-white" href="#">INAMULLAH.com</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
                {/* <!-- Footer --> */}
            </section>
        </div>
    )
}
