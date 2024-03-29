type HamburguerProps = {
  className?: string;
};

export const Hamburguer = ({
  className,
}: HamburguerProps): React.ReactElement => (
  <svg
    className={className}
    width="25px"
    height="20px"
    viewBox="0 0 25 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>DEBD58E1-C67E-47F7-9E3A-38AE64FC1AC1</title>
    <desc>Created with sketchtool.</desc>
    <g id="Mobile" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="Mobile---Home"
        transform="translate(-326.000000, -24.000000)"
        fill="#FFFFFF"
        fillRule="nonzero"
      >
        <g id="Hero">
          <g id="Hamburger-Menu" transform="translate(326.000000, 24.000000)">
            <path
              d="M0,0 L25,0 L25,4 L0,4 L0,0 Z M0,8 L25,8 L25,12 L0,12 L0,8 Z M0,16 L25,16 L25,20 L0,20 L0,16 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
