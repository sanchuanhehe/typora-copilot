export interface SpinnerProps {
  color?: string;
}

/**
 * An svg spinner.
 * @returns
 */
const Spinner: FC<SpinnerProps> = ({ color = "gray" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "100%", width: "100%" }}
      dangerouslySetInnerHTML={{
        __html: /* html */ `
          <style>
            .spinner_aj0A {
              transform-origin: center;
              animation: spinner_KYSC 0.75s infinite linear;
            }
            @keyframes spinner_KYSC {
              100% {
                transform: rotate(360deg);
              }
            }
          </style>
          <path
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            class="spinner_aj0A"
            fill="${color}"
          />
        `,
      }}
    />
  );
};

export default Spinner;
