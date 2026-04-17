import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Path,
  Rect,
  SvgProps,
} from 'react-native-svg';
import { colors } from './colors';
import { hpx, wpx } from '../utils/metric';

type Props = SvgProps & {
  rotate?: number; // degrees
};
export const Mail = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M18.3333 4.99967C18.3333 4.08301 17.5833 3.33301 16.6667 3.33301H3.33332C2.41666 3.33301 1.66666 4.08301 1.66666 4.99967M18.3333 4.99967V14.9997C18.3333 15.9163 17.5833 16.6663 16.6667 16.6663H3.33332C2.41666 16.6663 1.66666 15.9163 1.66666 14.9997V4.99967M18.3333 4.99967L9.99999 10.833L1.66666 4.99967"
      stroke={props.stroke || 'currentColor'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const ChevronDown = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 9L12 15L18 9"
      stroke={props.stroke || 'currentColor'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const X = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 6L6 18M6 6L18 18"
      stroke={props.stroke || 'currentColor'}
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const PasswordHand = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 14H6C4.34315 14 3 12.6569 3 11V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V10"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 15.9998L14.4145 15.4143C14.1493 15.149 13.7895 15 13.4144 15C13.0393 15 12.6795 15.149 12.4143 15.4143V15.4143C11.9376 15.891 11.8636 16.6379 12.2375 17.1988L14.1775 20.1093C14.5485 20.6658 15.173 21 15.8418 21H19.6378C20.6465 21 21.4973 20.2489 21.6224 19.248L21.9843 16.3512C22.1177 15.284 21.3831 14.3024 20.3217 14.1293L18 13.7507V11.5C18 10.6716 17.3284 10 16.5 10V10C15.6715 10 15 10.6716 15 11.5V15.9998Z"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.01 8.46463C10.0243 8.47893 10.0285 8.50044 10.0208 8.51912C10.0131 8.53781 9.99483 8.54999 9.97461 8.54999C9.95439 8.54999 9.93615 8.53781 9.92842 8.51912C9.92068 8.50044 9.92495 8.47893 9.93925 8.46463V8.46463C9.95877 8.44514 9.99039 8.44514 10.0099 8.46463"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.01 8.46463C13.0243 8.47893 13.0285 8.50044 13.0208 8.51912C13.0131 8.53781 12.9948 8.54999 12.9746 8.54999C12.9544 8.54999 12.9362 8.53781 12.9284 8.51912C12.9207 8.50044 12.925 8.47893 12.9393 8.46463V8.46463C12.9588 8.44514 12.9904 8.44514 13.0099 8.46463"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.00996 8.46463C7.02426 8.47893 7.02854 8.50044 7.0208 8.51912C7.01306 8.53781 6.99483 8.54999 6.97461 8.54999C6.95439 8.54999 6.93615 8.53781 6.92842 8.51912C6.92068 8.50044 6.92495 8.47893 6.93925 8.46463V8.46463C6.95877 8.44514 6.99039 8.44514 7.00991 8.46463"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const ChevronRight = ({ rotate = 0, ...props }: Props) => (
  <Svg
    style={{
      transform: [{ rotate: `${rotate}deg` }],
    }}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M9 18L15 12L9 6"
      stroke={props.stroke || 'currentColor'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const ForgotPassword = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.0022 15.8167V13.981"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.0016 17.9023C16.9743 17.9023 16.9521 17.9245 16.9521 17.9518V17.9524C16.9521 17.98 16.9745 18.0024 17.0022 18.0024C17.0298 18.0024 17.0522 17.98 17.0522 17.9524C17.0522 17.9247 17.0298 17.9023 17.0022 17.9023H17.0016"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.0021 21.0037C14.2395 21.0037 12 18.7642 12 16.0016C12 13.239 14.2395 10.9995 17.0021 10.9995C19.7647 10.9995 22.0042 13.239 22.0042 16.0016C22.0042 17.3282 21.4772 18.6005 20.5391 19.5386C19.601 20.4767 18.3287 21.0037 17.0021 21.0037"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.17328 7.82169C7.27101 7.91943 7.27101 8.07789 7.17327 8.17563C7.07553 8.27337 6.91707 8.27337 6.81933 8.17563C6.72159 8.07789 6.72159 7.91943 6.81933 7.82169C6.91716 7.72418 7.07544 7.72418 7.17328 7.82169"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.1752 7.82169C12.273 7.91943 12.273 8.07789 12.1752 8.17563C12.0775 8.27337 11.919 8.27337 11.8213 8.17563C11.7235 8.07789 11.7235 7.91943 11.8213 7.82169C11.9191 7.72418 12.0774 7.72418 12.1752 7.82169"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.1791 7.82169C17.2769 7.91943 17.2769 8.07789 17.1791 8.17563C17.0814 8.27337 16.9229 8.27337 16.8252 8.17563C16.7275 8.07789 16.7275 7.91943 16.8252 7.82169C16.923 7.72418 17.0813 7.72418 17.1791 7.82169"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.99859 13.0007H4.99693C4.46623 13.0009 3.95722 12.7901 3.58196 12.4149C3.2067 12.0396 2.99609 11.5306 2.99609 10.9999V4.99742C2.99609 4.46672 3.2067 3.95771 3.58196 3.58245C3.95722 3.20719 4.46623 2.99644 4.99693 2.99658H19.0028C19.5335 2.99644 20.0425 3.20719 20.4177 3.58245C20.793 3.95771 21.0036 4.46672 21.0036 4.99742V7.99867"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const AccountSettingIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 15V16"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 20V21"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.3996 16.5L16.2996 17"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.7004 19L20.6004 19.5"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.3996 19.5L16.2996 19"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.7004 17L20.6004 16.5"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.4 16.6C20.2 17.4 20.2 18.6 19.4 19.4C18.6 20.2 17.4 20.2 16.6 19.4C15.8 18.6 15.8 17.4 16.6 16.6C17.4 15.8 18.6 15.8 19.4 16.6"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.9995 5.2C16.6995 6.9 16.6995 9.6 14.9995 11.2C13.2995 12.8 10.5995 12.9 8.9995 11.2C7.3995 9.5 7.2995 6.8 8.9995 5.2C10.6995 3.6 13.2995 3.6 14.9995 5.2"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 20C4 17.5 6 15.5 8.5 15.5H11.1"
      stroke={props.stroke || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const DiscountIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.9889 14.6604L2.46891 13.1404C1.84891 12.5204 1.84891 11.5004 2.46891 10.8804L3.9889 9.36039C4.2489 9.10039 4.4589 8.59038 4.4589 8.23038V6.08036C4.4589 5.20036 5.1789 4.48038 6.0589 4.48038H8.2089C8.5689 4.48038 9.0789 4.27041 9.3389 4.01041L10.8589 2.49039C11.4789 1.87039 12.4989 1.87039 13.1189 2.49039L14.6389 4.01041C14.8989 4.27041 15.4089 4.48038 15.7689 4.48038H17.9189C18.7989 4.48038 19.5189 5.20036 19.5189 6.08036V8.23038C19.5189 8.59038 19.7289 9.10039 19.9889 9.36039L21.5089 10.8804C22.1289 11.5004 22.1289 12.5204 21.5089 13.1404L19.9889 14.6604C19.7289 14.9204 19.5189 15.4304 19.5189 15.7904V17.9403C19.5189 18.8203 18.7989 19.5404 17.9189 19.5404H15.7689C15.4089 19.5404 14.8989 19.7504 14.6389 20.0104L13.1189 21.5304C12.4989 22.1504 11.4789 22.1504 10.8589 21.5304L9.3389 20.0104C9.0789 19.7504 8.5689 19.5404 8.2089 19.5404H6.0589C5.1789 19.5404 4.4589 18.8203 4.4589 17.9403V15.7904C4.4589 15.4204 4.2489 14.9104 3.9889 14.6604Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 15L15 9"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.4945 14.5H14.5035"
      stroke={props.stroke || '#111927'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.49451 9.5H9.50349"
      stroke={props.stroke || '#111927'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const SubscriptionIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 6V18"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const HelpSupportIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.0037 12C21.0037 16.9726 16.9726 21.0037 12 21.0037"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.99609 11.9998C2.99609 7.02721 7.02721 2.99609 11.9998 2.99609"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.99609 11.9992C2.99623 13.0539 3.18381 14.1001 3.55008 15.0891C3.71759 15.5484 4.18986 15.822 4.67165 15.7388L5.65825 15.5648C6.45566 15.4242 6.99772 14.6764 6.88321 13.8748L6.58627 11.7962C6.52878 11.3938 6.31051 11.032 5.98139 10.7934C5.65227 10.5549 5.24046 10.46 4.84015 10.5306L3.07883 10.8412"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.0037 11.9998C21.0037 7.02721 16.9726 2.99609 12 2.99609"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21.002 11.9992C21.0018 13.0539 20.8143 14.1001 20.448 15.0891C20.2805 15.5484 19.8082 15.822 19.3264 15.7388L18.3398 15.5648C17.5424 15.4242 17.0004 14.6764 17.1149 13.8748L17.4118 11.7962C17.4693 11.3938 17.6876 11.032 18.0167 10.7934C18.3458 10.5549 18.7576 10.46 19.1579 10.5306L20.9192 10.8412"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.4924 12.4908C13.4894 12.4908 13.4866 12.4926 13.4855 12.4954C13.4843 12.4982 13.485 12.5014 13.4871 12.5035C13.4892 12.5057 13.4925 12.5063 13.4952 12.5052C13.498 12.504 13.4999 12.5013 13.4999 12.4983C13.5 12.4962 13.4992 12.4943 13.4978 12.4928C13.4964 12.4914 13.4944 12.4907 13.4924 12.4908"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5061 12.4927C10.503 12.4927 10.5003 12.4946 10.4992 12.4974C10.498 12.5002 10.4986 12.5034 10.5008 12.5055C10.5029 12.5076 10.5061 12.5083 10.5089 12.5071C10.5117 12.506 10.5135 12.5032 10.5135 12.5002C10.5137 12.4982 10.5129 12.4962 10.5115 12.4948C10.5101 12.4933 10.5081 12.4926 10.5061 12.4927"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const InfoIcon = ({ rotate = 0, ...props }: Props) => (
  <Svg
    style={{
      transform: [{ rotate: `${rotate}deg` }],
    }}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const LogoutIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.4395 14.62L19.9995 12.06L17.4395 9.5"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.75977 12.0605H19.9298"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const ProfileIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.90039 20C7.50039 18.5 9.60039 17.5 12.0004 17.5C14.3004 17.5 16.5004 18.4 18.1004 20"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1 9.40002C15.3 10.6 15.3 12.5 14.1 13.6C12.9 14.7 11 14.8 9.90002 13.6C8.80002 12.4 8.70002 10.5 9.90002 9.40002C11.1 8.30002 12.9 8.20002 14.1 9.40002"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 17C3.4 15.8 3 14.4 3 13C3 8 7 4 12 4C17 4 21 8 21 13C21 14.4 20.6 15.8 20 17"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const SettingsIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_56253_15178)">
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={props.stroke || '#111927'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
        stroke={props.stroke || '#111927'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_56253_15178">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const EditIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 20.0002H21"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.5 3.50023C16.8978 3.1024 17.4374 2.87891 18 2.87891C18.2786 2.87891 18.5544 2.93378 18.8118 3.04038C19.0692 3.14699 19.303 3.30324 19.5 3.50023C19.697 3.69721 19.8532 3.93106 19.9598 4.18843C20.0665 4.4458 20.1213 4.72165 20.1213 5.00023C20.1213 5.2788 20.0665 5.55465 19.9598 5.81202C19.8532 6.06939 19.697 6.30324 19.5 6.50023L7 19.0002L3 20.0002L4 16.0002L16.5 3.50023Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const DcToolIcon = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M17.7244 9.77621C18.538 10.5898 18.538 11.9089 17.7244 12.7225C16.9108 13.5361 15.5918 13.5361 14.7782 12.7225C13.9646 11.9089 13.9646 10.5898 14.7782 9.77621C15.5918 8.96262 16.9108 8.96262 17.7244 9.77621"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.0013 2.5H3.33464C2.4138 2.5 1.66797 3.24583 1.66797 4.16667V7.5C1.66797 10.2617 3.9063 12.5 6.66797 12.5C9.42964 12.5 11.668 10.2617 11.668 7.5V4.16667C11.668 3.24583 10.9221 2.5 10.0013 2.5H8.33464"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.2513 13.3333V13.5417C16.2513 16.1883 14.1063 18.3333 11.4596 18.3333C8.81297 18.3333 6.66797 16.1883 6.66797 13.5417V12.5"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.9987 1.66602V3.33268"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.33464 1.66602V3.33268"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const User = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(20)}
    height={props.height || hpx(20)}
    viewBox="0 0 20 18"
    fill="none"
  >
    <Path
      d="M3.65039 16.75C5.25039 15.25 7.35039 14.25 9.75039 14.25C12.0504 14.25 14.2504 15.15 15.8504 16.75"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.85 6.15002C13.05 7.35002 13.05 9.25002 11.85 10.35C10.65 11.45 8.75002 11.55 7.65002 10.35C6.55002 9.15002 6.45002 7.25002 7.65002 6.15002C8.85002 5.05002 10.65 4.95002 11.85 6.15002"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.75 13.75C1.15 12.55 0.75 11.15 0.75 9.75C0.75 4.75 4.75 0.75 9.75 0.75C14.75 0.75 18.75 4.75 18.75 9.75C18.75 11.15 18.35 12.55 17.75 13.75"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const AddIcon = (props: SvgProps) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_56329_15650)">
      <Path
        d="M3.33203 8.0013H12.6654"
        stroke={props.stroke || '#111927'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.9987 3.33398L7.9987 12.6673"
        stroke={props.stroke || '#111927'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_56329_15650">
        <Rect width="16" height="16" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export const CircleIcon = (props: SvgProps) => (
  <Svg width="5" height="5" viewBox="0 0 5 5" fill="none">
    <Circle cx="2.5" cy="2.5" r="2.5" fill={props.fill || '#111927'} />
  </Svg>
);
export const HashTagIcon = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M3.33203 7.5H16.6654M3.33203 12.5H16.6654M8.33203 2.5L6.66536 17.5M13.332 2.5L11.6654 17.5"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const BookIcon = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M10.0013 5.83333C10.0013 4.94928 9.65011 4.10143 9.02499 3.47631C8.39987 2.85119 7.55202 2.5 6.66797 2.5H1.66797V15H7.5013C8.16434 15 8.80023 15.2634 9.26907 15.7322C9.73791 16.2011 10.0013 16.837 10.0013 17.5M10.0013 5.83333V17.5M10.0013 5.83333C10.0013 4.94928 10.3525 4.10143 10.9776 3.47631C11.6027 2.85119 12.4506 2.5 13.3346 2.5H18.3346V15H12.5013C11.8383 15 11.2024 15.2634 10.7335 15.7322C10.2647 16.2011 10.0013 16.837 10.0013 17.5"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const CertificateIcon = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path
      d="M11.8766 14.584V18.3355L10.0008 17.3977L8.125 18.3355V14.584"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.84865 12.365L7.29216 12.9486L7.38804 13.6697C7.44133 14.0696 7.75595 14.3843 8.15586 14.4375L8.87866 14.5343L9.45723 14.9769C9.77747 15.2204 10.2208 15.2204 10.541 14.9769L11.1246 14.5343V14.5343L11.8466 14.4375C12.2467 14.3843 12.5616 14.0698 12.6152 13.6697L12.7119 12.9469C12.7119 12.9469 12.9353 12.6543 13.1546 12.3683C13.3981 12.0481 13.3981 11.6048 13.1546 11.2846L12.7119 10.701L12.6152 9.97985C12.5624 9.57989 12.2481 9.26493 11.8482 9.2112L11.1246 9.11533L10.541 8.67348C10.2211 8.42915 9.77718 8.42915 9.45723 8.67348L8.87366 9.11533V9.11533L8.15169 9.2112C7.75164 9.26422 7.43689 9.57898 7.38387 9.97902L7.28716 10.7018L6.84448 11.2804C6.60239 11.6019 6.60409 12.0454 6.84865 12.365V12.365Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1676 15.8348H15.835C16.7558 15.8348 17.5023 15.0882 17.5023 14.1674V4.6576C17.5023 3.73674 16.7558 2.99023 15.835 2.99023H4.16345C3.2426 2.99023 2.49609 3.73674 2.49609 4.6576V14.1674C2.49609 15.0882 3.2426 15.8348 4.16345 15.8348H5.83082"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.25 5.8309H13.7531"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const TrashIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"
      stroke={props.stroke || '#111927'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const Search = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const Information = (props: SvgProps) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M28.7452 14.3199L26.9452 12.2133C26.6119 11.8133 26.3319 11.0666 26.3319 10.5333V8.26661C26.3319 6.85327 25.1719 5.69327 23.7585 5.69327H21.4919C20.9585 5.69327 20.1985 5.41327 19.7985 5.07994L17.6919 3.27994C16.7719 2.49327 15.2652 2.49327 14.3452 3.27994L12.2119 5.07994C11.8119 5.41327 11.0652 5.69327 10.5319 5.69327H8.22521C6.81188 5.69327 5.65187 6.85327 5.65187 8.26661V10.5333C5.65187 11.0533 5.38521 11.7999 5.05187 12.1999L3.25188 14.3199C2.47854 15.2533 2.47854 16.7466 3.25188 17.6533L5.05187 19.7733C5.38521 20.1599 5.65187 20.9199 5.65187 21.4399V23.7199C5.65187 25.1333 6.81188 26.2933 8.22521 26.2933H10.5452C11.0652 26.2933 11.8252 26.5733 12.2252 26.9066L14.3319 28.7066C15.2519 29.4933 16.7585 29.4933 17.6785 28.7066L19.7852 26.9066C20.1852 26.5733 20.9319 26.2933 21.4652 26.2933H23.7319C25.1452 26.2933 26.3052 25.1333 26.3052 23.7199V21.4533C26.3052 20.9199 26.5852 20.1733 26.9185 19.7733L28.7185 17.6666C29.5319 16.7599 29.5319 15.2533 28.7452 14.3199ZM14.9985 10.8399C14.9985 10.2933 15.4519 9.83994 15.9985 9.83994C16.5452 9.83994 16.9985 10.2933 16.9985 10.8399V17.2799C16.9985 17.8266 16.5452 18.2799 15.9985 18.2799C15.4519 18.2799 14.9985 17.8266 14.9985 17.2799V10.8399ZM15.9985 22.4933C15.2652 22.4933 14.6652 21.8933 14.6652 21.1599C14.6652 20.4266 15.2519 19.8266 15.9985 19.8266C16.7319 19.8266 17.3319 20.4266 17.3319 21.1599C17.3319 21.8933 16.7452 22.4933 15.9985 22.4933Z"
      fill="#F79009"
    />
  </Svg>
);
export const BellIcon = (props: SvgProps) => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8203 18.0049C19.0236 18.0049 20.0001 17.027 20.0039 15.8183V15.8183V15.8183C20.0031 15.2033 19.7588 14.6138 19.3247 14.1801L17.8778 12.7254V8.40419C17.8775 6.70569 17.2051 5.07695 16.0087 3.87668C14.8124 2.67641 13.1901 2.00305 11.4993 2.00489V2.00489C7.98219 2.0068 5.13184 4.87112 5.1312 8.40419V12.722L3.68427 14.1766C3.24989 14.6102 3.0051 15.1997 3.00391 15.8148V15.8148V15.8148C3.00771 17.0236 3.98423 18.0014 5.18752 18.0014L17.8203 18.0049Z"
      stroke={props.stroke || '#111927'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.0039 21.5049H14.0039"
      stroke={props.stroke || '#111927'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const StarIcon = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(20)}
    height={props.height || wpx(20)}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <G clip-path="url(#clip0_56051_29428)">
      <Path
        d="M7.07668 2.62032C7.41827 1.79903 8.58173 1.79903 8.92332 2.62032L9.88146 4.92397C10.0255 5.2702 10.3511 5.50677 10.7249 5.53674L13.2119 5.73612C14.0985 5.8072 14.458 6.91371 13.7825 7.49238L11.8877 9.11549C11.6029 9.35945 11.4785 9.74222 11.5655 10.107L12.1444 12.5339C12.3508 13.3991 11.4096 14.0829 10.6505 13.6193L8.52125 12.3188C8.20124 12.1233 7.79876 12.1233 7.47875 12.3188L5.34954 13.6193C4.59044 14.0829 3.64919 13.3991 3.85558 12.5339L4.43448 10.107C4.52148 9.74222 4.39711 9.35945 4.11232 9.11549L2.2175 7.49238C1.54197 6.91371 1.90149 5.8072 2.78815 5.73612L5.27513 5.53674C5.64892 5.50677 5.97453 5.2702 6.11854 4.92397L7.07668 2.62032Z"
        fill={props.fill || '#F3F4F6'}
      />
      <G clip-path="url(#clip1_56051_29428)">
        <Path
          d="M7.07668 2.62032C7.41827 1.79903 8.58173 1.79903 8.92332 2.62032L9.88146 4.92397C10.0255 5.2702 10.3511 5.50677 10.7249 5.53674L13.2119 5.73612C14.0985 5.8072 14.458 6.91371 13.7825 7.49238L11.8877 9.11549C11.6029 9.35945 11.4785 9.74222 11.5655 10.107L12.1444 12.5339C12.3508 13.3991 11.4096 14.0829 10.6505 13.6193L8.52125 12.3188C8.20124 12.1233 7.79876 12.1233 7.47875 12.3188L5.34954 13.6193C4.59044 14.0829 3.64919 13.3991 3.85558 12.5339L4.43448 10.107C4.52148 9.74222 4.39711 9.35945 4.11232 9.11549L2.2175 7.49238C1.54197 6.91371 1.90149 5.8072 2.78815 5.73612L5.27513 5.53674C5.64892 5.50677 5.97453 5.2702 6.11854 4.92397L7.07668 2.62032Z"
          fill={props.fill || '#FDB022'}
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_56051_29428">
        <Rect
          width={props.width || wpx(20)}
          height={props.height || wpx(20)}
          fill="white"
        />
      </ClipPath>
      <ClipPath id="clip1_56051_29428">
        <Rect
          width={props.width || wpx(20)}
          height={props.height || wpx(20)}
          fill="white"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export const ClipBoardCross = (props: SvgProps) => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      d="M8.16742 9.42621L5.85742 7.11621"
      stroke={props.stroke || '#111927'}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.14398 7.13965L5.83398 9.44965"
      stroke={props.stroke || '#111927'}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.83268 3.50033H8.16602C9.33268 3.50033 9.33268 2.91699 9.33268 2.33366C9.33268 1.16699 8.74935 1.16699 8.16602 1.16699H5.83268C5.24935 1.16699 4.66602 1.16699 4.66602 2.33366C4.66602 3.50033 5.24935 3.50033 5.83268 3.50033Z"
      stroke={props.stroke || '#111927'}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.33333 2.34473C11.2758 2.44973 12.25 3.16723 12.25 5.83306V9.33306C12.25 11.6664 11.6667 12.8331 8.75 12.8331H5.25C2.33333 12.8331 1.75 11.6664 1.75 9.33306V5.83306C1.75 3.17306 2.72417 2.44973 4.66667 2.34473"
      stroke={props.stroke || '#111927'}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const FlagIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.14844 2V22"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.14844 4H16.3484C19.0484 4 19.6484 5.5 17.7484 7.4L16.5484 8.6C15.7484 9.4 15.7484 10.7 16.5484 11.4L17.7484 12.6C19.6484 14.5 18.9484 16 16.3484 16H5.14844"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const MessageIcon = (props: SvgProps) => (
  <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M14.6654 4.16634V7.56632C14.6654 8.41299 14.3854 9.12634 13.8854 9.61967C13.392 10.1197 12.6787 10.3997 11.832 10.3997V11.6063C11.832 12.0597 11.3254 12.333 10.952 12.0797L10.3054 11.653C10.3654 11.4463 10.392 11.2197 10.392 10.9797V8.26636C10.392 6.90636 9.48537 5.99967 8.12537 5.99967H3.59869C3.50536 5.99967 3.4187 6.00635 3.33203 6.01302V4.16634C3.33203 2.46634 4.46536 1.33301 6.16536 1.33301H11.832C13.532 1.33301 14.6654 2.46634 14.6654 4.16634Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.392 8.26668V10.98C10.392 11.22 10.3654 11.4467 10.3054 11.6533C10.0587 12.6333 9.24537 13.2467 8.12537 13.2467H6.31203L4.2987 14.5867C3.9987 14.7933 3.59869 14.5733 3.59869 14.2133V13.2467C2.91869 13.2467 2.35203 13.02 1.9587 12.6267C1.5587 12.2267 1.33203 11.66 1.33203 10.98V8.26668C1.33203 7.00002 2.1187 6.12668 3.33203 6.01335C3.4187 6.00668 3.50536 6 3.59869 6H8.12537C9.48537 6 10.392 6.90668 10.392 8.26668Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.3"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const Logout = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.stroke || '#111927'}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <Path
      d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 12h-12l3 -3"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 15l-3 -3"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const Dot = (props: SvgProps) => (
  <Svg
    width={props.width || 5}
    height={props.height || 5}
    viewBox="0 0 5 5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Circle cx="2.5" cy="2.5" r="2.5" fill={props.fill || colors.gray300} />
  </Svg>
);
export const Message = (props: SvgProps) => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M13.3333 1.66699H6.66666C3.33332 1.66699 1.66666 3.33366 1.66666 6.66699V17.5003C1.66666 17.9587 2.04166 18.3337 2.49999 18.3337H13.3333C16.6667 18.3337 18.3333 16.667 18.3333 13.3337V6.66699C18.3333 3.33366 16.6667 1.66699 13.3333 1.66699Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.83334 7.91699H14.1667"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.83334 12.084H11.6667"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const DirectionUp = ({ rotate = 0, ...props }: Props) => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    style={{
      transform: [{ rotate: `${rotate}deg` }],
    }}
    {...props}
  >
    <Path
      d="M7.64166 3.925L2.55833 13.5833C1.35 15.875 3.79166 18.3667 6.10833 17.2083L8.80833 15.8583C9.55833 15.4833 10.4417 15.4833 11.1917 15.8583L13.8917 17.2083C16.2083 18.3667 18.6417 15.875 17.4417 13.5833L12.3583 3.925C11.3583 2.025 8.64166 2.025 7.64166 3.925Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const UnratingStar = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(20)}
    height={props.height || wpx(20)}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <G clip-path="url(#clip0_56051_29428)">
      <Path
        d="M7.07668 2.62032C7.41827 1.79903 8.58173 1.79903 8.92332 2.62032L9.88146 4.92397C10.0255 5.2702 10.3511 5.50677 10.7249 5.53674L13.2119 5.73612C14.0985 5.8072 14.458 6.91371 13.7825 7.49238L11.8877 9.11549C11.6029 9.35945 11.4785 9.74222 11.5655 10.107L12.1444 12.5339C12.3508 13.3991 11.4096 14.0829 10.6505 13.6193L8.52125 12.3188C8.20124 12.1233 7.79876 12.1233 7.47875 12.3188L5.34954 13.6193C4.59044 14.0829 3.64919 13.3991 3.85558 12.5339L4.43448 10.107C4.52148 9.74222 4.39711 9.35945 4.11232 9.11549L2.2175 7.49238C1.54197 6.91371 1.90149 5.8072 2.78815 5.73612L5.27513 5.53674C5.64892 5.50677 5.97453 5.2702 6.11854 4.92397L7.07668 2.62032Z"
        fill={props.fill || colors.whiteThirtyPercent}
      />
      <G clip-path="url(#clip1_56051_29428)">
        <Path
          d="M7.07668 2.62032C7.41827 1.79903 8.58173 1.79903 8.92332 2.62032L9.88146 4.92397C10.0255 5.2702 10.3511 5.50677 10.7249 5.53674L13.2119 5.73612C14.0985 5.8072 14.458 6.91371 13.7825 7.49238L11.8877 9.11549C11.6029 9.35945 11.4785 9.74222 11.5655 10.107L12.1444 12.5339C12.3508 13.3991 11.4096 14.0829 10.6505 13.6193L8.52125 12.3188C8.20124 12.1233 7.79876 12.1233 7.47875 12.3188L5.34954 13.6193C4.59044 14.0829 3.64919 13.3991 3.85558 12.5339L4.43448 10.107C4.52148 9.74222 4.39711 9.35945 4.11232 9.11549L2.2175 7.49238C1.54197 6.91371 1.90149 5.8072 2.78815 5.73612L5.27513 5.53674C5.64892 5.50677 5.97453 5.2702 6.11854 4.92397L7.07668 2.62032Z"
          fill={props.fill || colors.whiteThirtyPercent}
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_56051_29428">
        <Rect
          width={props.width || wpx(20)}
          height={props.height || wpx(20)}
          fill={props.fill || 'white'}
        />
      </ClipPath>
      <ClipPath id="clip1_56051_29428">
        <Rect
          width={props.width || wpx(20)}
          height={props.height || wpx(20)}
          fill={props.fill || 'white'}
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export const Notification = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(24)}
    height={props.height || wpx(24)}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8164 18C19.0197 18 19.9962 17.0221 20 15.8134V15.8134V15.8134C19.9992 15.1984 19.7549 14.6089 19.3208 14.1752L17.8739 12.7205V8.39931C17.8735 6.7008 17.2012 5.07207 16.0048 3.8718C14.8085 2.67153 13.1862 1.99817 11.4954 2V2C7.97829 2.00192 5.12793 4.86624 5.1273 8.39931V12.7171L3.68037 14.1717C3.24598 14.6054 3.00119 15.1948 3 15.8099V15.8099V15.8099C3.0038 17.0187 3.98032 17.9965 5.18361 17.9965L17.8164 18Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 21.5H14"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const FilterIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
      stroke="#111927"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export const Bookmark = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(24)}
    height={props.height || wpx(24)}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const SortIcon = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 7H21"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M6 12H18"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M10 17H14"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);
export const ArrowUpRightIcon = ({ rotate = 0, ...props }: Props) => (
  <Svg
    style={{
      transform: [{ rotate: `${rotate}deg` }],
    }}
    width={props.width || wpx(20)}
    height={props.height || wpx(20)}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M5.83325 14.1663L14.1666 5.83301M14.1666 5.83301H5.83325M14.1666 5.83301V14.1663"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const AboutIcon = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(20)}
    height={props.height || wpx(20)}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M17.4993 4.375H11.666C11.3243 4.375 11.041 4.09167 11.041 3.75C11.041 3.40833 11.3243 3.125 11.666 3.125H17.4993C17.841 3.125 18.1243 3.40833 18.1243 3.75C18.1243 4.09167 17.841 4.375 17.4993 4.375Z"
      fill={props.fill || colors.whiteThirtyPercent}
    />
    <Path
      d="M17.4993 8.54199H11.666C11.3243 8.54199 11.041 8.25866 11.041 7.91699C11.041 7.57533 11.3243 7.29199 11.666 7.29199H17.4993C17.841 7.29199 18.1243 7.57533 18.1243 7.91699C18.1243 8.25866 17.841 8.54199 17.4993 8.54199Z"
      fill={props.fill || colors.whiteThirtyPercent}
    />
    <Path
      d="M17.5 12.708H2.5C2.15833 12.708 1.875 12.4247 1.875 12.083C1.875 11.7413 2.15833 11.458 2.5 11.458H17.5C17.8417 11.458 18.125 11.7413 18.125 12.083C18.125 12.4247 17.8417 12.708 17.5 12.708Z"
      fill={props.fill || colors.whiteThirtyPercent}
    />
    <Path
      d="M17.5 16.875H2.5C2.15833 16.875 1.875 16.5917 1.875 16.25C1.875 15.9083 2.15833 15.625 2.5 15.625H17.5C17.8417 15.625 18.125 15.9083 18.125 16.25C18.125 16.5917 17.8417 16.875 17.5 16.875Z"
      fill={props.fill || colors.whiteThirtyPercent}
    />
    <Path
      d="M6.6 2.91699H4.23333C3.06667 2.91699 2.5 3.48366 2.5 4.65033V7.02533C2.5 8.19199 3.06667 8.75866 4.23333 8.75866H6.60833C7.775 8.75866 8.34167 8.19199 8.34167 7.02533V4.65033C8.33333 3.48366 7.76667 2.91699 6.6 2.91699Z"
      fill={props.fill || colors.whiteThirtyPercent}
    />
  </Svg>
);
export const TickIcon = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(32)}
    height={props.height || wpx(32)}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Path
      d="M15.9993 2.66699C8.65268 2.66699 2.66602 8.65366 2.66602 16.0003C2.66602 23.347 8.65268 29.3337 15.9993 29.3337C23.346 29.3337 29.3327 23.347 29.3327 16.0003C29.3327 8.65366 23.346 2.66699 15.9993 2.66699ZM22.3727 12.9337L14.8127 20.4937C14.626 20.6803 14.3727 20.787 14.106 20.787C13.8393 20.787 13.586 20.6803 13.3993 20.4937L9.62601 16.7203C9.23935 16.3337 9.23935 15.6937 9.62601 15.307C10.0127 14.9203 10.6527 14.9203 11.0393 15.307L14.106 18.3737L20.9593 11.5203C21.346 11.1337 21.986 11.1337 22.3727 11.5203C22.7593 11.907 22.7593 12.5337 22.3727 12.9337Z"
      fill={props.fill || colors.primaryGreen}
    />
  </Svg>
);
export const CalendarIcon = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(24)}
    height={props.height || wpx(24)}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M8 2V5"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 2V5"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.5 9.08984H20.5"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.6937 13.7002H15.7027"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.6937 16.7002H15.7027"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9945 13.7002H12.0035"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9945 16.7002H12.0035"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.29529 13.7002H8.30427"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.29529 16.7002H8.30427"
      stroke={props.stroke || '#6C737F'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const ListIcon = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(24)}
    height={props.height || wpx(24)}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01"
      stroke={props.stroke || '#111927'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const NotesIcom = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(20)}
    height={props.height || wpx(20)}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M16.6654 6.87533V15.0003C16.6654 17.5003 15.1737 18.3337 13.332 18.3337H6.66536C4.8237 18.3337 3.33203 17.5003 3.33203 15.0003V6.87533C3.33203 4.16699 4.8237 3.54199 6.66536 3.54199C6.66536 4.05866 6.87368 4.52532 7.21534 4.86699C7.55701 5.20866 8.0237 5.41699 8.54036 5.41699H11.457C12.4904 5.41699 13.332 4.57533 13.332 3.54199C15.1737 3.54199 16.6654 4.16699 16.6654 6.87533Z"
      stroke={props.stroke || '#111927'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.3346 3.54199C13.3346 4.57533 12.493 5.41699 11.4596 5.41699H8.54297C8.0263 5.41699 7.55961 5.20866 7.21795 4.86699C6.87628 4.52532 6.66797 4.05866 6.66797 3.54199C6.66797 2.50866 7.50964 1.66699 8.54297 1.66699H11.4596C11.9763 1.66699 12.443 1.87533 12.7847 2.217C13.1263 2.55866 13.3346 3.02533 13.3346 3.54199Z"
      stroke={props.stroke || '#111927'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.66797 10.833H10.0013"
      stroke={props.stroke || '#111927'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.66797 14.167H13.3346"
      stroke={props.stroke || '#111927'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const DownloadIcon = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(18)}
    height={props.height || wpx(18)}
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <Path
      d="M14.25 15.75H3.75M5.25 7.5L9 11.25M9 11.25L12.75 7.5M9 11.25V2.25"
      stroke={props.stroke || '#111927'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const RejectionIcon = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(20)}
    height={props.height || wpx(20)}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M11.6672 13.467L8.36719 10.167"
      stroke={props.stroke || '#111927'}
      strokeWidth={props.strokeWidth || 1.5}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.632 10.2002L8.33203 13.5002"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeMiterlimit={props.strokeMiterlimit || 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.33464 5.00033H11.668C13.3346 5.00033 13.3346 4.16699 13.3346 3.33366C13.3346 1.66699 12.5013 1.66699 11.668 1.66699H8.33464C7.5013 1.66699 6.66797 1.66699 6.66797 3.33366C6.66797 5.00033 7.5013 5.00033 8.33464 5.00033Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
      strokeMiterlimit={props.strokeMiterlimit || 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.3333 3.34961C16.1083 3.49961 17.5 4.52461 17.5 8.33294V13.3329C17.5 16.6663 16.6667 18.3329 12.5 18.3329H7.5C3.33333 18.3329 2.5 16.6663 2.5 13.3329V8.33294C2.5 4.53294 3.89167 3.49961 6.66667 3.34961"
      stroke="#111927"
      strokeWidth={props.strokeWidth || 1.5}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

/** Header overflow (⋮) — stroke matches chat header icons */
export const ChatMoreVertical = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Circle cx="12" cy="5" r="1.5" fill={props.stroke || colors.gray900} />
    <Circle cx="12" cy="12" r="1.5" fill={props.stroke || colors.gray900} />
    <Circle cx="12" cy="19" r="1.5" fill={props.stroke || colors.gray900} />
  </Svg>
);

/** Send — paper plane on primary button (white stroke) */
export const ChatSendPlane = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23015 7.39969 6.32015Z"
      stroke={props.stroke || colors.white}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.1094 13.6505L13.6894 10.0605"
      stroke={props.stroke || colors.white}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const DollarIcon = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(32)}
    height={props.height || wpx(32)}
    viewBox="0 0 32 32"
    fill={props.fill || colors.white}
    {...props}
  >
    <Path
      d="M17 21.2258H17.8667C18.7333 21.2258 19.4533 20.4524 19.4533 19.5191C19.4533 18.3591 19.04 18.1324 18.36 17.8924L17.0133 17.4258V21.2258H17Z"
      fill={props.fill || colors.white}
    />
    <Path
      d="M15.9594 2.53323C8.59944 2.55989 2.63944 8.54656 2.6661 15.9066C2.69277 23.2666 8.67944 29.2266 16.0394 29.1999C23.3994 29.1732 29.3594 23.1866 29.3328 15.8266C29.3061 8.46656 23.3194 2.51989 15.9594 2.53323ZM19.0128 15.9999C20.0528 16.3599 21.4528 17.1332 21.4528 19.5199C21.4528 21.5732 19.8394 23.2266 17.8661 23.2266H16.9994V23.9999C16.9994 24.5466 16.5461 24.9999 15.9994 24.9999C15.4528 24.9999 14.9994 24.5466 14.9994 23.9999V23.2266H14.5194C12.3328 23.2266 10.5594 21.3866 10.5594 19.1199C10.5594 18.5732 11.0128 18.1199 11.5594 18.1199C12.1061 18.1199 12.5594 18.5732 12.5594 19.1199C12.5594 20.2799 13.4394 21.2266 14.5194 21.2266H14.9994V16.7199L12.9861 15.9999C11.9461 15.6399 10.5461 14.8666 10.5461 12.4799C10.5461 10.4266 12.1594 8.77323 14.1328 8.77323H14.9994V7.99989C14.9994 7.45323 15.4528 6.99989 15.9994 6.99989C16.5461 6.99989 16.9994 7.45323 16.9994 7.99989V8.77323H17.4794C19.6661 8.77323 21.4394 10.6132 21.4394 12.8799C21.4394 13.4266 20.9861 13.8799 20.4394 13.8799C19.8928 13.8799 19.4394 13.4266 19.4394 12.8799C19.4394 11.7199 18.5594 10.7732 17.4794 10.7732H16.9994V15.2799L19.0128 15.9999Z"
      fill={props.fill || colors.white}
    />
    <Path
      d="M12.5605 12.4934C12.5605 13.6534 12.9739 13.8801 13.6539 14.1201L15.0005 14.5868V10.7734H14.1339C13.2672 10.7734 12.5605 11.5468 12.5605 12.4934Z"
      fill={props.fill || colors.white}
    />
  </Svg>
);
export const MapIcon = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(20)}
    height={props.height || wpx(20)}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M10 11.1912C11.436 11.1912 12.6 10.0272 12.6 8.59121C12.6 7.15527 11.436 5.99121 10 5.99121C8.56408 5.99121 7.40002 7.15527 7.40002 8.59121C7.40002 10.0272 8.56408 11.1912 10 11.1912Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
    />
    <Path
      d="M3.01663 7.07533C4.65829 -0.141339 15.35 -0.133006 16.9833 7.08366C17.9416 11.317 15.3083 14.9003 13 17.117C11.325 18.7337 8.67496 18.7337 6.99163 17.117C4.69163 14.9003 2.05829 11.3087 3.01663 7.07533Z"
      stroke={props.stroke || '#111927'}
      strokeWidth="1.5"
    />
  </Svg>
);
export const RmdyRoadIcon = (props: SvgProps) => (
  <Svg
    width={props.width || wpx(28)}
    height={props.height || wpx(28)}
    viewBox="0 0 174 195"
    fill="none"
    {...props}
  >
    <Path
      d="M52.5093 192.624H33.4745M74.1695 107.523L149.652 192.624H171.969V1.97021H93.8606M74.1695 107.523V144.466L121.428 192.624M74.1695 107.523C84.2994 106.412 91.1723 102.347 95.7229 96.9675M33.4745 192.624H1.96875V1.97021H93.8606M33.4745 192.624C33.4745 192.624 21.6599 81.7943 30.1927 63.9823C38.7255 46.1703 78.1077 15.824 103.05 63.9823C104.612 72.5485 104.146 87.0099 95.7229 96.9675M93.8606 1.97021C93.8606 1.97021 143.745 56.5057 149.652 71.8987C155.559 87.2918 160.942 118.606 135.212 120.717C109.482 122.828 98.1652 105.764 95.7229 96.9675"
      stroke="white"
      strokeWidth={props.strokeWidth || 10}
      strokeLinecap="round"
    />
  </Svg>
);
