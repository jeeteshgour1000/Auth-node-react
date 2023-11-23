import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  render() {
    return (
      <div className="flex items-center justify-center w-[100%] p-8">
        <div
          className={`border border-gray4 text-gray1 inline-flex items-center py-[14px] px-[24px] rounded-[40px] list-none text-[18px] ${
            this.props.auth ? "gap-[74px]" : "gap-[114px]"
          }`}
        >
          <Link to={"/"} className="">
            <svg
              width="111"
              height="19"
              viewBox="0 0 111 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 7.528C9.07933 7.528 9.244 8.13467 9.244 9.348C9.244 9.712 9.20067 10.1453 9.114 10.648C9.04467 11.1333 8.906 11.376 8.698 11.376H5.396V13.976H10.18C10.4747 13.976 10.674 14.3573 10.778 15.12C10.83 15.4493 10.856 15.8047 10.856 16.186C10.856 16.55 10.804 17.0267 10.7 17.616C10.596 18.2053 10.4227 18.5 10.18 18.5H1.288C0.629333 18.5 0.3 18.2313 0.3 17.694V0.975999C0.3 0.525332 0.499333 0.299999 0.898 0.299999H10.206C10.57 0.299999 10.752 1.07133 10.752 2.614C10.752 4.13933 10.57 4.902 10.206 4.902H5.396V7.528H8.75ZM24.7703 18.37C24.7703 18.4913 24.0249 18.552 22.5343 18.552C21.0609 18.552 20.3243 18.474 20.3243 18.318V10.752C20.3243 9.88533 20.0383 9.452 19.4663 9.452C19.1716 9.452 18.7816 9.64267 18.2963 10.024V18.344C18.2963 18.5173 17.5509 18.604 16.0603 18.604C14.5869 18.604 13.8503 18.5087 13.8503 18.318V9.816H13.2003C12.6283 9.816 12.3423 9.218 12.3423 8.022C12.3423 7.48467 12.4463 6.93867 12.6543 6.384C12.9316 5.62133 13.3823 5.24 14.0063 5.24C14.6303 5.24 15.2283 5.40467 15.8003 5.734C16.3896 6.06333 16.7449 6.37533 16.8663 6.67C17.9409 5.71667 19.1283 5.24 20.4283 5.24C21.7456 5.24 22.8029 5.64733 23.6003 6.462C24.5363 5.64733 25.6629 5.24 26.9803 5.24C29.8403 5.24 31.2703 6.982 31.2703 10.466V18.37C31.2703 18.4913 30.5249 18.552 29.0343 18.552C27.5609 18.552 26.8243 18.474 26.8243 18.318V10.752C26.8243 9.88533 26.5383 9.452 25.9663 9.452C25.6543 9.452 25.2556 9.64267 24.7703 10.024V18.37ZM34.2885 12.156C34.6178 12.416 35.1812 12.7713 35.9785 13.222C36.7932 13.6727 37.5645 13.898 38.2925 13.898C39.0378 13.898 39.4105 13.612 39.4105 13.04C39.4105 12.78 39.3065 12.5547 39.0985 12.364C38.8905 12.156 38.5092 11.922 37.9545 11.662C37.3998 11.402 36.9838 11.2027 36.7065 11.064C36.4292 10.908 36.0565 10.6653 35.5885 10.336C35.1378 9.98933 34.7912 9.634 34.5485 9.27C33.8552 8.282 33.5085 7.02533 33.5085 5.5C33.5085 3.97467 34.0718 2.692 35.1985 1.652C36.3425 0.594666 37.8332 0.0659987 39.6705 0.0659987C40.9185 0.0659987 42.0712 0.204666 43.1285 0.482C44.1858 0.741999 44.7318 1.08867 44.7665 1.522C44.7665 1.574 44.7665 1.626 44.7665 1.678C44.7665 2.28467 44.5758 3.056 44.1945 3.992C43.8132 4.91067 43.5445 5.422 43.3885 5.526C42.2792 4.954 41.2825 4.668 40.3985 4.668C39.5318 4.668 39.0985 4.98 39.0985 5.604C39.0985 5.98533 39.4192 6.32333 40.0605 6.618C40.1992 6.68733 40.3985 6.78267 40.6585 6.904C40.9185 7.02533 41.2132 7.17267 41.5425 7.346C41.8892 7.502 42.2532 7.71 42.6345 7.97C43.0332 8.21267 43.4578 8.542 43.9085 8.958C44.8272 9.82467 45.2865 10.9687 45.2865 12.39C45.2865 14.2447 44.7752 15.7613 43.7525 16.94C42.7298 18.1187 41.1525 18.7253 39.0205 18.76C37.9805 18.76 37.0358 18.6733 36.1865 18.5C35.3545 18.3267 34.6265 17.9887 34.0025 17.486C33.3785 16.9833 33.0665 16.3767 33.0665 15.666C33.0665 14.9553 33.1965 14.2533 33.4565 13.56C33.7165 12.8493 33.9938 12.3813 34.2885 12.156ZM57.123 17.798C56.031 18.4393 54.627 18.76 52.911 18.76C51.195 18.76 49.7477 18.1793 48.569 17.018C47.3903 15.8393 46.801 14.2187 46.801 12.156C46.801 10.076 47.3643 8.40333 48.491 7.138C49.635 5.87267 51.0737 5.24 52.807 5.24C54.5403 5.24 55.875 5.682 56.811 6.566C57.7643 7.45 58.241 8.52467 58.241 9.79C58.241 12.598 56.629 14.002 53.405 14.002H51.611C51.611 14.522 51.7497 14.886 52.027 15.094C52.3217 15.2847 52.7463 15.38 53.301 15.38C54.5143 15.38 55.667 15.1027 56.759 14.548C56.7763 14.5307 56.8543 14.652 56.993 14.912C57.409 15.6573 57.617 16.29 57.617 16.81C57.617 17.3127 57.4523 17.642 57.123 17.798ZM53.873 10.284C53.873 9.556 53.5177 9.192 52.807 9.192C52.4777 9.192 52.1917 9.296 51.949 9.504C51.7237 9.69467 51.611 9.98067 51.611 10.362V11.168H53.015C53.587 11.168 53.873 10.8733 53.873 10.284ZM65.3735 18.344C65.3735 18.4653 64.7495 18.526 63.5015 18.526C61.7682 18.474 60.9015 18.3787 60.9015 18.24V9.816H60.2255C59.7749 9.816 59.4802 9.43467 59.3415 8.672C59.3069 8.44667 59.2895 8.22133 59.2895 7.996C59.2895 7.45867 59.3935 6.92133 59.6015 6.384C59.9135 5.62133 60.3989 5.24 61.0575 5.24C61.7162 5.24 62.3055 5.396 62.8255 5.708C63.3455 6.02 63.6922 6.332 63.8655 6.644C64.9575 5.708 66.2575 5.24 67.7655 5.24C69.2735 5.24 70.3655 5.64733 71.0415 6.462C71.7175 7.27667 72.0555 8.61133 72.0555 10.466V18.266C72.0555 18.474 71.3102 18.578 69.8195 18.578C68.3462 18.578 67.6095 18.474 67.6095 18.266V10.752C67.6095 9.88533 67.3062 9.452 66.6995 9.452C66.5262 9.452 66.2835 9.53 65.9715 9.686C65.6595 9.82467 65.4602 9.92867 65.3735 9.998V18.344ZM80.8378 0.456C80.8378 0.195999 81.5225 0.0659987 82.8918 0.0659987C83.3598 0.0659987 83.8972 0.100665 84.5038 0.169999C85.1278 0.221999 85.4398 0.299999 85.4398 0.403999V14.106H86.3498C86.7832 14.106 87.0692 14.496 87.2078 15.276C87.2425 15.5013 87.2598 15.8133 87.2598 16.212C87.2598 16.5933 87.1385 17.0613 86.8958 17.616C86.5492 18.3787 85.9945 18.76 85.2318 18.76C84.6598 18.76 84.1485 18.6473 83.6978 18.422C83.2645 18.1967 82.9698 17.9627 82.8138 17.72L82.5798 17.382C81.6265 18.3007 80.4305 18.76 78.9918 18.76C77.5532 18.76 76.3225 18.162 75.2998 16.966C74.2772 15.77 73.7658 14.106 73.7658 11.974C73.7658 9.82467 74.3032 8.16933 75.3778 7.008C76.4525 5.82933 77.7958 5.24 79.4078 5.24C79.8758 5.24 80.3525 5.292 80.8378 5.396V0.456ZM79.9798 9.4C79.0092 9.4 78.5238 10.2753 78.5238 12.026C78.5238 12.91 78.6625 13.5513 78.9398 13.95C79.2172 14.3313 79.5205 14.522 79.8498 14.522C80.1965 14.522 80.5258 14.3747 80.8378 14.08V9.66C80.5432 9.48667 80.2572 9.4 79.9798 9.4ZM98.789 17.798C97.697 18.4393 96.293 18.76 94.577 18.76C92.861 18.76 91.4137 18.1793 90.235 17.018C89.0563 15.8393 88.467 14.2187 88.467 12.156C88.467 10.076 89.0303 8.40333 90.157 7.138C91.301 5.87267 92.7397 5.24 94.473 5.24C96.2063 5.24 97.541 5.682 98.477 6.566C99.4303 7.45 99.907 8.52467 99.907 9.79C99.907 12.598 98.295 14.002 95.071 14.002H93.277C93.277 14.522 93.4157 14.886 93.693 15.094C93.9877 15.2847 94.4123 15.38 94.967 15.38C96.1803 15.38 97.333 15.1027 98.425 14.548C98.4423 14.5307 98.5203 14.652 98.659 14.912C99.075 15.6573 99.283 16.29 99.283 16.81C99.283 17.3127 99.1183 17.642 98.789 17.798ZM95.539 10.284C95.539 9.556 95.1837 9.192 94.473 9.192C94.1437 9.192 93.8577 9.296 93.615 9.504C93.3897 9.69467 93.277 9.98067 93.277 10.362V11.168H94.681C95.253 11.168 95.539 10.8733 95.539 10.284ZM107.3 18.474C107.3 18.5953 106.511 18.656 104.934 18.656C103.356 18.6213 102.568 18.552 102.568 18.448V9.816H101.866C101.588 9.816 101.363 9.65133 101.19 9.322C101.034 8.97533 100.956 8.55067 100.956 8.048C100.956 6.176 101.51 5.24 102.62 5.24C103.4 5.24 104.05 5.48267 104.57 5.968C105.09 6.436 105.35 6.97333 105.35 7.58C105.714 6.86933 106.199 6.306 106.806 5.89C107.43 5.45667 108.062 5.24 108.704 5.24C109.709 5.24 110.316 5.5 110.524 6.02C110.576 6.15867 110.602 6.36667 110.602 6.644C110.602 6.904 110.515 7.38067 110.342 8.074C110.186 8.76733 110.021 9.27 109.848 9.582C109.674 9.894 109.57 10.05 109.536 10.05C109.501 10.05 109.336 9.98933 109.042 9.868C108.764 9.72933 108.513 9.66 108.288 9.66C107.629 9.66 107.3 10.18 107.3 11.22V18.474Z"
                fill="#00A7DC"
              />
            </svg>
          </Link>
          {this.props.auth
            ? [
                <li key="1">
                  <a href="/#about">About</a>
                </li>,
                <li key="3">
                  <a href="/#contact">Contact us</a>
                </li>,
                <li key="4">
                  <a href="/surveys">my surveys</a>
                </li>,
                <li key="5">Credits: {this.props.auth.credits}</li>,
                <li>
                  <Payments />
                </li>,
                <li
                  key="7"
                  className="text-primary py-2 px-4 bg-secondary rounded-[40px]"
                >
                  <a href="/api/logout">Logout</a>
                </li>,
              ]
            : [
                <li key="1">
                  <a href="#about">About</a>
                </li>,
                <li key="3">
                  <a href="#contact">Contact us</a>
                </li>,
                <li
                  key="4"
                  className="text-primary py-2 px-4 bg-secondary rounded-[40px]"
                >
                  <a href="/auth/google">Sign in with google</a>
                </li>,
              ]}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
