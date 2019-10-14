import { css } from 'styled-components';
import { darken, lighten } from 'polished';

export const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.colors[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)}
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

export const sizeStyles = css`
  ${ ({ size }) => 
    size === 'large' && css`
      height: 2.5rem;
      width: 13rem;
      font-size: 1.25rem;
      letter-spacing: 1em;
      text-indent: 1em;
    `
  // eslint-disable-next-line indent
  }

  ${ ({ size }) => 
    size === 'medium' && css`
      height: 2.5rem;
      width: 11rem;
      font-size: 1.25rem;
      letter-spacing: 0.5em;
      text-indent: 0.5em;
    `
    // eslint-disable-next-line indent
  }

  ${ ({ size }) => 
    size === 'small' && css`
      height: 1.75rem;
      font-size: 0.875rem;
      width: 5rem;
    `
    // eslint-disable-next-line indent
  }
`;