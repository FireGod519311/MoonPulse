export default function Footer() {
    return (
        <footer
            className='w-full bg-gray-600 pb-1'
            aria-labelledby="footer-heading"
            id="footer"
        >
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">

                        <p className="text-black">
                            Decentralised PLS Staking Protocol
                        </p>
                        <div className="flex space-x-6">
                            <a
                                href="https://rocketpulse.finance"
                                className="text-black hover:text-gray-700"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only">Discord</span>
                                <svg
                                    className="svg-inline--fa fa-discord h-6 w-6"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="discord"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                >
                                    <path
                                        className=""
                                        fill="currentColor"
                                        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                                    ></path></svg>
                            </a>
                            <a
                                href="https://rocketpulse.finance"
                                className="text-black hover:text-gray-700"
                                target="_blank"
                                rel="noreferrer"
                            ><span className="sr-only">Medium</span>
                                <svg
                                    className="svg-inline--fa fa-medium h-6 w-6"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="medium"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                >
                                    <path
                                        className=""
                                        fill="currentColor"
                                        d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"
                                    ></path></svg>
                            </a>
                            <a
                                href="https://rocketpulse.finance"
                                className="text-black hover:text-gray-700"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="svg-inline--fa fa-twitter h-6 w-6"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="twitter"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        className=""
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="https://rocketpulse.finance"
                                className="text-black hover:text-gray-700"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg
                                    className="svg-inline--fa fa-github h-6 w-6"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="github"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                >
                                    <path
                                        className=""
                                        fill="currentColor"
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="https://rocketpulse.finance"
                                className="text-black hover:text-gray-700"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only">Forum</span>
                                <svg
                                    className="svg-inline--fa fa-discourse h-6 w-6"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="discourse"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        className=""
                                        fill="currentColor"
                                        d="M225.9 32C103.3 32 0 130.5 0 252.1 0 256 .1 480 .1 480l225.8-.2c122.7 0 222.1-102.3 222.1-223.9C448 134.3 348.6 32 225.9 32zM224 384c-19.4 0-37.9-4.3-54.4-12.1L88.5 392l22.9-75c-9.8-18.1-15.4-38.9-15.4-61 0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="https://rocketpulse.finance"
                                className="text-black hover:text-gray-700"
                                target="_blank"
                                rel="noreferrer"
                            ><span className="sr-only">Youtube</span><svg
                                className="svg-inline--fa fa-youtube h-6 w-6"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="youtube"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                    <path
                                        className=""
                                        fill="currentColor"
                                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="https://rocketpulse.finance"
                                className="text-black hover:text-gray-700"
                                target="_blank"
                                rel="noreferrer"
                            ><span className="sr-only">Reddit
                                </span>
                                <svg
                                    className="svg-inline--fa fa-reddit h-6 w-6"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="reddit"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        className=""
                                        fill="currentColor"
                                        d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3
                                    className="text-sm font-semibold text-black tracking-wider uppercase"
                                >
                                    Staking
                                </h3>
                                <ul
                                    // role="list" 
                                    className="mt-4 space-y-4">
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Overview</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >PLS Staking</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Rocket Pulse Staking</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >MPLS Token</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3
                                    className="text-sm font-semibold text-black tracking-wider uppercase"
                                >
                                    Node Operation
                                </h3>
                                <ul
                                    // role="list" 
                                    className="mt-4 space-y-4">
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >How it works</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Local Nodes</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Cloud Nodes</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Install Rocket Pulse</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3
                                    className="text-sm font-semibold text-black tracking-wider uppercase"
                                >
                                    Learn
                                </h3>
                                <ul
                                    // role="list" 
                                    className="mt-4 space-y-4">
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Introduction</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Explainer Series</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Guides</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Developers</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3
                                    className="text-sm font-semibold text-black tracking-wider uppercase"
                                >
                                    Governance
                                </h3>
                                <ul
                                    // role="list" 
                                    className="mt-4 space-y-4">
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Forum</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Proposals</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://rocketpulse.finance"
                                            className="text-base text-gray-700 hover:text-gray-900"
                                            target="_blank"
                                            rel="noreferrer"
                                        >Delegates</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-black xl:text-center pb-5">
                        <span className="pr-4">
                            <a
                                href="https://rocketpulse.finance"
                                className="text-base xl:text-center text-black hover:text-gray-900"
                                target="_blank"
                                rel="noreferrer"
                            >Privacy Policy</a>
                        </span>
                        <span className="pr-4"
                        ><a
                            href="https://rocketpulse.finance"
                            className="text-base xl:text-center text-black hover:text-gray-900"
                            target="_blank"
                            rel="noreferrer"
                        >Terms of Service</a>
                        </span>
                    </p>
                    <p className="text-base text-black xl:text-center">
                        <span className="pr-4">© Rocket Pulse Pty Ltd.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
