import styled from 'styled-components';
import { defaultTheme } from '@styles';

const ContextMenuWrapper = styled.div`
  .react-contextmenu {
    background-color: ${defaultTheme.WHITE};
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    color: ${defaultTheme.CONTEXT_MENU_LETTER};
    font-size: 16px;
    margin: 2px 0 0;
    min-width: 160px;
    outline: none;
    opacity: 0;
    padding: 5px 0;
    pointer-events: none;
    text-align: left;
    transition: opacity 250ms ease !important;
  }
  .react-contextmenu.react-contextmenu--visible {
    opacity: 1;
    pointer-events: auto;
    z-index: 9999;
  }
  .react-contextmenu-item {
    background: 0 0;
    border: 0;
    color: ${defaultTheme.CONTEXT_MENU_LETTER};
	  cursor: pointer;
    font-weight: 400;
    line-height: 1.5;
    padding: 3px 20px;
    text-align: inherit;
    white-space: nowrap;
    outline: none;
  }

  .react-contextmenu-item.react-contextmenu-item--active,
  .react-contextmenu-item.react-contextmenu-item--selected {
      color: ${defaultTheme.WHITE};
      background-color: ${defaultTheme.POST_MODAL_BORDER_BOTTOM};
      border-color: ${defaultTheme.POST_MODAL_BORDER_BOTTOM};
      text-decoration: none;
  }

  .react-contextmenu-item.react-contextmenu-item--disabled,
  .react-contextmenu-item.react-contextmenu-item--disabled:hover {
      background-color: transparent;
      border-color: rgba(0,0,0,.15);
      color: ${defaultTheme.CONTEXT_MENU_LETTER};
  }

  .react-contextmenu-item--divider {
      border-bottom: 1px solid rgba(0,0,0,.15);
      cursor: inherit;
      margin-bottom: 3px;
      padding: 2px 0;
  }
  .react-contextmenu-item--divider:hover {
      background-color: transparent;
      border-color: rgba(0,0,0,.15);
  }

  .react-contextmenu-item.react-contextmenu-submenu {
    padding: 0;
  }

  .react-contextmenu-item.react-contextmenu-submenu > .react-contextmenu-item {
  }

  .react-contextmenu-item.react-contextmenu-submenu > .react-contextmenu-item:after {
      content: "▶";
      display: inline-block;
      position: absolute;
      right: 7px;
  }

  .example-multiple-targets::after {
      content: attr(data-count);
      display: block;
  }
`;

export default { ContextMenuWrapper };