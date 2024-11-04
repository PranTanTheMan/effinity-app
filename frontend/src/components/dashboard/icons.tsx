import React from "react";

interface IconProps {
  className?: string;
  strokeColor?: string;
}

const Collapse: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3333 35H11.6667C7.5 35 5 32.5 5 28.3333V12.5C5 8.33333 8.33333 5 12.5 5C16.6667 5 28.3333 5 28.3333 5C32.5 5 35 7.5 35 11.6667V28.3333C35 32.5 32.5 35 28.3333 35Z"
        stroke="#080808"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.667 19L9.16699 20.5L11.667 22"
        stroke="#080808"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.833 35V5"
        stroke="#080808"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Collapsed: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.3333 35H11.6667C7.5 35 5 32.5 5 28.3333V12.5C5 8.33333 8.33333 5 12.5 5C16.6667 5 28.3333 5 28.3333 5C32.5 5 35 7.5 35 11.6667V28.3333C35 32.5 32.5 35 28.3333 35Z"
        stroke="#080808"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16699 19L11.667 20.5L9.16699 22"
        stroke="#080808"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.833 35V5"
        stroke="#080808"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Home: React.FC<IconProps> = ({ className, strokeColor }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.744 25.6626C15.1894 25.2515 14.4066 25.3679 13.9955 25.9225C13.5844 26.4771 13.7007 27.2599 14.2553 27.671C15.876 28.8723 17.8581 29.5835 19.9997 29.5835C22.1413 29.5835 24.1233 28.8723 25.744 27.671C26.2986 27.2599 26.415 26.4771 26.0039 25.9225C25.5928 25.3679 24.8099 25.2515 24.2553 25.6626C23.0414 26.5624 21.5762 27.0835 19.9997 27.0835C18.4232 27.0835 16.9579 26.5624 15.744 25.6626Z"
        fill={strokeColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9997 2.0835C18.8195 2.0835 17.7472 2.42153 16.5839 2.98723C15.4594 3.53407 14.1604 4.34031 12.5378 5.34737L9.09348 7.48499C7.55815 8.43784 6.32875 9.20083 5.38117 9.92651C4.39992 10.678 3.64625 11.4433 3.10186 12.4379C2.5586 13.4304 2.31395 14.4864 2.19666 15.7347C2.08298 16.9444 2.08299 18.4237 2.08301 20.2789V22.9666C2.08298 26.1397 2.08297 28.6445 2.33751 30.6028C2.59863 32.6118 3.14728 34.2336 4.38694 35.5159C5.63231 36.8041 7.2171 37.3796 9.17902 37.6524C11.0805 37.9169 13.5089 37.9169 16.5694 37.9168H23.4298C26.4903 37.9169 28.9189 37.9169 30.8203 37.6524C32.7822 37.3796 34.367 36.8041 35.6124 35.5159C36.8521 34.2336 37.4007 32.6118 37.6618 30.6028C37.9164 28.6445 37.9164 26.1397 37.9163 22.9666V20.2788C37.9164 18.4237 37.9164 16.9444 37.8027 15.7347C37.6854 14.4864 37.4408 13.4304 36.8975 12.4379C36.3531 11.4433 35.5994 10.678 34.6182 9.92651C33.6706 9.20084 32.4412 8.43786 30.9059 7.48502L27.4616 5.34735C25.839 4.34031 24.5399 3.53407 23.4154 2.98723C22.2521 2.42153 21.1799 2.0835 19.9997 2.0835ZM13.7989 7.50703C15.4918 6.45634 16.6822 5.71939 17.6772 5.23549C18.6467 4.76404 19.3333 4.5835 19.9997 4.5835C20.666 4.5835 21.3526 4.76404 22.3221 5.23549C23.3172 5.71938 24.5075 6.45634 26.2005 7.50702L29.5338 9.57578C31.1352 10.5697 32.2595 11.2691 33.0981 11.9113C33.9141 12.5362 34.3836 13.0519 34.7045 13.6383C35.0266 14.2267 35.2146 14.9146 35.3137 15.9686C35.4151 17.0478 35.4163 18.4099 35.4163 20.34V22.8751C35.4163 26.16 35.4139 28.5021 35.1827 30.2806C34.9557 32.0274 34.528 33.0408 33.815 33.7783C33.1078 34.5098 32.1449 34.9442 30.476 35.1763C28.7666 35.414 26.5122 35.4168 23.333 35.4168H16.6663C13.4871 35.4168 11.2327 35.414 9.52338 35.1763C7.85444 34.9442 6.89157 34.5098 6.18432 33.7783C5.47136 33.0408 5.0437 32.0274 4.81666 30.2806C4.58549 28.5021 4.58301 26.16 4.58301 22.8751V20.34C4.58301 18.4099 4.58428 17.0478 4.68569 15.9686C4.78473 14.9146 4.97275 14.2267 5.29483 13.6383C5.61576 13.0519 6.08522 12.5362 6.90121 11.9113C7.73984 11.2691 8.86417 10.5697 10.4656 9.57579L13.7989 7.50703Z"
        fill={strokeColor}
      />
    </svg>
  );
};
const Learn: React.FC<IconProps> = ({ className, strokeColor }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.87896 4.5209C8.38795 4.02223 9.10257 3.6971 10.452 3.51935C11.8412 3.33637 13.6823 3.3335 16.3222 3.3335H23.6785C26.3183 3.3335 28.1595 3.33637 29.5486 3.51935C30.8981 3.6971 31.6127 4.02223 32.1217 4.5209C32.6307 5.01957 32.9625 5.7197 33.144 7.04182C33.3307 8.40281 33.3337 10.2066 33.3337 12.793V25.856L12.243 25.856C10.7387 25.8555 9.71226 25.8552 8.83197 26.0863C8.04488 26.2929 7.31478 26.6304 6.66699 27.0739V12.793C6.66699 10.2066 6.66992 8.40281 6.85669 7.04182C7.03812 5.7197 7.36997 5.01957 7.87896 4.5209ZM12.644 9.6398C11.8822 9.6398 11.2647 10.2448 11.2647 10.9912C11.2647 11.7375 11.8822 12.3425 12.644 12.3425H27.3566C28.1184 12.3425 28.736 11.7375 28.736 10.9912C28.736 10.2448 28.1184 9.6398 27.3566 9.6398H12.644ZM11.2647 17.2975C11.2647 16.5511 11.8822 15.9461 12.644 15.9461H21.8394C22.6012 15.9461 23.2187 16.5511 23.2187 17.2975C23.2187 18.0438 22.6012 18.6488 21.8394 18.6488H12.644C11.8822 18.6488 11.2647 18.0438 11.2647 17.2975Z"
        fill={strokeColor}
      />
      <path
        d="M12.456 28.5587C10.6569 28.5587 10.0279 28.5703 9.54595 28.6969C8.22307 29.0441 7.16847 30.0076 6.7162 31.2598C6.74416 31.8972 6.78798 32.4578 6.85669 32.9585C7.03812 34.2806 7.36997 34.9808 7.87896 35.4794C8.38795 35.9781 9.10257 36.3032 10.452 36.481C11.8412 36.664 13.6823 36.6668 16.3222 36.6668H23.6785C26.3183 36.6668 28.1595 36.664 29.5486 36.481C30.8981 36.3032 31.6127 35.9781 32.1217 35.4794C32.4827 35.1257 32.7546 34.6706 32.947 33.9641H12.644C11.8822 33.9641 11.2647 33.3591 11.2647 32.6128C11.2647 31.8664 11.8822 31.2614 12.644 31.2614H33.2844C33.3185 30.4848 33.329 29.5941 33.3322 28.5587H12.456Z"
        fill={strokeColor}
      />
    </svg>
  );
};
const Play: React.FC<IconProps> = ({ className, strokeColor }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0639 5.07408C9.41994 3.63633 6.25 5.53262 6.25 8.38831L6.25 31.612C6.25 34.4677 9.41994 36.364 12.0639 34.9262L33.4171 23.3144C36.0832 21.8646 36.0832 18.1357 33.4171 16.6859L12.0639 5.07408ZM3.75 8.38831C3.75 3.54663 9.0279 0.577397 13.2582 2.87782L34.6114 14.4897C39.0184 16.8862 39.0184 23.1142 34.6114 25.5107L13.2582 37.1225C9.02791 39.4229 3.75 36.4537 3.75 31.612L3.75 8.38831Z"
        fill={strokeColor}
      />
    </svg>
  );
};
const Quests: React.FC<IconProps> = ({ className, strokeColor }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8195 5.51365C18.1632 6.37056 17.4225 7.69268 16.3466 9.62275L15.8005 10.6025C15.7675 10.6616 15.735 10.7201 15.7029 10.778C15.2016 11.68 14.7786 12.4413 14.0969 12.9588C13.4079 13.4818 12.5679 13.6706 11.5918 13.89C11.529 13.9041 11.4657 13.9183 11.4019 13.9328L10.3413 14.1727C8.24908 14.6461 6.82577 14.9718 5.85088 15.356C4.89955 15.7309 4.69873 16.0381 4.62219 16.2842C4.54141 16.544 4.53901 16.9414 5.10774 17.8448C5.68499 18.7618 6.65882 19.9055 8.08303 21.571L8.80607 22.4165C8.84809 22.4656 8.88973 22.5142 8.93095 22.5623C9.60264 23.3458 10.1627 23.9991 10.4196 24.8252C10.6749 25.6463 10.5903 26.5092 10.4877 27.5554C10.4814 27.6195 10.475 27.6844 10.4687 27.75L10.3594 28.8781C10.1442 31.0984 9.99915 32.6271 10.0482 33.7284C10.0972 34.8276 10.3293 35.1315 10.5139 35.2716C10.6781 35.3962 10.9816 35.5342 11.9703 35.2509C12.9751 34.963 14.3105 34.352 16.2695 33.45L17.2626 32.9928C17.3237 32.9646 17.3843 32.9366 17.4443 32.9089C18.3523 32.4891 19.1401 32.1249 19.9995 32.1249C20.859 32.1249 21.6467 32.4891 22.5547 32.9089C22.6148 32.9366 22.6754 32.9646 22.7365 32.9928L23.7295 33.45C25.6886 34.352 27.024 34.963 28.0288 35.2509C29.0175 35.5342 29.321 35.3962 29.4851 35.2716C29.6697 35.1315 29.9019 34.8276 29.9509 33.7284C29.9999 32.6271 29.8549 31.0984 29.6397 28.8781L29.5304 27.75C29.524 27.6844 29.5177 27.6196 29.5114 27.5554C29.4088 26.5092 29.3241 25.6463 29.5795 24.8252C29.8364 23.999 30.3964 23.3458 31.0681 22.5622C31.1094 22.5142 31.151 22.4656 31.193 22.4165L31.916 21.571C33.3403 19.9055 34.3141 18.7618 34.8913 17.8448C35.4601 16.9414 35.4577 16.544 35.3769 16.2842C35.3003 16.0381 35.0995 15.7309 34.1482 15.356C33.1733 14.9718 31.75 14.6461 29.6578 14.1727L28.5972 13.9328C28.5333 13.9183 28.47 13.9041 28.4073 13.89C27.4311 13.6706 26.5912 13.4818 25.9022 12.9588C25.2205 12.4413 24.7974 11.68 24.2962 10.778C24.264 10.7201 24.2315 10.6616 24.1986 10.6025L23.6524 9.62275C22.5765 7.69268 21.8358 6.37056 21.1796 5.51365C20.524 4.65755 20.1891 4.5835 19.9995 4.5835C19.8099 4.5835 19.4751 4.65755 18.8195 5.51365ZM16.8346 3.99366C17.6291 2.95621 18.611 2.0835 19.9995 2.0835C21.388 2.0835 22.37 2.95621 23.1645 3.99366C23.9451 5.01304 24.7729 6.4981 25.7846 8.3131L26.3822 9.38526C27.0365 10.5589 27.2038 10.8082 27.4138 10.9676C27.6158 11.121 27.8765 11.2065 29.1489 11.4944L30.3156 11.7584C32.275 12.2016 33.8892 12.5668 35.0648 13.0301C36.2851 13.511 37.353 14.2198 37.7641 15.5419C38.171 16.8503 37.7137 18.054 37.007 19.1767C36.3204 20.2675 35.2236 21.5499 33.8839 23.1165L33.093 24.0413C32.2313 25.0489 32.0513 25.2954 31.9667 25.5675C31.8804 25.845 31.8886 26.1655 32.0187 27.5089L32.1379 28.7391C32.3408 30.8324 32.5063 32.5395 32.4484 33.8397C32.3894 35.1629 32.0889 36.4337 30.9968 37.2628C29.8842 38.1074 28.5898 38.0122 27.3402 37.6542C26.1285 37.307 24.6179 36.6114 22.7837 35.7668L21.6909 35.2637C20.4954 34.7132 20.2394 34.6249 19.9995 34.6249C19.7597 34.6249 19.5037 34.7132 18.3081 35.2637L17.2154 35.7668C15.3811 36.6114 13.8706 37.307 12.6589 37.6541C11.4093 38.0122 10.1148 38.1074 9.00231 37.2628C7.91018 36.4337 7.60963 35.1629 7.55068 33.8397C7.49276 32.5395 7.65823 30.8324 7.86113 28.739L7.98034 27.5089C8.11051 26.1655 8.11862 25.845 8.03236 25.5675C7.94774 25.2954 7.76774 25.0489 6.90607 24.0413L6.11526 23.1165C4.77551 21.5499 3.67872 20.2675 2.99205 19.1767C2.28534 18.054 1.82808 16.8503 2.23495 15.5419C2.64607 14.2198 3.71396 13.511 4.93427 13.0301C6.10987 12.5668 7.72408 12.2016 9.68347 11.7584L9.78958 11.7344L10.8502 11.4944C12.1226 11.2065 12.3832 11.121 12.5853 10.9676C12.7952 10.8082 12.9626 10.5589 13.6168 9.38526L14.2145 8.31309C15.2262 6.4981 16.054 5.01304 16.8346 3.99366Z"
        fill={strokeColor}
      />
    </svg>
  );
};
const Store: React.FC<IconProps> = ({ className, strokeColor }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3917 2.0835C11.4417 2.08347 10.6351 2.08344 9.96859 2.15236C9.2589 2.22573 8.60303 2.38507 7.98341 2.76802C7.36378 3.15096 6.92795 3.66634 6.54494 4.26829C6.18521 4.83365 5.82454 5.55506 5.39973 6.40474L5.37224 6.45972C5.35603 6.49213 5.34125 6.52523 5.32792 6.55893L2.98856 12.4725C2.7102 13.1762 2.40173 14.054 2.31153 14.9523C2.21926 15.8711 2.34588 16.9237 3.06581 17.8367C3.90301 18.8983 5.20487 19.5835 6.66608 19.5835C7.97944 19.5835 9.16378 19.0311 9.99942 18.1459C10.8351 19.0311 12.0194 19.5835 13.3327 19.5835C14.6461 19.5835 15.8304 19.0311 16.6661 18.1459C17.5017 19.0311 18.6861 19.5835 19.9994 19.5835C21.3128 19.5835 22.4971 19.0311 23.3328 18.1459C24.1684 19.0311 25.3527 19.5835 26.6661 19.5835C27.9794 19.5835 29.1638 19.0311 29.9994 18.1459C30.8351 19.0311 32.0194 19.5835 33.3327 19.5835C34.794 19.5835 36.0959 18.8983 36.9331 17.8367C37.6531 16.9237 37.7797 15.8711 37.6874 14.9523C37.5972 14.054 37.2888 13.1762 37.0104 12.4725L34.6711 6.55893C34.6577 6.52523 34.6429 6.49213 34.6267 6.45973L34.5993 6.40483C34.1745 5.55511 33.8138 4.83367 33.454 4.26829C33.071 3.66634 32.6352 3.15096 32.0156 2.76802C31.3959 2.38507 30.7401 2.22573 30.0304 2.15236C29.3638 2.08344 28.5573 2.08347 27.6074 2.0835H12.3917ZM13.3327 17.0835C12.1822 17.0835 11.2494 16.1508 11.2494 15.0002C11.2494 14.3098 10.6898 13.7502 9.99942 13.7502C9.30906 13.7502 8.74941 14.3098 8.74941 15.0002C8.74941 16.1508 7.81668 17.0835 6.66608 17.0835C6.00282 17.0835 5.4124 16.775 5.02887 16.2886C4.839 16.0478 4.74717 15.7184 4.79902 15.2021C4.85293 14.6652 5.05114 14.0548 5.31327 13.3921L7.63262 7.52914C8.07882 6.6369 8.37699 6.04598 8.65417 5.61037C8.92079 5.19133 9.11185 5.00953 9.29773 4.89464C9.48362 4.77976 9.73167 4.69018 10.2257 4.6391C10.7486 4.58504 11.4251 4.5835 12.4531 4.5835H27.5459C28.5739 4.5835 29.2504 4.58504 29.7733 4.6391C30.2673 4.69018 30.5154 4.77976 30.7012 4.89464C30.8871 5.00953 31.0782 5.19133 31.3448 5.61037C31.622 6.04597 31.9202 6.6369 32.3664 7.52915L34.6857 13.3921C34.9478 14.0548 35.146 14.6652 35.1999 15.2021C35.2518 15.7184 35.16 16.0478 34.9701 16.2886C34.5865 16.775 33.996 17.0835 33.3327 17.0835C32.1822 17.0835 31.2494 16.1508 31.2494 15.0002C31.2494 14.3098 30.6898 13.7502 29.9994 13.7502C29.3091 13.7502 28.7494 14.3098 28.7494 15.0002C28.7494 16.1508 27.8167 17.0835 26.6661 17.0835C25.5155 17.0835 24.5828 16.1508 24.5828 15.0002C24.5828 14.3098 24.0231 13.7502 23.3328 13.7502C22.6424 13.7502 22.0827 14.3098 22.0827 15.0002C22.0827 16.1508 21.15 17.0835 19.9994 17.0835C18.8488 17.0835 17.9161 16.1508 17.9161 15.0002C17.9161 14.3098 17.3564 13.7502 16.6661 13.7502C15.9757 13.7502 15.4161 14.3098 15.4161 15.0002C15.4161 16.1508 14.4833 17.0835 13.3327 17.0835Z"
        fill={strokeColor}
      />
      <path
        d="M32.9162 25.0002C32.9162 24.3098 32.3566 23.7502 31.6662 23.7502C30.9759 23.7502 30.4162 24.3098 30.4162 25.0002V35.4168H9.58289V25.0002C9.58289 24.3098 9.02325 23.7502 8.33289 23.7502C7.64254 23.7502 7.08289 24.3098 7.08289 25.0002V35.4168H4.99956C4.3092 35.4168 3.74956 35.9765 3.74956 36.6668C3.74956 37.3572 4.3092 37.9168 4.99956 37.9168H34.9996C35.6899 37.9168 36.2496 37.3572 36.2496 36.6668C36.2496 35.9765 35.6899 35.4168 34.9996 35.4168H32.9162V25.0002Z"
        fill={strokeColor}
      />
    </svg>
  );
};

const Settings: React.FC<IconProps> = ({ className, strokeColor }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9989 13.7502C16.5471 13.7502 13.7489 16.5484 13.7489 20.0002C13.7489 23.4519 16.5471 26.2502 19.9989 26.2502C23.4506 26.2502 26.2489 23.4519 26.2489 20.0002C26.2489 16.5484 23.4506 13.7502 19.9989 13.7502ZM16.2489 20.0002C16.2489 17.9291 17.9278 16.2502 19.9989 16.2502C22.0699 16.2502 23.7489 17.9291 23.7489 20.0002C23.7489 22.0712 22.0699 23.7502 19.9989 23.7502C17.9278 23.7502 16.2489 22.0712 16.2489 20.0002Z"
        fill={strokeColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9568 2.0835C19.216 2.08348 18.5976 2.08347 18.0899 2.11811C17.5614 2.15417 17.0622 2.23191 16.5782 2.43238C15.4552 2.89756 14.5629 3.78982 14.0977 4.91287C13.8556 5.49752 13.79 6.11369 13.7649 6.78344C13.7448 7.32182 13.4731 7.77101 13.0721 8.00251C12.6711 8.23401 12.1463 8.24471 11.67 7.99296C11.0774 7.67978 10.511 7.42849 9.88358 7.34589C8.67841 7.18722 7.45956 7.51381 6.49518 8.25381C6.07958 8.57271 5.76265 8.96617 5.46717 9.40583C5.18333 9.82819 4.87414 10.3637 4.50376 11.0053L4.46167 11.0782C4.09128 11.7197 3.78207 12.2552 3.55823 12.7122C3.32521 13.1879 3.14293 13.6591 3.07455 14.1785C2.91588 15.3837 3.24247 16.6025 3.98247 17.5669C4.36766 18.0689 4.86841 18.4338 5.43581 18.7903C5.89211 19.077 6.14532 19.537 6.1453 20.0001C6.14527 20.4632 5.89206 20.9232 5.43582 21.2098C4.86834 21.5664 4.36754 21.9313 3.9823 22.4333C3.24231 23.3977 2.91572 24.6165 3.07439 25.8217C3.14276 26.3411 3.32504 26.8123 3.55807 27.288C3.78191 27.745 4.09111 28.2805 4.46149 28.922L4.5036 28.9949C4.87397 29.6365 5.18316 30.172 5.46701 30.5944C5.76249 31.034 6.07941 31.4275 6.49502 31.7464C7.4594 32.4864 8.67824 32.813 9.88342 32.6543C10.5108 32.5717 11.0772 32.3205 11.6697 32.0073C12.1461 31.7555 12.671 31.7662 13.072 31.9978C13.4731 32.2293 13.7448 32.6785 13.7649 33.217C13.79 33.8867 13.8556 34.5028 14.0977 35.0875C14.5629 36.2105 15.4552 37.1028 16.5782 37.5679C17.0622 37.7684 17.5614 37.8462 18.0899 37.8822C18.5976 37.9169 19.216 37.9168 19.9567 37.9168H20.0409C20.7817 37.9168 21.4001 37.9169 21.9078 37.8822C22.4363 37.8462 22.9355 37.7684 23.4195 37.5679C24.5425 37.1028 25.4348 36.2105 25.9 35.0875C26.1421 34.5028 26.2077 33.8866 26.2328 33.2168C26.2529 32.6785 26.5246 32.2292 26.9256 31.9977C27.3266 31.7662 27.8515 31.7554 28.3279 32.0072C28.9204 32.3204 29.4867 32.5716 30.1141 32.6542C31.3193 32.8129 32.5381 32.4863 33.5025 31.7463C33.9181 31.4274 34.235 31.0339 34.5305 30.5943C34.8144 30.1719 35.1235 29.6364 35.4939 28.9949L35.536 28.922C35.9064 28.2805 36.2156 27.7449 36.4395 27.2879C36.6725 26.8122 36.8548 26.341 36.9231 25.8216C37.0818 24.6164 36.7552 23.3976 36.0152 22.4332C35.63 21.9312 35.1292 21.5663 34.5618 21.2098C34.1055 20.9231 33.8524 20.4631 33.8524 20.0001C33.8524 19.5371 34.1056 19.0772 34.5618 18.7906C35.1293 18.434 35.6301 18.0691 36.0154 17.567C36.7554 16.6026 37.082 15.3838 36.9233 14.1786C36.8549 13.6593 36.6726 13.1881 36.4396 12.7123C36.2158 12.2554 35.9066 11.7199 35.5363 11.0784L35.4941 11.0055C35.1238 10.3639 34.8145 9.8283 34.5307 9.40595C34.2352 8.96628 33.9183 8.57282 33.5027 8.25392C32.5383 7.51392 31.3194 7.18734 30.1143 7.346C29.4869 7.4286 28.9205 7.67986 28.328 7.99302C27.8516 8.2448 27.3267 8.2341 26.9257 8.00257C26.5246 7.77104 26.2529 7.32179 26.2328 6.78334C26.2077 6.11364 26.1421 5.4975 25.9 4.91287C25.4348 3.78982 24.5425 2.89756 23.4195 2.43238C22.9355 2.23191 22.4363 2.15417 21.9078 2.11811C21.4001 2.08347 20.7817 2.08348 20.0409 2.0835H19.9568ZM17.5349 4.74208C17.6635 4.68882 17.8589 4.63969 18.2601 4.61231C18.6725 4.58417 19.2052 4.5835 19.9988 4.5835C20.7925 4.5835 21.3252 4.58417 21.7376 4.61231C22.1388 4.63969 22.3342 4.68882 22.4628 4.74208C22.9732 4.95353 23.3788 5.3591 23.5903 5.86957C23.657 6.0306 23.7122 6.28162 23.7345 6.87678C23.7839 8.19741 24.4655 9.46898 25.6757 10.1676C26.8858 10.8663 28.3278 10.8208 29.4962 10.2033C30.0228 9.92499 30.2678 9.84736 30.4406 9.82461C30.9884 9.75249 31.5424 9.90094 31.9808 10.2373C32.0912 10.322 32.2314 10.4667 32.4557 10.8004C32.6863 11.1435 32.9532 11.6045 33.3501 12.2918C33.7469 12.9792 34.0126 13.4408 34.1945 13.8121C34.3714 14.1732 34.4265 14.367 34.4447 14.5049C34.5168 15.0528 34.3684 15.6068 34.032 16.0451C33.9259 16.1834 33.7361 16.3568 33.2317 16.6737C32.1128 17.3768 31.3525 18.6027 31.3524 20C31.3523 21.3973 32.1127 22.6235 33.2317 23.3266C33.736 23.6434 33.9257 23.8168 34.0318 23.9551C34.3682 24.3934 34.5167 24.9475 34.4445 25.4953C34.4264 25.6333 34.3712 25.827 34.1943 26.1882C34.0125 26.5594 33.7467 27.021 33.3499 27.7084C32.9531 28.3957 32.6862 28.8567 32.4556 29.1998C32.2313 29.5336 32.091 29.6782 31.9806 29.7629C31.5423 30.0993 30.9882 30.2477 30.4404 30.1756C30.2676 30.1529 30.0226 30.0752 29.4961 29.7969C28.3276 29.1794 26.8855 29.134 25.6754 29.8327C24.4655 30.5314 23.7839 31.8029 23.7345 33.1234C23.7123 33.7187 23.657 33.9697 23.5903 34.1308C23.3788 34.6412 22.9732 35.0468 22.4628 35.2582C22.3342 35.3115 22.1388 35.3606 21.7376 35.388C21.3252 35.4162 20.7925 35.4168 19.9988 35.4168C19.2052 35.4168 18.6725 35.4162 18.2601 35.388C17.8589 35.3606 17.6635 35.3115 17.5349 35.2582C17.0244 35.0468 16.6189 34.6412 16.4074 34.1308C16.3407 33.9697 16.2854 33.7187 16.2632 33.1235C16.2138 31.8029 15.5321 30.5314 14.322 29.8327C13.1119 29.134 11.6699 29.1795 10.5015 29.797C9.97494 30.0753 9.72991 30.153 9.55711 30.1757C9.0093 30.2478 8.45528 30.0994 8.01692 29.763C7.9065 29.6783 7.76627 29.5337 7.54196 29.1999C7.31137 28.8568 7.04446 28.3958 6.64762 27.7085C6.25079 27.0212 5.98505 26.5595 5.8032 26.1883C5.6263 25.8271 5.57116 25.6334 5.553 25.4954C5.48088 24.9476 5.62933 24.3936 5.96569 23.9552C6.07179 23.8169 6.26154 23.6435 6.76586 23.3267C7.88483 22.6236 8.64522 21.3975 8.6453 20.0003C8.64537 18.6028 7.88495 17.3766 6.76588 16.6735C6.26167 16.3567 6.07194 16.1833 5.96585 16.045C5.62949 15.6067 5.48104 15.0526 5.55316 14.5048C5.57133 14.3668 5.62646 14.1731 5.80336 13.8119C5.98521 13.4407 6.25095 12.9791 6.64778 12.2917C7.04462 11.6044 7.31153 11.1434 7.54212 10.8003C7.76644 10.4665 7.90666 10.3219 8.01708 10.2372C8.45544 9.90083 9.00946 9.75238 9.55727 9.8245C9.73008 9.84725 9.97513 9.92489 10.5017 10.2032C11.6701 10.8207 13.112 10.8662 14.3221 10.1676C15.5322 9.46896 16.2138 8.19745 16.2632 6.87686C16.2854 6.28164 16.3407 6.03061 16.4074 5.86957C16.6189 5.3591 17.0244 4.95353 17.5349 4.74208Z"
        fill={strokeColor}
      />
    </svg>
  );
};

const Logout: React.FC<IconProps> = ({ className, strokeColor }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.9086 2.0835C22.6293 2.08346 20.7921 2.08344 19.3471 2.2777C17.8469 2.4794 16.5838 2.91089 15.5806 3.91408C14.7057 4.78896 14.2637 5.86409 14.0316 7.12742C13.8061 8.35502 13.763 9.85733 13.7529 11.6599C13.7491 12.3502 14.3056 12.913 14.996 12.9168C15.6863 12.9207 16.2491 12.3641 16.2529 11.6738C16.2631 9.85129 16.3104 8.55949 16.4905 7.57908C16.664 6.63439 16.9426 6.0876 17.3484 5.68185C17.8097 5.22058 18.4573 4.91983 19.6802 4.75541C20.9392 4.58615 22.6077 4.5835 25 4.5835H26.6667C29.0591 4.5835 30.7276 4.58615 31.9865 4.75541C33.2095 4.91983 33.8571 5.22058 34.3184 5.68185C34.7796 6.14312 35.0804 6.79074 35.2448 8.0137C35.414 9.27262 35.4167 10.9411 35.4167 13.3335V26.6668C35.4167 29.0592 35.414 30.7277 35.2448 31.9866C35.0804 33.2096 34.7796 33.8572 34.3184 34.3185C33.8571 34.7798 33.2095 35.0805 31.9865 35.2449C30.7276 35.4142 29.0591 35.4168 26.6667 35.4168H25C22.6077 35.4168 20.9392 35.4142 19.6802 35.2449C18.4573 35.0805 17.8097 34.7798 17.3484 34.3185C16.9426 33.9127 16.664 33.3659 16.4905 32.4213C16.3104 31.4408 16.2631 30.149 16.2529 28.3265C16.2491 27.6362 15.6863 27.0797 14.996 27.0835C14.3056 27.0874 13.7491 27.6501 13.7529 28.3405C13.763 30.143 13.8061 31.6453 14.0316 32.8729C14.2637 34.1362 14.7057 35.2114 15.5806 36.0863C16.5838 37.0894 17.8469 37.5209 19.3471 37.7226C20.7921 37.9169 22.6293 37.9169 24.9086 37.9168H26.7582C29.0375 37.9169 30.8747 37.9169 32.3196 37.7226C33.8198 37.5209 35.0829 37.0894 36.0861 36.0863C37.0893 35.0831 37.5208 33.8199 37.7225 32.3198C37.9168 30.8748 37.9167 29.0376 37.9167 26.7583V13.2421C37.9167 10.9627 37.9168 9.12553 37.7225 7.68058C37.5208 6.1804 37.0893 4.91728 36.0861 3.91408C35.0829 2.91089 33.8198 2.4794 32.3196 2.2777C30.8747 2.08344 29.0375 2.08346 26.7582 2.0835H24.9086Z"
        fill={strokeColor}
      />
      <path
        d="M24.9997 18.7502C25.69 18.7502 26.2497 19.3098 26.2497 20.0002C26.2497 20.6905 25.69 21.2502 24.9997 21.2502H6.71208L9.97983 24.0511C10.504 24.5004 10.5647 25.2895 10.1154 25.8137C9.66614 26.3378 8.87701 26.3985 8.35285 25.9492L2.51952 20.9492C2.24246 20.7118 2.08301 20.3651 2.08301 20.0002C2.08301 19.6353 2.24246 19.2886 2.51952 19.0511L8.35285 14.0511C8.87701 13.6018 9.66613 13.6625 10.1154 14.1867C10.5647 14.7108 10.504 15.5 9.97983 15.9492L6.71208 18.7502H24.9997Z"
        fill={strokeColor}
      />
    </svg>
  );
};

export default {
  Collapse,
  Collapsed,
  Home,
  Learn,
  Play,
  Quests,
  Store,
  Settings,
  Logout,
};