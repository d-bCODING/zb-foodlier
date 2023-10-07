const useIcon = () => {
  const IcMenu = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 7.5C4.5 7.10218 4.65804 6.72064 4.93934 6.43934C5.22064 6.15804 5.60218 6 6 6H24C24.3978 6 24.7794 6.15804 25.0607 6.43934C25.342 6.72064 25.5 7.10218 25.5 7.5C25.5 7.89782 25.342 8.27936 25.0607 8.56066C24.7794 8.84196 24.3978 9 24 9H6C5.60218 9 5.22064 8.84196 4.93934 8.56066C4.65804 8.27936 4.5 7.89782 4.5 7.5ZM4.5 15C4.5 14.6022 4.65804 14.2206 4.93934 13.9393C5.22064 13.658 5.60218 13.5 6 13.5H24C24.3978 13.5 24.7794 13.658 25.0607 13.9393C25.342 14.2206 25.5 14.6022 25.5 15C25.5 15.3978 25.342 15.7794 25.0607 16.0607C24.7794 16.342 24.3978 16.5 24 16.5H6C5.60218 16.5 5.22064 16.342 4.93934 16.0607C4.65804 15.7794 4.5 15.3978 4.5 15ZM4.5 22.5C4.5 22.1022 4.65804 21.7206 4.93934 21.4393C5.22064 21.158 5.60218 21 6 21H24C24.3978 21 24.7794 21.158 25.0607 21.4393C25.342 21.7206 25.5 22.1022 25.5 22.5C25.5 22.8978 25.342 23.2794 25.0607 23.5607C24.7794 23.842 24.3978 24 24 24H6C5.60218 24 5.22064 23.842 4.93934 23.5607C4.65804 23.2794 4.5 22.8978 4.5 22.5Z"
          fill={color}
        />
      </svg>
    )
  }
  const IcSearch = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="6" stroke={color} />
        <path d="M20 20L17 17" stroke={color} strokeLinecap="round" />
      </svg>
    )
  }

  const IcBell = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.44784 8.96942C6.76219 6.14032 9.15349 4 12 4V4C14.8465 4 17.2378 6.14032 17.5522 8.96942L17.804 11.2356C17.8072 11.2645 17.8088 11.279 17.8104 11.2933C17.9394 12.4169 18.3051 13.5005 18.8836 14.4725C18.8909 14.4849 18.8984 14.4973 18.9133 14.5222L19.4914 15.4856C20.0159 16.3599 20.2782 16.797 20.2216 17.1559C20.1839 17.3946 20.061 17.6117 19.8757 17.7668C19.5971 18 19.0873 18 18.0678 18H5.93223C4.91268 18 4.40291 18 4.12434 17.7668C3.93897 17.6117 3.81609 17.3946 3.77841 17.1559C3.72179 16.797 3.98407 16.3599 4.50862 15.4856L5.08665 14.5222C5.10161 14.4973 5.10909 14.4849 5.11644 14.4725C5.69488 13.5005 6.06064 12.4169 6.18959 11.2933C6.19123 11.279 6.19283 11.2645 6.19604 11.2356L6.44784 8.96942Z"
          stroke={color}
        />
        <path
          d="M9.10222 18.4059C9.27315 19.1501 9.64978 19.8077 10.1737 20.2767C10.6976 20.7458 11.3396 21 12 21C12.6604 21 13.3024 20.7458 13.8263 20.2767C14.3502 19.8077 14.7269 19.1501 14.8978 18.4059"
          stroke={color}
          strokeLinecap="round"
        />
      </svg>
    )
  }

  const IcHomeLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66663 16.6175C6.66663 14.8493 6.66663 13.9651 7.03257 13.1879C7.39852 12.4108 8.08578 11.8354 9.4603 10.6846L10.7936 9.56829C13.2781 7.48826 14.5203 6.44824 16 6.44824C17.4797 6.44824 18.7219 7.48826 21.2063 9.56829L22.5396 10.6846C23.9141 11.8354 24.6014 12.4108 24.9673 13.1879C25.3333 13.9651 25.3333 14.8493 25.3333 16.6175V22.1401C25.3333 24.5958 25.3333 25.8237 24.5522 26.5866C23.7712 27.3495 22.5141 27.3495 20 27.3495H12C9.4858 27.3495 8.22872 27.3495 7.44767 26.5866C6.66663 25.8237 6.66663 24.5958 6.66663 22.1401V16.6175Z"
          stroke={color}
        />
        <path
          d="M19.3333 27.3496V20.5354C19.3333 19.9831 18.8856 19.5354 18.3333 19.5354H13.6666C13.1143 19.5354 12.6666 19.9831 12.6666 20.5354V27.3496"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  const IcFavoriteLight = ({
    size,
    color,
  }: {
    size: number
    color: string
  }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.93427 18.5442L15.3154 27.3567C15.6398 27.6615 15.802 27.8139 16 27.8139C16.1981 27.8139 16.3603 27.6615 16.6847 27.3567L26.0658 18.5442C28.674 16.094 28.9908 12.0621 26.7971 9.23467L26.3846 8.70304C23.7604 5.32069 18.4929 5.88794 16.6489 9.75145C16.3885 10.2972 15.6116 10.2972 15.3512 9.75145C13.5072 5.88794 8.23967 5.32069 5.61543 8.70304L5.20296 9.23467C3.00931 12.0621 3.32604 16.094 5.93427 18.5442Z"
          stroke={color}
        />
      </svg>
    )
  }

  const IcPinLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 16C26 22.8435 18.3441 27.4086 16.4298 28.4431C16.1606 28.5886 15.8394 28.5886 15.5702 28.4431C13.6559 27.4086 6 22.8435 6 16C6 10 10.8453 6 16 6C21.3333 6 26 10 26 16Z"
          stroke={color}
        />
        <circle cx="16" cy="16.0001" r="4.83333" stroke={color} />
      </svg>
    )
  }

  const IcChatLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z"
          stroke={color}
        />
        <path
          d="M9 11L15 11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15H15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  const IcUserLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="16"
          cy="10.6666"
          r="4.83333"
          stroke={color}
          strokeLinecap="round"
        />
        <path
          d="M6.85847 21.3783C7.7069 19.1009 10.0814 18 12.5117 18H19.4883C21.9186 18 24.2931 19.1009 25.1415 21.3783C25.5255 22.409 25.849 23.6354 25.9594 25.0002C26.004 25.5507 25.5523 26 25 26H7C6.44772 26 5.99602 25.5507 6.04055 25.0002C6.15095 23.6354 6.47449 22.409 6.85847 21.3783Z"
          stroke={color}
          strokeLinecap="round"
        />
      </svg>
    )
  }

  const IcFavorite = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    )
  }

  const IcFavoriteFill = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    )
  }

  const IcAddRound = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6L12 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 12L6 12"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  // color 필요 X
  const IcAddRoundDuotone = ({ size }: { size: number }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="15" fill="#7E869E" fillOpacity="0.25" />
        <path
          d="M20 13.334L20 26.6673"
          stroke="#222222"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M26.666 20L13.3327 20"
          stroke="#222222"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  const IcFileDockLight = ({
    size,
    color,
  }: {
    size: number
    color: string
  }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.08398 10.416L12.9173 10.416"
          stroke={color}
          strokeLinecap="round"
        />
        <path
          d="M7.08398 12.916L10.4173 12.916"
          stroke="#222222"
          strokeLinecap="round"
        />
        <path
          d="M4.58398 5.31602C4.58398 4.47594 4.58398 4.0559 4.74747 3.73503C4.89128 3.45279 5.12076 3.22332 5.403 3.07951C5.72387 2.91602 6.14391 2.91602 6.98398 2.91602H10.2565C10.6234 2.91602 10.8069 2.91602 10.9795 2.95746C11.1326 2.99421 11.2789 3.05481 11.4131 3.13706C11.5645 3.22982 11.6942 3.35953 11.9536 3.61896L14.7144 6.37974C14.9738 6.63917 15.1035 6.76888 15.1963 6.92025C15.2785 7.05446 15.3391 7.20078 15.3759 7.35383C15.4173 7.52647 15.4173 7.70991 15.4173 8.0768V14.6827C15.4173 15.5228 15.4173 15.9428 15.2538 16.2637C15.11 16.5459 14.8805 16.7754 14.5983 16.9192C14.2774 17.0827 13.8574 17.0827 13.0173 17.0827H6.98398C6.14391 17.0827 5.72387 17.0827 5.403 16.9192C5.12076 16.7754 4.89128 16.5459 4.74747 16.2637C4.58398 15.9428 4.58398 15.5228 4.58398 14.6827V5.31602Z"
          stroke={color}
        />
        <path
          d="M10.416 2.91602V5.51602C10.416 6.35609 10.416 6.77613 10.5795 7.097C10.7233 7.37924 10.9528 7.60872 11.235 7.75253C11.5559 7.91602 11.9759 7.91602 12.816 7.91602H15.416"
          stroke={color}
        />
      </svg>
    )
  }

  const IcAddLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 6L12 18" stroke={color} strokeLinecap="round" />
        <path d="M18 12L6 12" stroke={color} strokeLinecap="round" />
      </svg>
    )
  }

  const IcPrevLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 6L9 12L15 18" stroke={color} />
      </svg>
    )
  }

  const IcCloseLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  const IcDeskAltLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 5C16.9045 5 17.6067 5 18.1111 5.33706C18.3295 5.48298 18.517 5.67048 18.6629 5.88886C19 6.39331 19 7.09554 19 8.5V18C19 19.8856 19 20.8284 18.4142 21.4142C17.8284 22 16.8856 22 15 22H9C7.11438 22 6.17157 22 5.58579 21.4142C5 20.8284 5 19.8856 5 18V8.5C5 7.09554 5 6.39331 5.33706 5.88886C5.48298 5.67048 5.67048 5.48298 5.88886 5.33706C6.39331 5 7.09554 5 8.5 5"
          stroke={color}
        />
        <path
          d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z"
          stroke={color}
        />
        <path d="M9 12L15 12" stroke="#222222" strokeLinecap="round" />
        <path d="M9 16L13 16" stroke="#222222" strokeLinecap="round" />
      </svg>
    )
  }

  const IcImgBoxLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 13C5 9.22876 5 7.34315 6.17157 6.17157C7.34315 5 9.22876 5 13 5H27C30.7712 5 32.6569 5 33.8284 6.17157C35 7.34315 35 9.22876 35 13V27C35 30.7712 35 32.6569 33.8284 33.8284C32.6569 35 30.7712 35 27 35H13C9.22876 35 7.34315 35 6.17157 33.8284C5 32.6569 5 30.7712 5 27V13Z"
          stroke={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33 25.626L29.8486 22.4746L29.8228 22.4487C29.1781 21.804 28.6585 21.2844 28.1948 20.9307C27.7135 20.5634 27.2342 20.3282 26.6667 20.3282C26.0992 20.3282 25.6199 20.5634 25.1385 20.9307C24.6749 21.2844 24.1552 21.8041 23.5105 22.4488L23.4847 22.4746L21.7353 24.224C21.2505 24.7088 20.926 25.0315 20.6609 25.2283C20.4041 25.419 20.3004 25.417 20.2428 25.4059C20.1852 25.3948 20.0881 25.3581 19.9205 25.0857C19.7475 24.8045 19.566 24.3844 19.2959 23.7542L17.7869 20.2332L17.7697 20.1932L17.7697 20.1932C17.2571 18.9969 16.8499 18.0467 16.4367 17.3751C16.0135 16.6873 15.5221 16.1873 14.7981 16.0479C14.0742 15.9085 13.4323 16.1902 12.7839 16.6717C12.1508 17.1418 11.4198 17.8728 10.4996 18.7931L10.4688 18.8239L7 22.2926V23.7068L11.1759 19.531C12.1339 18.5729 12.8133 17.8954 13.3801 17.4745C13.9386 17.0598 14.2909 16.9686 14.609 17.0299C14.9272 17.0911 15.2204 17.3066 15.5849 17.8991C15.9549 18.5004 16.3341 19.3818 16.8678 20.6271L18.3768 24.1482L18.3925 24.1848C18.6427 24.7686 18.8524 25.258 19.0687 25.6097C19.295 25.9775 19.5902 26.2986 20.0537 26.3878C20.5171 26.4771 20.9104 26.2886 21.2571 26.0312C21.5886 25.785 21.9651 25.4085 22.4142 24.9594L22.4142 24.9593L22.4424 24.9311L24.1918 23.1817C24.8685 22.5051 25.3411 22.0339 25.7451 21.7257C26.1375 21.4263 26.4057 21.3282 26.6667 21.3282C26.9276 21.3282 27.1958 21.4263 27.5882 21.7257C27.9922 22.0339 28.4649 22.5051 29.1415 23.1817L32.9798 27.02L33 26.9997V25.626Z"
          fill={color}
        />
        <circle cx="27.5" cy="12.5" r="2.5" fill={color} />
      </svg>
    )
  }

  const IcExpandRight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 6L15 12L9 18" stroke={color} />
        <svg
          width={`${size}rem`}
          height={`${size}rem`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        />
        <path d="M9 6L15 12L9 18" stroke={color} />
      </svg>
    )
  }

  const IcExportLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5L11.6464 4.64645L12 4.29289L12.3536 4.64645L12 5ZM12.5 14C12.5 14.2761 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.2761 11.5 14L12.5 14ZM6.64645 9.64645L11.6464 4.64645L12.3536 5.35355L7.35355 10.3536L6.64645 9.64645ZM12.3536 4.64645L17.3536 9.64645L16.6464 10.3536L11.6464 5.35355L12.3536 4.64645ZM12.5 5L12.5 14L11.5 14L11.5 5L12.5 5Z"
          fill="#222222"
        />
        <path
          d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16"
          stroke={color}
        />
      </svg>
    )
  }

  const IcTimeLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8.5" stroke={color} />
        <path
          d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
          stroke={color}
          strokeLinecap="round"
        />
      </svg>
    )
  }

  const IcStar = ({ size }: { size: number }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.3536 6.69044L13.358 5.8236L10.6778 0.418161C10.6046 0.270163 10.4841 0.150355 10.3354 0.0775313C9.96227 -0.105704 9.50887 0.0469921 9.32232 0.418161L6.64213 5.8236L0.646516 6.69044C0.481218 6.71393 0.330088 6.79145 0.214379 6.90891C0.0744931 7.05195 -0.00259025 7.24438 6.6464e-05 7.44392C0.00272317 7.64346 0.0849026 7.83379 0.228547 7.97309L4.56645 12.1804L3.5416 18.1215C3.51757 18.2597 3.53294 18.4018 3.58598 18.5318C3.63901 18.6617 3.72759 18.7743 3.84166 18.8567C3.95573 18.9391 4.09074 18.9881 4.23137 18.9981C4.37199 19.0081 4.51262 18.9787 4.63729 18.9132L10 16.1083L15.3628 18.9132C15.5092 18.9907 15.6792 19.0165 15.8422 18.9883C16.2531 18.9179 16.5293 18.5302 16.4585 18.1215L15.4336 12.1804L19.7715 7.97309C19.8896 7.85798 19.9675 7.70763 19.9912 7.54319C20.0549 7.13208 19.7668 6.75152 19.3536 6.69044Z"
          fill="#FFE921"
        />
      </svg>
    )
  }

<<<<<<< HEAD
  const IcEmptyStar = ({ size }: { size: number }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.3536 6.69044L13.358 5.8236L10.6778 0.418161C10.6046 0.270163 10.4841 0.150355 10.3354 0.0775313C9.96227 -0.105704 9.50887 0.0469921 9.32232 0.418161L6.64213 5.8236L0.646516 6.69044C0.481218 6.71393 0.330088 6.79145 0.214379 6.90891C0.0744931 7.05195 -0.00259025 7.24438 6.6464e-05 7.44392C0.00272317 7.64346 0.0849026 7.83379 0.228547 7.97309L4.56645 12.1804L3.5416 18.1215C3.51757 18.2597 3.53294 18.4018 3.58598 18.5318C3.63901 18.6617 3.72759 18.7743 3.84166 18.8567C3.95573 18.9391 4.09074 18.9881 4.23137 18.9981C4.37199 19.0081 4.51262 18.9787 4.63729 18.9132L10 16.1083L15.3628 18.9132C15.5092 18.9907 15.6792 19.0165 15.8422 18.9883C16.2531 18.9179 16.5293 18.5302 16.4585 18.1215L15.4336 12.1804L19.7715 7.97309C19.8896 7.85798 19.9675 7.70763 19.9912 7.54319C20.0549 7.13208 19.7668 6.75152 19.3536 6.69044Z"
          fill="#d9d9d9"
        />
      </svg>
    )
  }

  const ChefHat = ({ size }: { size: number }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.49965 1C11.3202 1 12.8408 2.275 13.211 3.97594C14.1831 3.71419 15.2198 3.84739 16.0932 4.34624C16.9666 4.84509 17.6051 5.66873 17.8681 6.63597C18.1312 7.60321 17.9973 8.63481 17.496 9.50384C16.9946 10.3729 16.1669 11.0081 15.1948 11.2699V18H3.80453V11.2699C3.32319 11.1402 2.87226 10.9174 2.47746 10.6142C2.08266 10.3111 1.75174 9.93356 1.50358 9.50317C1.25542 9.07279 1.09489 8.59798 1.03115 8.10586C0.967407 7.61375 1.00171 7.11396 1.13209 6.63503C1.26247 6.1561 1.48639 5.70742 1.79104 5.31459C2.0957 4.92177 2.47513 4.59249 2.90768 4.34558C3.34023 4.09866 3.81742 3.93893 4.312 3.87551C4.80659 3.81208 5.30889 3.84621 5.79022 3.97594C5.97421 3.13309 6.44252 2.37826 7.11733 1.83688C7.79214 1.2955 8.63281 1.00019 9.49965 1Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 14H15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  const InitialChefImg = ({ size }: { size: number }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="74"
          cy="74"
          r="72"
          fill="white"
          stroke="#EA5455"
          strokeWidth="4"
        />
        <path
          d="M74.0002 38.75C81.5123 38.75 87.7868 44.0375 89.3143 51.0914C93.3255 50.0059 97.6036 50.5583 101.208 52.6271C104.811 54.6958 107.446 58.1115 108.531 62.1227C109.617 66.1339 109.065 70.412 106.996 74.0159C104.927 77.6198 101.511 80.2543 97.5002 81.3398V109.25H50.5002V81.3398C48.514 80.8018 46.6533 79.8779 45.0242 78.6208C43.3952 77.3637 42.0297 75.798 41.0057 74.0132C39.9817 72.2283 39.3193 70.2593 39.0563 68.2184C38.7932 66.1776 38.9348 64.1049 39.4728 62.1188C40.0108 60.1327 40.9347 58.2719 42.1918 56.6429C43.449 55.0138 45.0146 53.6483 46.7995 52.6243C48.5843 51.6003 50.5534 50.9379 52.5942 50.6749C54.635 50.4119 56.7077 50.5534 58.6938 51.0914C59.453 47.5961 61.3854 44.4657 64.1699 42.2206C66.9544 39.9755 70.4233 38.7508 74.0002 38.75Z"
          stroke="#E45141"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M51.1309 93.6183L97.5003 93.583"
          stroke="#E45141"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  const InitialUserImg = ({ size }: { size: number }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 132 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="66"
          cy="66"
          r="63.5"
          fill="white"
          stroke="#EA5455"
          strokeWidth="5"
        />
        <g clipPath="url(#clip0_621_479)">
          <path
            d="M67.0996 98.5879C58.1651 98.5879 49.5966 95.0387 43.2789 88.721C36.9613 82.4034 33.4121 73.8349 33.4121 64.9004C33.4121 55.9659 36.9613 47.3974 43.2789 41.0797C49.5966 34.7621 58.1651 31.2129 67.0996 31.2129C76.0341 31.2129 84.6026 34.7621 90.9203 41.0797C97.2379 47.3974 100.787 55.9659 100.787 64.9004C100.787 73.8349 97.2379 82.4034 90.9203 88.721C84.6026 95.0387 76.0341 98.5879 67.0996 98.5879ZM67.0996 103.4C77.3104 103.4 87.1031 99.3441 94.3232 92.124C101.543 84.9038 105.6 75.1112 105.6 64.9004C105.6 54.6896 101.543 44.8969 94.3232 37.6768C87.1031 30.4566 77.3104 26.4004 67.0996 26.4004C56.8888 26.4004 47.0961 30.4566 39.876 37.6768C32.6558 44.8969 28.5996 54.6896 28.5996 64.9004C28.5996 75.1112 32.6558 84.9038 39.876 92.124C47.0961 99.3441 56.8888 103.4 67.0996 103.4Z"
            fill="#EA5455"
          />
          <path
            d="M49.2206 72.4416C49.7733 72.1225 50.4301 72.036 51.0465 72.2012C51.6629 72.3664 52.1885 72.7696 52.5076 73.3223C53.9855 75.8841 56.1124 78.0114 58.674 79.4899C61.2355 80.9684 64.1414 81.7459 67.0991 81.7441C70.0567 81.7459 72.9626 80.9684 75.5242 79.4899C78.0858 78.0114 80.2126 75.8841 81.6906 73.3223C81.8474 73.0464 82.0573 72.8043 82.3081 72.6098C82.5589 72.4154 82.8457 72.2725 83.1519 72.1894C83.4582 72.1062 83.7778 72.0845 84.0925 72.1254C84.4072 72.1663 84.7107 72.269 84.9855 72.4277C85.2603 72.5864 85.5011 72.7978 85.6938 73.0499C85.8866 73.302 86.0276 73.5897 86.1087 73.8965C86.1898 74.2033 86.2094 74.5231 86.1664 74.8375C86.1234 75.1519 86.0187 75.4548 85.8582 75.7285C83.9578 79.022 81.2235 81.7567 77.9304 83.6576C74.6372 85.5585 70.9015 86.5584 67.0991 86.5566C63.2967 86.5584 59.5609 85.5585 56.2678 83.6576C52.9746 81.7567 50.2403 79.022 48.3399 75.7285C48.0209 75.1758 47.9344 74.5191 48.0996 73.9027C48.2647 73.2862 48.668 72.7607 49.2206 72.4416ZM62.2866 57.6816C62.2866 61.6664 60.1306 64.9004 57.4741 64.9004C54.8176 64.9004 52.6616 61.6664 52.6616 57.6816C52.6616 53.6969 54.8176 50.4629 57.4741 50.4629C60.1306 50.4629 62.2866 53.6969 62.2866 57.6816ZM81.5366 57.6816C81.5366 61.6664 79.3806 64.9004 76.7241 64.9004C74.0676 64.9004 71.9116 61.6664 71.9116 57.6816C71.9116 53.6969 74.0676 50.4629 76.7241 50.4629C79.3806 50.4629 81.5366 53.6969 81.5366 57.6816Z"
            fill="#EA5455"
          />
        </g>
        <defs>
          <clipPath id="clip0_621_479">
            <rect
              width="77"
              height="77"
              fill="white"
              transform="translate(28.5996 26.4004)"
            />
          </clipPath>
        </defs>
      </svg>
    )
  }

  const ExpandUpLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 15L12 9L6 15" stroke={color} />
      </svg>
    )
  }

  const ExpandDownLight = ({
=======
  const IcArrowDropRight = ({
>>>>>>> e8af56ec45b4378af4cf8f6aa819f7e59471fe8a
    size,
    color,
  }: {
    size: number
    color: string
  }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
<<<<<<< HEAD
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 9L12 15L6 9" stroke={color} />
      </svg>
    )
  }

  const StarLight = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
=======
        viewBox="0 0 30 30"
>>>>>>> e8af56ec45b4378af4cf8f6aa819f7e59471fe8a
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
<<<<<<< HEAD
          d="M10.1437 6.62758C10.9303 4.66658 11.3236 3.68608 12 3.68608C12.6763 3.68608 13.0696 4.66658 13.8562 6.62758L13.8928 6.7189C14.3372 7.82676 14.5594 8.3807 15.0123 8.71739C15.4651 9.05407 16.0596 9.10731 17.2485 9.21379L17.4634 9.23304C19.4092 9.4073 20.3822 9.49443 20.5903 10.1134C20.7985 10.7324 20.076 11.3897 18.6309 12.7044L18.1487 13.1432C17.4172 13.8087 17.0514 14.1415 16.8809 14.5776C16.8491 14.659 16.8227 14.7423 16.8018 14.8271C16.6897 15.2818 16.7968 15.7645 17.0111 16.73L17.0777 17.0305C17.4714 18.8048 17.6682 19.692 17.3246 20.0747C17.1961 20.2177 17.0292 20.3206 16.8438 20.3712C16.3476 20.5066 15.6431 19.9326 14.2342 18.7845C13.309 18.0306 12.8464 17.6537 12.3153 17.5689C12.1064 17.5355 11.8935 17.5355 11.6846 17.5689C11.1535 17.6537 10.6909 18.0306 9.76577 18.7845C8.35681 19.9326 7.65234 20.5066 7.15614 20.3712C6.97072 20.3206 6.80381 20.2177 6.67538 20.0747C6.33171 19.692 6.52854 18.8048 6.92222 17.0305L6.98889 16.73C7.2031 15.7645 7.31021 15.2818 7.19815 14.8271C7.17725 14.7423 7.15081 14.659 7.11901 14.5776C6.94854 14.1415 6.58279 13.8087 5.85128 13.1432L5.369 12.7044C3.92395 11.3897 3.20143 10.7324 3.40961 10.1134C3.61779 9.49443 4.5907 9.4073 6.53651 9.23304L6.75145 9.21379C7.94036 9.10731 8.53482 9.05407 8.98767 8.71739C9.44052 8.3807 9.66272 7.82676 10.1071 6.71889L10.1437 6.62758Z"
          stroke={color}
=======
          d="M18.5195 14.8079L12.5621 9.84346C12.0411 9.40924 11.25 9.77976 11.25 10.458V19.542C11.25 20.2202 12.0411 20.5908 12.5621 20.1565L18.5195 15.1921C18.6395 15.0921 18.6395 14.9079 18.5195 14.8079Z"
>>>>>>> e8af56ec45b4378af4cf8f6aa819f7e59471fe8a
          fill={color}
        />
      </svg>
    )
  }

<<<<<<< HEAD
  const StarFill = ({ size, color }: { size: number; color: string }) => {
    return (
      <svg
        width={`${size}rem`}
        height={`${size}rem`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3072 7.21991C10.9493 5.61922 11.2704 4.81888 11.7919 4.70796C11.9291 4.67879 12.0708 4.67879 12.208 4.70796C12.7295 4.81888 13.0506 5.61922 13.6927 7.21991C14.0578 8.13019 14.2404 8.58533 14.582 8.8949C14.6778 8.98173 14.7818 9.05906 14.8926 9.12581C15.2874 9.36378 15.7803 9.40793 16.7661 9.49621C18.4348 9.64566 19.2692 9.72039 19.524 10.1961C19.5768 10.2947 19.6127 10.4013 19.6302 10.5117C19.7146 11.0448 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64609 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0448 4.36975 10.5117C4.38724 10.4013 4.42312 10.2947 4.47589 10.1961C4.73069 9.72039 5.56507 9.64566 7.23384 9.49621C8.21962 9.40793 8.71251 9.36378 9.10735 9.12581C9.2181 9.05906 9.32211 8.98173 9.41793 8.8949C9.75954 8.58533 9.94211 8.13019 10.3072 7.21991Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    )
  }

=======
>>>>>>> e8af56ec45b4378af4cf8f6aa819f7e59471fe8a
  return {
    IcMenu,
    IcSearch,
    IcBell,
    IcHomeLight,
    IcFavoriteLight,
    IcPinLight,
    IcChatLight,
    IcUserLight,
    IcFavorite,
    IcFavoriteFill,
    IcAddRound,
    IcAddRoundDuotone,
    IcFileDockLight,
    IcAddLight,
    IcPrevLight,
    IcCloseLight,
    IcDeskAltLight,
    IcImgBoxLight,
    IcExpandRight,
    IcExportLight,
    IcTimeLight,
<<<<<<< HEAD
    ExpandUpLight,
    ExpandDownLight,
    StarLight,
    StarFill,
    IcStar,
    IcEmptyStar,
    ChefHat,
    InitialChefImg,
    InitialUserImg,
=======
    IcArrowDropRight,
    IcStar,
    IcArrowDropRight,
>>>>>>> e8af56ec45b4378af4cf8f6aa819f7e59471fe8a
  }
}

export default useIcon
