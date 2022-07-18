import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.a`
  padding: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  svg {
    fill: var(--color-primary-dark);
  }
`

const Logo = () => (
  <Link href="/" passHref>
    <Wrapper>
      <svg width="146" height="24" viewBox="0 0 146 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.11006 2.52724C0.615234 3.51735 0.615234 4.81346 0.615234 7.40573V16.5943C0.615234 19.1865 0.615234 20.4827 1.11006 21.4727C1.54532 22.3437 2.23984 23.0518 3.09408 23.4955C4.06522 24 5.33655 24 7.87914 24H9.9681C12.5107 24 13.782 24 14.7532 23.4955C15.6074 23.0518 16.3019 22.3437 16.7372 21.4727C17.232 20.4827 17.232 19.1865 17.232 16.5943V7.40573C17.232 4.81346 17.232 3.51735 16.7372 2.52724C16.3019 1.65632 15.6074 0.94824 14.7532 0.504483C13.782 0 12.5107 0 9.9681 0H7.87914C5.33655 0 4.06522 0 3.09408 0.504483C2.23984 0.94824 1.54532 1.65632 1.11006 2.52724ZM7.21416 3.98772C7.20459 4.07341 7.20459 4.17527 7.20459 4.37897V9.96249C7.20459 10.1662 7.20459 10.268 7.21416 10.3537C7.29309 11.0601 7.84222 11.6175 8.53811 11.6976C8.62252 11.7073 8.72288 11.7073 8.92357 11.7073C9.12426 11.7073 9.22462 11.7073 9.30902 11.6976C10.0049 11.6175 10.554 11.0601 10.633 10.3537C10.6425 10.268 10.6425 10.1662 10.6425 9.96249V4.37897C10.6425 4.17527 10.6425 4.07341 10.633 3.98772C10.554 3.28135 10.0049 2.72397 9.30902 2.64386C9.22462 2.63414 9.12426 2.63414 8.92357 2.63414C8.72288 2.63414 8.62252 2.63414 8.53811 2.64386C7.84222 2.72397 7.29309 3.28135 7.21416 3.98772Z"
          fill="url(#paint0_linear_15_16)"
        />
        <path d="M36.746 19.642H27V4.242H30.014V16.958H36.746V19.642Z" />
        <path d="M38.4988 8.642H41.3588V19.642H38.4988V8.642ZM38.0808 5.54C38.0808 5.11467 38.2348 4.75533 38.5428 4.462C38.8654 4.154 39.3054 4 39.8628 4C40.4201 4 40.8674 4.154 41.2048 4.462C41.5568 4.75533 41.7328 5.11467 41.7328 5.54C41.7328 5.96533 41.5568 6.32467 41.2048 6.618C40.8674 6.89667 40.4201 7.036 39.8628 7.036C39.3054 7.036 38.8654 6.89667 38.5428 6.618C38.2348 6.32467 38.0808 5.96533 38.0808 5.54Z" />
        <path d="M50.875 19.642V13.394C50.875 12.4993 50.743 11.854 50.479 11.458C50.2297 11.062 49.797 10.864 49.181 10.864C48.6383 10.864 48.1763 11.0253 47.795 11.348C47.4283 11.656 47.1643 12.0447 47.003 12.514V19.642H44.143V8.642H46.409L46.739 10.094H46.827C47.1643 9.62467 47.6117 9.214 48.169 8.862C48.7263 8.51 49.445 8.334 50.325 8.334C50.8677 8.334 51.3517 8.40733 51.777 8.554C52.2023 8.70067 52.5617 8.94267 52.855 9.28C53.1483 9.61733 53.3683 10.0793 53.515 10.666C53.6617 11.238 53.735 11.9493 53.735 12.8V19.642H50.875Z" />
        <path d="M64.9313 18.696C64.4913 19.048 63.8899 19.3487 63.1273 19.598C62.3793 19.8327 61.5799 19.95 60.7293 19.95C58.9546 19.95 57.6566 19.4367 56.8353 18.41C56.0139 17.3687 55.6033 15.946 55.6033 14.142C55.6033 12.206 56.0653 10.754 56.9893 9.786C57.9133 8.818 59.2113 8.334 60.8833 8.334C61.4406 8.334 61.9833 8.40733 62.5113 8.554C63.0393 8.70067 63.5086 8.94267 63.9193 9.28C64.3299 9.61733 64.6599 10.072 64.9093 10.644C65.1586 11.216 65.2833 11.9273 65.2833 12.778C65.2833 13.086 65.2613 13.416 65.2173 13.768C65.1879 14.12 65.1366 14.4867 65.0633 14.868H58.4633C58.5073 15.792 58.7419 16.4887 59.1673 16.958C59.6073 17.4273 60.3113 17.662 61.2793 17.662C61.8806 17.662 62.4159 17.574 62.8853 17.398C63.3693 17.2073 63.7359 17.0167 63.9853 16.826L64.9313 18.696ZM60.8393 10.622C60.0913 10.622 59.5339 10.8493 59.1673 11.304C58.8153 11.744 58.6026 12.338 58.5293 13.086H62.6213C62.6799 12.294 62.5553 11.6853 62.2473 11.26C61.9539 10.8347 61.4846 10.622 60.8393 10.622Z" />
        <path d="M67.2371 9.28C67.8238 9.016 68.5205 8.81067 69.3271 8.664C70.1338 8.50267 70.9771 8.422 71.8571 8.422C72.6198 8.422 73.2578 8.51733 73.7711 8.708C74.2845 8.884 74.6878 9.14067 74.9811 9.478C75.2891 9.81533 75.5018 10.2187 75.6191 10.688C75.7511 11.1573 75.8171 11.6853 75.8171 12.272C75.8171 12.9173 75.7951 13.57 75.7511 14.23C75.7071 14.8753 75.6778 15.5133 75.6631 16.144C75.6631 16.7747 75.6851 17.3907 75.7291 17.992C75.7731 18.5787 75.8831 19.136 76.0591 19.664H73.7271L73.2651 18.146H73.1551C72.8618 18.6007 72.4511 18.9967 71.9231 19.334C71.4098 19.6567 70.7425 19.818 69.9211 19.818C69.4078 19.818 68.9458 19.7447 68.5351 19.598C68.1245 19.4367 67.7725 19.2167 67.4791 18.938C67.1858 18.6447 66.9585 18.3073 66.7971 17.926C66.6358 17.53 66.5551 17.09 66.5551 16.606C66.5551 15.9313 66.7018 15.3667 66.9951 14.912C67.3031 14.4427 67.7358 14.0687 68.2931 13.79C68.8651 13.4967 69.5398 13.2987 70.3171 13.196C71.1091 13.0787 71.9891 13.042 72.9571 13.086C73.0598 12.2647 73.0011 11.678 72.7811 11.326C72.5611 10.9593 72.0698 10.776 71.3071 10.776C70.7351 10.776 70.1265 10.8347 69.4811 10.952C68.8505 11.0693 68.3298 11.2233 67.9191 11.414L67.2371 9.28ZM70.8671 17.464C71.4391 17.464 71.8938 17.3393 72.2311 17.09C72.5685 16.826 72.8178 16.5473 72.9791 16.254V14.824C72.5245 14.78 72.0845 14.7727 71.6591 14.802C71.2485 14.8313 70.8818 14.8973 70.5591 15C70.2365 15.1027 69.9798 15.2493 69.7891 15.44C69.5985 15.6307 69.5031 15.8727 69.5031 16.166C69.5031 16.5767 69.6205 16.8993 69.8551 17.134C70.1045 17.354 70.4418 17.464 70.8671 17.464Z" />
        <path d="M84.2892 11.326C83.8345 11.1647 83.4239 11.084 83.0572 11.084C82.5439 11.084 82.1112 11.2233 81.7592 11.502C81.4219 11.766 81.1945 12.1107 81.0772 12.536V19.642H78.2172V8.642H80.4392L80.7692 10.094H80.8572C81.1065 9.55133 81.4439 9.13333 81.8692 8.84C82.2945 8.54667 82.7932 8.4 83.3652 8.4C83.7465 8.4 84.1792 8.48067 84.6632 8.642L84.2892 11.326Z" />
        <path d="M97.9421 11.656L98.2721 8.598H98.1401L97.1941 11.062L93.9161 16.804H92.9481L89.4941 11.04L88.5261 8.598H88.4161L88.8561 11.634V19.642H85.9961V4.242H88.7461L92.8601 11.282L93.5861 13.042H93.6741L94.3341 11.238L98.2281 4.242H100.956V19.642H97.9421V11.656Z" />
        <path d="M102.998 14.142C102.998 12.2793 103.452 10.8493 104.362 9.852C105.271 8.84 106.547 8.334 108.19 8.334C109.07 8.334 109.832 8.47333 110.478 8.752C111.123 9.03067 111.658 9.42667 112.084 9.94C112.509 10.4387 112.824 11.0473 113.03 11.766C113.25 12.4847 113.36 13.2767 113.36 14.142C113.36 16.0047 112.905 17.442 111.996 18.454C111.101 19.4513 109.832 19.95 108.19 19.95C107.31 19.95 106.547 19.8107 105.902 19.532C105.256 19.2533 104.714 18.8647 104.274 18.366C103.848 17.8527 103.526 17.2367 103.306 16.518C103.1 15.7993 102.998 15.0073 102.998 14.142ZM105.946 14.142C105.946 14.626 105.99 15.0733 106.078 15.484C106.166 15.8947 106.298 16.254 106.474 16.562C106.65 16.87 106.877 17.112 107.156 17.288C107.449 17.4493 107.794 17.53 108.19 17.53C108.938 17.53 109.495 17.2587 109.862 16.716C110.228 16.1733 110.412 15.3153 110.412 14.142C110.412 13.13 110.243 12.316 109.906 11.7C109.568 11.0693 108.996 10.754 108.19 10.754C107.486 10.754 106.936 11.018 106.54 11.546C106.144 12.074 105.946 12.9393 105.946 14.142Z" />
        <path d="M118.092 8.642V14.89C118.092 15.7847 118.195 16.43 118.4 16.826C118.62 17.222 119.038 17.42 119.654 17.42C120.197 17.42 120.644 17.2587 120.996 16.936C121.363 16.6133 121.634 16.2173 121.81 15.748V8.642H124.67V16.298C124.67 16.8993 124.7 17.4933 124.758 18.08C124.817 18.652 124.905 19.1727 125.022 19.642H122.866L122.36 18.014H122.272C121.935 18.5713 121.466 19.0333 120.864 19.4C120.263 19.7667 119.552 19.95 118.73 19.95C118.173 19.95 117.674 19.8767 117.234 19.73C116.794 19.5833 116.428 19.3413 116.134 19.004C115.841 18.6667 115.614 18.212 115.452 17.64C115.306 17.068 115.232 16.3493 115.232 15.484V8.642H118.092Z" />
        <path d="M131.734 16.606C131.734 16.3127 131.609 16.078 131.36 15.902C131.111 15.726 130.803 15.5647 130.436 15.418C130.069 15.2713 129.666 15.1247 129.226 14.978C128.786 14.8167 128.383 14.604 128.016 14.34C127.649 14.0613 127.341 13.7167 127.092 13.306C126.843 12.8807 126.718 12.338 126.718 11.678C126.718 10.5927 127.041 9.764 127.686 9.192C128.331 8.62 129.263 8.334 130.48 8.334C131.316 8.334 132.071 8.422 132.746 8.598C133.421 8.774 133.949 8.972 134.33 9.192L133.692 11.26C133.355 11.128 132.929 10.9887 132.416 10.842C131.903 10.6953 131.382 10.622 130.854 10.622C130.003 10.622 129.578 10.952 129.578 11.612C129.578 11.876 129.703 12.0887 129.952 12.25C130.201 12.4113 130.509 12.5653 130.876 12.712C131.243 12.844 131.646 12.9907 132.086 13.152C132.526 13.3133 132.929 13.526 133.296 13.79C133.663 14.0393 133.971 14.3693 134.22 14.78C134.469 15.1907 134.594 15.7187 134.594 16.364C134.594 17.4787 134.235 18.3587 133.516 19.004C132.812 19.6347 131.749 19.95 130.326 19.95C129.549 19.95 128.815 19.8473 128.126 19.642C127.451 19.4513 126.901 19.224 126.476 18.96L127.268 16.826C127.605 17.0167 128.053 17.2073 128.61 17.398C129.167 17.574 129.739 17.662 130.326 17.662C130.751 17.662 131.089 17.5813 131.338 17.42C131.602 17.2587 131.734 16.9873 131.734 16.606Z" />
        <path d="M145.261 18.696C144.821 19.048 144.22 19.3487 143.457 19.598C142.709 19.8327 141.91 19.95 141.059 19.95C139.285 19.95 137.987 19.4367 137.165 18.41C136.344 17.3687 135.933 15.946 135.933 14.142C135.933 12.206 136.395 10.754 137.319 9.786C138.243 8.818 139.541 8.334 141.213 8.334C141.771 8.334 142.313 8.40733 142.841 8.554C143.369 8.70067 143.839 8.94267 144.249 9.28C144.66 9.61733 144.99 10.072 145.239 10.644C145.489 11.216 145.613 11.9273 145.613 12.778C145.613 13.086 145.591 13.416 145.547 13.768C145.518 14.12 145.467 14.4867 145.393 14.868H138.793C138.837 15.792 139.072 16.4887 139.497 16.958C139.937 17.4273 140.641 17.662 141.609 17.662C142.211 17.662 142.746 17.574 143.215 17.398C143.699 17.2073 144.066 17.0167 144.315 16.826L145.261 18.696ZM141.169 10.622C140.421 10.622 139.864 10.8493 139.497 11.304C139.145 11.744 138.933 12.338 138.859 13.086H142.951C143.01 12.294 142.885 11.6853 142.577 11.26C142.284 10.8347 141.815 10.622 141.169 10.622Z" />
        <defs>
          <linearGradient
            id="paint0_linear_15_16"
            x1="0.615234"
            y1="-0.190476"
            x2="17.4817"
            y2="23.1207"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#67C3EC" />
            <stop offset="1" stopColor="#4159CE" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  </Link>
)

export default Logo
