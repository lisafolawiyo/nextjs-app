import * as React from 'react';
import { SVGProps } from 'react';

export const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={15}
    viewBox="0 0 26 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.7071 8.07106C26.0976 7.68054 26.0976 7.04737 25.7071 6.65685L19.3431 0.292885C18.9526 -0.0976396 18.3195 -0.0976396 17.9289 0.292885C17.5384 0.683409 17.5384 1.31657 17.9289 1.7071L23.5858 7.36395L17.9289 13.0208C17.5384 13.4113 17.5384 14.0445 17.9289 14.435C18.3195 14.8255 18.9526 14.8255 19.3431 14.435L25.7071 8.07106ZM0 7.36395V8.36395H25V7.36395V6.36395H0V7.36395Z"
      fill="currentColor"
    />
  </svg>
);

export const Cancel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.75 0.75L0.75 24.75M24.75 24.75L0.75 0.75"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={40} height={40} fill="url(#pattern0_646_1469)" />
    <defs>
      <pattern
        id="pattern0_646_1469"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_646_1469" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_646_1469"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACH0lEQVR4nO2csWpUQRhGT2VkQSS2SWWjEBCx8w3sLHwFS5NU4iNYW2slSF7BTrFQU6mVaG+riAGt/GXhFqk2E/ffmdnZc+Ar987/HYZ77y7sgIiIiIiIiIiIzLkIHALHwAkQg+YEeA8cAFu1Je8CnzqQEJXzcepebSdvouQ4JbvKzj7soGw0zn4N0ccdFI3GeVdD9K8OikbjzB2snNYlo5MoGkUzUhSNohkpikbR1Mx34DlwH7gJ7ACzqcM2cAW4CuwBd4AjRXNuwQ+BS+fsNf+MoinLF+D6f/ZSNGX5ClxeopeiOTt/gFtL9lI0Z+dJQi9Fszh/gWsJvRTN4rxJ6qVoFudxUi9Fszh3C+e+Dbyc3rMz1l050Vn2CmaefzP8nbzuyonOslMw84sVrLtyorPMCmb+rGiqFP6haKoUbrXuUrQWG4pWdCqtxYai17DMKZ71Ntuool/3Ntuoor/1NtuIomfTz61dzTai6Bs9zjai6Hs9zjai6Ec9zjai6Kc9zjai6FebLjqSCq/lJmgtNhSt6FRaiw1FKzqV1mJD0YpOpbXYULSiU2ktNhSt6FRaiw1FKzqV1mJD0YpOpbXYULSiU2ktNhSt6FRaiw1FK3ro49hKyF7zJxt4wGAJa3nA4EEHcqOx6AdUYGs6CHVTRX8ALlCJ3Y5kl5ApueQPpOk7e3+6X7V8QJawzPXn3d5Ot4tqO1lEREREREREhI75B81jE8zKfsYHAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export const Instagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={40} height={40} fill="url(#pattern0_646_1470)" />
    <defs>
      <pattern
        id="pattern0_646_1470"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_646_1470" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_646_1470"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0klEQVR4nO2cy49URRSHv1nA4Lp14QAmSIyiKI4zSgYlhqWJErc8tiQ+AHfiygkrCRpWDjoRloqS+HZUosQ/wGA0KGIC6hIRMIhxHKaZMpUcksmk7+3XOXWr69aX/JJJZ7rq1C/dp089bkEmk8lkMplMJpPJ1JRhYAuwH/gQOANcAa4DriLNSQw/SUw+tscl1oHjIWAa+KtCQ12X8ua/ATzIALAB+DwC01wfWgA+Ax4gQlYAh4D5CIxySvJjeU3GFgV3Ad9HYIwz0nfA2qpNHgcuRmCGM9ZlYKIqkx8G/o7ABBdIfqxjVaSLPyMYvAusP4A7Q5m8QvKWq6l+AG4JYfShCAbrKtZBa5PvT6yEcz1qXuYMZnwRwSBdJPrEyuRRmTW5hDQHvAiMiPbJa528d8Fquj4dgTFOWd7Ypezr4v2HtU0eHrAFIteh/Kd4KSNdTmSWaxq9JQJTXCCjV3bZxmZNo/dHYIoLlDpe6rKNSU2jP4rAFGegOTG7lx/Dm/pA0+gzFRlxDpgCtknV0wCWiRry2nb5UTpfUYw/ahp9KWDgTeAdYFOXMQ4BjwLHpI1Q8fo1HzW6/Tr1qhPA3QrxrgO+DhTzfyhiHey/wC70eQaYDRC/GpZBXpQNBCseCbCkq4alyfdgzzpjs9WwShfjHfR9B7AH+BI4C/wjOiuv7QZWd9DORsM0ooZFcLva9LkKONphBeH/54jM6sp4tm5Gn2jT39PAtR739ba2aftkXYxutinhXgBu9NG+f+/ekvbvNaizozT67Taf5H5MXmx22Sf7vToYvakkJ/eSLsrSSKvVOc9jqRt9TqbKrTiqPHivtwr68jH8lrLRUyUlnMX6RFO+Ka14M2WjtxW0v8fA5Jt6vqDPHSkbPVrB7vpMQZ9jKRvdKGj/F0Oj/QyyFbelbPTygvY1q42l8m0XbThno9HT1Toa3ShoP6cOZaNHC9rPP4bKRm8vaH+3odHPFfS5M2WjDxe0v9powjJfMmGZTtno8yVT8CMGRnszW+Fj+D1lo50cCWjFSuVnYny1cXtBX5uVxxSl0cdK+nlCKYX4ZdKnSvo5Xgejm7JZWsRehYV/v3ZSxHqlNe/ojXbAV23629pjGvHp4smSdn1u/sZgPNEa7eRwSxkjsp7c7LC6mC7JydZlpBoWwc3K4ZZ2rJKlTv8w/88yXb8mf89InVxUwi1mQo5v1c5oJ4dayvK1FvcZH9RUwxmbvRE7JgKchlXDGWtWDrdoMiQ52SpdmBgd6tjuSTl30S/rjaoL82O7IQ+i3wDelSMBRdP1VgzJjO+4QZ0c7CB6VY9W/Cq71TtkWbMhmwdet8prO6W00zw+UNmjFak+LOQU9L6m0ak+/uYU9LKm0ak+0OkU5H9L1BiWe+GqHpSLTJfkUTxVNI9QuUT0OgakeI2E60MLlpcQzkQwQBeJfCVmujhT5QWuLhLNh7hS89UIBuoq1gEC4CuQUxEM1lWkb0NegbxWLttzNdMFYA2BGa/ZlZlX5V7sShirySf7QpUmL04jpxLPyWuIhGG5RjKl0u868Ir2LWCaV2p+OuAzyAXgY6WdHnM2yKNulyMwznWxQDRlfeeoFctke2lSFshPy4BC7UG20pzEcFpimpQY1VfhMplMJpPJZDKZTIZB4H8tlmGR0hVzRQAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export const Tiktok = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={40} height={40} fill="url(#pattern0_646_1471)" />
    <defs>
      <pattern
        id="pattern0_646_1471"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_646_1471" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_646_1471"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO2cO2gUQRyHP4N6Ri19gKYUoiJokChaqI2gohjxSXxEfHQxwVaxskhhK/hKZRELKytBBC3UGBGjhS98EEHUQqImERRNRlYmcITc7HPmdm/+H/y6u//MfOztze7MLgiCIAiCIAiCIAiCIAgBM4BOoA8YAVSNZgR4CHQAJdeSG4BnOZCgHOepHruzI9lHyapMtpMjuzMHg1VVzgkXovtyMFBV5fS6ED2cg4GqKidwYJ1qD1LlJCIaEU0txUvRxw39vSqiySzHDP09KaJxIrpJRJNZjob0uV9E40R0m4gmkxwJ6fMU4IGIxrrogMXAoIjGuuiADcAvEU3iHI7R/zXAZxGNddEBC4AeYExEY1X0OM3AlYTnbuuoHKYt5ZimAcuBvcBPEU3FHMpwfFGPbusUTXR9zPGJaJKJvgBMjTE+EU3lHDD097m+VVoXcXwimuSig89cB2ZFGJ+IJp3oIK+A9SHj81b0EPAO+Gb4zP6IosdzC2jRm4G8FD0GPAJOASuAmWXtns1QdPm+untAN3BOJ+q9EOvYknwbWGlo1yS6NaHoNLFO1h0eBLZFaFdEp8gbYEnEdk2i9xm+573ot8CcGO2K6IQziWUx2zWJDm4GVcJr0QcTtCuiY+ZJhMvhYDF1N3AD+KK/91tEx8umCKsfcVes9xjqeSn6U8jRPB8YSFBXRE/IxZDaNxPWDU4zlfBSdIuh7roUdUX0hDQZ6p5PUXeXoa6XoucZ6t5PUXenoa6XokuWhGw31H3po+gGQ927KequMtT96KPoZkPdrhSPolVa6Z4O/PFRdKuhbnDvYzRBzctV2O2fe9E9IbW7Y9b7qi9yKnHGV9Hf9c+5EvUxLr+DO4BrQ/r62FfRKsL2rXq98XA05FnsxpA6zSl3ixZe9ECF1efJztldejbyQs+zg11HGyP2845FyYUQrfQqt012WJZcGNF/gS2W+tcYsgfEK9FKr34vzbhvc4HXDiQXSrQCfgBbM+pXcE5/70hy4UQrfeV2OuIf5GTU6UcrhhxKLqRopfNBT/1M8+yJgjfrl0m5FFx40arsouaavlxfDSzUG8lnA4v0nbpLGT3C5rVoVZCIaEQ0tRTryOvY+D8ttY68YBA3LxjsyMFAVZXT7kJ0qYpzV5WD9MeY66emwVPZ/Xpe75SSfutsb43/QQ7rVZ92l0eyIAiCIAiCIAiCIAgCOeYfriQN+9+mKPIAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export const TwitterX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={40} height={40} fill="url(#pattern0_646_1472)" />
    <defs>
      <pattern
        id="pattern0_646_1472"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_646_1472" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_646_1472"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERElEQVR4nO2cW6gWVRTHf3k7Ha8ZVnjpQeyCGEGBRC8+hClSvvjmg+alejKFwFTUh16DELJThOBrKSZeHnwSNfJGxckLXjCFIsqSpPLglc6OHdsYVmtO831z+ebbs/6wHs73rVl75vftM7PXWjMDJpPJZDKZTCaTyWQymUwmrweBNcBJYABwkdoAcAJYDfRUDXkacKoGEFzF9m049spmchMhuwTsSmb2mhocrOuwvVUF6JM1OFDXYTteBegbNThQ12HzDEpXpw/S1cQMNAaamMxAY6CJyQw0BpqYzEBjoInJagt6YRtj+eLN6QKgrBJx5wC3YwX9K/BYG+M9B9zJMe57It5M4HrMM9oBe9scc32b4+0ChiXiTAIuFQC59qAd8LqINxlYp9jDCZ/hwBdtVNh6EzF6Q6fENQX0APCUiLlL8dstfB5v4V/+ijhN+Vn9eYGQuwK0A74CRiZiPgL8rPgtFWO/liH2b8DTYrv3C4bcNaAdsFnEnQ8MKnXfJ4TfjiFi3gVeEv5vlAC5q0DfA14QsT9W/L4M5+j7mgj8oPj5H2mJiLcgjNNo0A74DhibiD0auKD4bRD78LIy+zcJn2eA30uC3HWgHfCRiP98OAXI2T9b+H2Q+H67+G5KyqxvNOhB4FUxxmbF71yY8cnbHnzWeBgYlfh8HNBfMuSuBO3CisOvPO7Ln5OPKn5bxb7MAh5K/D0COFAB5K4F7YA9YpzpwB/K7H9liH37sCLIXQ3aASvFWCsUn19SaibvVAi560H/CcwQ4+3OkDWOLXmFER1oBxwT62ZfCPpJ8fOzPallBpqWbVOGdbOvmTzZQtZooMmWNW7NMfsNNOl2SWSNft18JkPNRJv9BpqhrS9Dt0Wb/VUs86ICfR0YL8bfoPhdBMYkfHwGed5Ak8nuhtOAlC/iH1L8feVP1kzy9BobAXowLNfSlNZtkZ32jQaaIe1dpXO9WHy2VNnuKvBowmd4qGcbaP5rnwIPKJ1rbd38mbL9AbG9VjNpPOgj4omn3rBWTls3+8rd90qcN8U+LzfQ/GvnQ5vq/zrXMmucm5I1ygbtTgMN15QmbFrnWls3b1H8vhad9qKzxtJVNOSbwIstdq5l1tiT8pCpvKjOKzBrLF1FQv4LWNRm57pP6bbcUma//BH7mgj67Ryda63bslbxuxz6iMmaydkmgf6kgM617Lb4C+hBxW9bCVlj6SoC8n6xTBsXHmZvJ5Z2j5520+SEgrPG0pUX8jfiQuaB78sZ06+TW9WwcKtClKB/VN53UURJU8sasyhP1li68jRen81w8WrXjorTUVatiA20i8wMNAaamMxAY6CJyQw0BpqYzEBjoInJSpe9jo1/0vbSZS8YpJoXDK6uwYG6Dpt8LUUp6slRO3YRWL94CqxUTWso7H5gKhWrJ7x19njkF8gb4cadVVXOZJPJZDKZTCaTyWQymUwmaqy/Ab7ICC49SlToAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export function FacebookBlack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#000"
        d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2"
      ></path>
    </svg>
  );
}

export function InstagramBlack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#000"
        d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
      ></path>
    </svg>
  );
}

export function TwitterXBlack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.334 3.5a.75.75 0 0 0-.338 1.154l5.614 7.45l-5.915 6.345l-.044.051H6.03l4.83-5.179l3.712 4.928a.75.75 0 0 0 .337.251h4.422a.75.75 0 0 0 .336-1.154l-5.614-7.45L20.017 4.5h-2.05l-4.83 5.18l-3.714-4.928a.75.75 0 0 0-.337-.252zm10.88 13.548L6.431 5.952H8.45l9.114 12.095z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function TiktokBlack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M3.657.475C4.731.355 5.852.25 7 .25s2.269.105 3.343.225a3.63 3.63 0 0 1 3.194 3.203c.115 1.069.213 2.182.213 3.322s-.098 2.253-.213 3.322a3.63 3.63 0 0 1-3.194 3.203c-1.074.12-2.195.225-3.343.225s-2.269-.105-3.343-.225a3.63 3.63 0 0 1-3.194-3.203C.348 9.253.25 8.14.25 7s.098-2.253.213-3.322A3.63 3.63 0 0 1 3.657.475m4.675 2.407a.625.625 0 0 0-1.234.141V8.8a1.552 1.552 0 1 1-1.552-1.552a.625.625 0 1 0 0-1.25A2.802 2.802 0 1 0 8.348 8.8V5.31c.6.51 1.374.79 2.282.79a.625.625 0 1 0 0-1.25c-.66 0-1.15-.204-1.511-.525c-.368-.328-.641-.816-.787-1.443"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function Youtube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#000"
        d="M15.073 2.5c1.824 0 3.293 0 4.45.155c1.2.162 2.21.507 3.012 1.31c.803.802 1.148 1.813 1.31 3.013C24 8.134 24 9.603 24 11.427v1.146c0 1.824 0 3.293-.155 4.45c-.162 1.2-.507 2.21-1.31 3.012c-.802.803-1.812 1.148-3.013 1.31c-1.156.155-2.625.155-4.449.155H8.927c-1.824 0-3.293 0-4.45-.155c-1.2-.162-2.21-.507-3.013-1.31c-.802-.802-1.147-1.812-1.309-3.013C0 15.866 0 14.397 0 12.573v-1.146c0-1.824 0-3.293.155-4.45c.162-1.2.507-2.21 1.31-3.013c.802-.802 1.813-1.147 3.013-1.309C5.634 2.5 7.103 2.5 8.927 2.5zm1.426 9.501L9.3 7.832v8.338z"
      ></path>
    </svg>
  );
}

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={30} height={30} fill="url(#pattern0_782_2216)" />
    <defs>
      <pattern
        id="pattern0_782_2216"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_782_2216" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_782_2216"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMklEQVR4nO3cT0obYRjH8a/d2Qu0Lpw4Z+gY3TTYKxUFW2+hFgtVL2FJQEuv0dYTqIXqRklWr0Qm0EWkmb7/5kl+H3i24zuPMIPDF0FERERERERERKxYAt4Bp8AlcF/PL+AE2Mp9wHlQAt8B94/5BqzlPqxVXeD3DEuezA1Q5T60NZ16ca7hXANF7sNbMviPJU/ma+7DW7HuseTJbOa8gZfAJ+AuwI24DDME3gOvgNfANjDyvOYtcAgsh1z05xYsy3nM7pR7+hjo2uPdBPECeGjBspzHFM+8NENc+77ekRbN9EUXbVv0PDw6Pky5p71A1z4ioPED/6B+ATiDM6pfgCv17AR4Gf4B9kO/DK2oAvxSNnLfhBV9jyWf5T68JUX953TTJV8Bq7kPb/ERctNgyeNfzJvch7b8mfRihiWf6zNpGD3gGPj514f/H8AX4G2gnyEiIiIiT9RdJFCqu4ivq+4ivo66izQGHp8x1V0sSndhvesYRuguYo/JrmM3YncRe0x1HUXE7iL2mOo6iojdhZlF53p07LVgiXPXdYwidBexp9VdRxXgBtVdzKjvsWR1Fw0U6i7SqdRdpFOqu0irp+5CREREZFEtqQOJr1QHEl9XHUh8HXUgaQw8PquqA5nRwnUgbft/HcMWdCAmuw5nuAMx1XU4wx2Iqa7DGe5ATHUdznAHYqrrcAY7kFZ3HU2pA0mo77FkdSANqANJqFIHkk6pDiStnjoQERERERERERGyegSSsVgopSLmjwAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export const DeliveryBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={41}
    viewBox="0 0 30 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={30} height={41} fill="url(#pattern0_779_1895)" />
    <defs>
      <pattern
        id="pattern0_779_1895"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_779_1895"
          transform="matrix(0.0111111 0 0 0.00813008 0 0.134146)"
        />
      </pattern>
      <image
        id="image0_779_1895"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const ProfileGuy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={46}
    viewBox="0 0 30 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={30} height={46} fill="url(#pattern0_779_1896)" />
    <defs>
      <pattern
        id="pattern0_779_1896"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_779_1896"
          transform="matrix(0.0111111 0 0 0.00724638 0 0.173913)"
        />
      </pattern>
      <image
        id="image0_779_1896"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const CallIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={31}
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={30} height={31} fill="url(#pattern0_779_1897)" />
    <defs>
      <pattern
        id="pattern0_779_1897"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_779_1897"
          transform="matrix(0.0111111 0 0 0.0107527 0 0.016129)"
        />
      </pattern>
      <image
        id="image0_779_1897"
        width={90}
        height={90}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFj0lEQVR4nO2ca4hWRRjHf++aa+umKWnmhUjB9kM36ELYjexDRVQfKkqLiuhitF9KC7oQJamYGJGpKURUtmV9KEoqSEq2oLSbrXSnFCWhWt0stHVd3RMDzwuxvGfOOXNmzpz3fecHz5dlzjtz/jtn5nmeuUAgEAgEAoFAIBAIBKwyGlgF7AMGgD7gV+BrYD2wEJgDTLNbbfOxBohS2k9S/hKgxXfD64kW4N8MQv/fdgFLQk93L3TVDgJrgRkp62xa1uQUumqHgKVAu+8XKittwLPAX5YE3wlcSZ191tcD7wN7gL3S+8Y6rLMVGC/DwMXAXcAzwFbgSAaxh4Cn5fdKzdlAT8xLfAKM8NCm44BbgQ8ziL4FmEJJuQMYTHiBezy38SRgJdCfQuwdQAcl46GUPWWP9DDfnAC8IEOFrr1/AmdREu7OOOmsojycD/yQQmzvPfs8cY+yCH0YOIPycAzwcophxNuYfTTwi6Er1Q1UHOQ6vgPeBB4HLsroPdybMFlu8eWNPJzTb51TQMCixF+d4Quam/CFKtev8N78e06hd+WIxrKG4GrS2wCcmuK3b9T07KGig5prcoociT1RcK5D9dZlwKgUw4gugiwsXH/ektD9OZI6eXIdX6aod53meZUbKYSvLAkdAW95ynWooe/MBG/kx5hn1eQ7nQLosyh0BFyasz0jgeOBc4H7gE3iRibV+3eC2Bdoghr1RTnnoGWhvxexbKIi0EXAgRQ9W9c7X4x5TmkwFcfkTbpHNWy+o7aqQOPVhLq/0EyQUzS5kcU4ZocDoffJ5++K+xOGE90Et1rjgThdg9zoQOgIeKQAt/SwxvU7Jea56RrferbLBi93JPRruOcBTf1va577yEeS7HJHQi81zHXslyzcWllhSWJ9TP3Kwzg95pnbYp5RLqAzRqdMnmexAWCmpYBlY4InMVXjjcT10IkaV8+p99FlWehllkPwXmCW5jeWaBYn4lzNuGW6G3DIbIsi/waMcZDr6NX07ImaifHCmGdWxJR/DIdUUqxOpLW5DnMdH2h+ozujcPNiyis/3Sk3WRB5UwG5jrgJcn5MebV4kOUrVkkqp4yQ8NlU5MGUOeIkJoto/RnzErNiyn8bU35GTPntFMB1OYTustyWBTH1qM5Qi0masb0WEzKWt857hkLf6WAbQa16/okpP0qTMLJR3jonG2b0FjhoS60xu89jeessNBB6q4OkzMoa9azwWN46rTL7ZhV7seV2tMnkd0DsOfmbr/JO6EiRaI+G2ZCjyKqSce+I6/Let4hFEuWd47PR9Yj6L79uIPZO8RoCGVD7HrYZiL1NNpQHMu5F7jUQ+7NwnsRsgSDNsn80zN4BjvLd+Hqj00DoCHjJ96xejzxpKPY6B/s9GpqK9FATsTf4CAjqmVbNSnKSfQyM8/0C9cRYYLOh2N8Y+tkqWn0KeAN41PEmnVJxrGFOpLq2mDaCbJcjFgPDfmO//D1pj3RDMEFWMUzEVqsoNyf8/lVyoiDpaokraAImAz8bij0kO0WHp1hP0yy46vZnN/wNB9OkZ0WG1iNbvDolvzKY4ytZ1OgR6STDvIgL2w3c0siB0njg8xIIXbXukh06tco44NMSiFy1I3KiVu1oajjGyHUPUYlsr9zK4OMKDOcRZFcJBK61o0rFAA1FJUciyqWV6WYGq3Qa5rNd2R80MJfJOBmVwArdKOODE3PkR2zauzQB7Yar6zZNbehsGuYZbNKxYT3NeK9pR8FDyaGEM+MNzUjZWGn7XHotu933y5aBmXJOxZXID/p+wbJxrVxeZUvgAQcb5RuGFrkTKc+5mkhy5Oruj0CKEF6dxHol45UXu+UWhNJfAltG2iS6XC5j+XaJ8PrkUpTNsrH86iBwIBAIBAKBQCAQCAQCgQCp+Q8ybESCcpC3RAAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);

export const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export const WhatsApp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);
