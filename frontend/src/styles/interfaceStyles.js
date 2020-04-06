import { css } from 'styled-components';
import defaultTheme from './theme';

const scrollbar = css`
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: ${defaultTheme.BUTTON_BACKGROUND_FIRST};
  }

  &::-webkit-scrollbar {
    width: 5px;
    height: 50%;
    background-color: ${defaultTheme.BUTTON_BACKGROUND_FIRST};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
`;

export const button = css`
  border: none;
  outline: none;
  cursor: pointer;
`;

export const shadowAboveOnScroll = css`
  background: /* Shadow covers */
  linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, /* Shadows */
  radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0));
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
`;

export default {
  scrollbar,
  button,
  shadowAboveOnScroll,
}