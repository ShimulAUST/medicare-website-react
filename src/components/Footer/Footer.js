import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer class="bg-dark text-center text-white mt-5">

                <div class="container p-4">
                    <section class="">
                        <form action="">

                            <div class="row d-flex justify-content-center">

                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>



                                <div class="col-md-5 col-12">

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" class="form-control" placeholder="Enter your Email Address" />

                                    </div>
                                </div>

                                <div class="col-auto">

                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>

                    <section class="mb-4">
                        <p>
                            We provide world best medicare facilities.You can come to visit our medicare.
                        </p>
                    </section>

                    <section class="">

                        <div class="row">

                            <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                                This is worlds best medicare <br />
                                Our address:<br />
                                Uttara,Dhaka<br />

                            </div>

                            <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Services</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Medicare</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Cardiac Treatment </a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Dental Service</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Laser Treatment</a>
                                    </li>
                                </ul>
                            </div>


                            <div class="col-lg-4 col-md-4 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Useful Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">About</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Services</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Login</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </section>

                </div>



                <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:  <a class="text-white" href="https://shimulpaul.com/"> ShimulPaul</a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;