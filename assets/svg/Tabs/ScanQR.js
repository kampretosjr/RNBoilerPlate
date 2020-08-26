import React from 'react';
import Svg, { Path } from 'react-native-svg';
import {
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_INACTIVE_MENU
} from '../../../app/styles';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgInbox = props => {
  const color = props.active ? COLOR_BASE_PRIMARY_MAIN : COLOR_INACTIVE_MENU;
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.0841 16.7949C21.9637 16.7948 21.8445 16.8185 21.7332 16.8646C21.622 16.9106 21.5209 16.9781 21.4357 17.0632C21.3506 17.1484 21.2831 17.2495 21.2371 17.3607C21.191 17.472 21.1674 17.5912 21.1674 17.7116V20.2494C21.1673 20.4924 21.0707 20.7255 20.8988 20.8974C20.7269 21.0693 20.4938 21.1659 20.2508 21.166H17.7116C17.4685 21.166 17.2353 21.2626 17.0634 21.4345C16.8915 21.6064 16.7949 21.8396 16.7949 22.0827C16.7949 22.3258 16.8915 22.559 17.0634 22.7309C17.2353 22.9028 17.4685 22.9994 17.7116 22.9994H20.2508C20.9799 22.9986 21.6789 22.7086 22.1944 22.193C22.71 21.6775 23 20.9785 23.0008 20.2494V17.7116C23.0008 17.5912 22.9772 17.472 22.9311 17.3607C22.8851 17.2495 22.8176 17.1484 22.7324 17.0632C22.6473 16.9781 22.5462 16.9106 22.435 16.8646C22.3237 16.8185 22.2045 16.7948 22.0841 16.7949Z"
        fill={color}
      />
      <Path
        d="M20.2508 1H17.7116C17.4685 1 17.2353 1.09658 17.0634 1.26849C16.8915 1.44039 16.7949 1.67355 16.7949 1.91667C16.7949 2.15978 16.8915 2.39294 17.0634 2.56485C17.2353 2.73676 17.4685 2.83333 17.7116 2.83333H20.2508C20.4938 2.8335 20.7269 2.93014 20.8987 3.10201C21.0706 3.27388 21.1673 3.50694 21.1674 3.75V6.28917C21.1674 6.53228 21.264 6.76544 21.4359 6.93735C21.6078 7.10926 21.841 7.20583 22.0841 7.20583C22.3272 7.20583 22.5604 7.10926 22.7323 6.93735C22.9042 6.76544 23.0008 6.53228 23.0008 6.28917V3.75C23 3.0209 22.71 2.32189 22.1944 1.80634C21.6789 1.29079 20.9799 1.0008 20.2508 1Z"
        fill={color}
      />
      <Path
        d="M1.91667 7.20583C2.15978 7.20583 2.39294 7.10926 2.56485 6.93735C2.73676 6.76544 2.83333 6.53228 2.83333 6.28917V3.75C2.8335 3.50694 2.93014 3.27388 3.10201 3.10201C3.27388 2.93014 3.50694 2.8335 3.75 2.83333H6.28917C6.53228 2.83333 6.76544 2.73676 6.93735 2.56485C7.10926 2.39294 7.20583 2.15978 7.20583 1.91667C7.20583 1.67355 7.10926 1.44039 6.93735 1.26849C6.76544 1.09658 6.53228 1 6.28917 1H3.75C3.0209 1.0008 2.32189 1.29079 1.80634 1.80634C1.29079 2.32189 1.0008 3.0209 1 3.75V6.28917C1 6.53228 1.09658 6.76544 1.26849 6.93735C1.44039 7.10926 1.67355 7.20583 1.91667 7.20583Z"
        fill={color}
      />
      <Path
        d="M6.28917 21.166H3.75C3.50693 21.1659 3.27386 21.0693 3.10198 20.8974C2.9301 20.7255 2.83348 20.4924 2.83333 20.2494V17.7116C2.83333 17.4685 2.73676 17.2353 2.56485 17.0634C2.39294 16.8915 2.15978 16.7949 1.91667 16.7949C1.67355 16.7949 1.44039 16.8915 1.26849 17.0634C1.09658 17.2353 1 17.4685 1 17.7116V20.2494C1.0008 20.9785 1.29079 21.6775 1.80634 22.193C2.32189 22.7086 3.0209 22.9986 3.75 22.9994H6.28917C6.53228 22.9994 6.76544 22.9028 6.93735 22.7309C7.10926 22.559 7.20583 22.3258 7.20583 22.0827C7.20583 21.8396 7.10926 21.6064 6.93735 21.4345C6.76544 21.2626 6.53228 21.166 6.28917 21.166Z"
        fill={color}
      />
      <Path
        d="M18 17.139V13H6V17.139C6.00214 17.8971 6.29459 18.6235 6.81346 19.1596C7.33232 19.6956 8.03544 19.9978 8.76923 20H15.2308C15.9646 19.9978 16.6677 19.6956 17.1865 19.1596C17.7054 18.6235 17.9979 17.8971 18 17.139Z"
        fill={color}
      />
      <Path
        d="M7.84615 11H18V6.86494C17.9994 6.1053 17.7075 5.37694 17.1883 4.83979C16.6691 4.30264 15.965 4.00061 15.2308 4H8.76923C8.03497 4.00061 7.33094 4.30264 6.81174 4.83979C6.29253 5.37694 6.00059 6.1053 6 6.86494V11H7.84615Z"
        fill={color}
      />
      <Path
        d="M3.76042 11C3.5173 11 3.28414 11.0966 3.11224 11.2685C2.94033 11.4404 2.84375 11.6736 2.84375 11.9167C2.84375 12.1598 2.94033 12.3929 3.11224 12.5648C3.28414 12.7368 3.5173 12.8333 3.76042 12.8333H6.00037V11H3.76042Z"
        fill={color}
      />
      <Path
        d="M20.24 12.8333C20.4832 12.8333 20.7163 12.7368 20.8882 12.5648C21.0601 12.3929 21.1567 12.1598 21.1567 11.9167C21.1567 11.6736 21.0601 11.4404 20.8882 11.2685C20.7163 11.0966 20.4832 11 20.24 11H18V12.8333H20.24Z"
        fill={color}
      />
    </Svg>
  );
};

export default SvgInbox;