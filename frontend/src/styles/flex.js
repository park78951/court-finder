import { css } from 'styled-components';

export default {
  displayFlex: () => {
    return css`
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    `;
  },

  flexDirection: (value) => {
    let staticVendorStyle;

    switch(value) {
      case 'row-reverse':
        staticVendorStyle = css`
          -webkit-box-direction: reverse;
          -webkit-box-orient: horizontal;
          -moz-box-direction: reverse;
          -moz-box-orient: horizontal;
        `;
        break;

      case 'column':
        staticVendorStyle = css`
          -webkit-box-direction: normal;
          -webkit-box-orient: vertical;
          -moz-box-direction: normal;
          -moz-box-orient: vertical;
        `;
        break;

      case 'column-reverse':
        staticVendorStyle = css`
          -webkit-box-direction: reverse;
          -webkit-box-orient: vertical;
          -moz-box-direction: reverse;
          -moz-box-orient: vertical;
        `;
        break;

      case 'row':
        staticVendorStyle = css`
          -webkit-box-direction: normal;
          -webkit-box-orient: horizontal;
          -moz-box-direction: normal;
          -moz-box-orient: horizontal;
        `;
    }

    return css`
      ${ staticVendorStyle }
      -webkit-flex-direction: ${value};
      -ms-flex-direction: ${value};
      flex-direction: ${value};
    `;
  },

  flexWrap: (value = 'nowrap') => {
    const msFlexWrap = value === 'nowrap'
      ? css`
        -ms-flex-wrap: none;
      `
      : css`
        -ms-flex-wrap: ${ value };
      `;

    return css`
      -webkit-flex-wrap: ${ value };
      ${ msFlexWrap }
      flex-wrap: ${ value };
    `;
  },

  flexFlow: (value = 'row') => {
    return css`
      -webkit-flex-flow: ${ value };
      -ms-flex-flow: ${ value };
      flex-flow: ${ value };
    `;
  },

  order: (int = 0) => {
    return css`
      -webkit-box-ordinal-group: ${ int } + 1;
      -moz-box-ordinal-group: ${ int } + 1;
      -webkit-order: ${ int };
      -ms-flex-order: ${ int };
      order: ${ int };
    `;
  },

  flexGrow: (int = 1) => {
    return css`
      -webkit-box-flex: ${ int };
      -moz-box-flex: ${ int };
      -webkit-flex-grow: ${ int };
      -ms-flex: ${ int };
      flex-grow: ${ int };
    `;
  },

  flexShrink: (int = 0) => {
    return css`
      -webkit-flex-shrink: ${ int };
      -moz-flex-shrink: ${ int };
      -ms-flex: ${ int };
      flex-shrink: ${ int };
    `;
  },

  flexBasis: (value = 'auto') => {
    return css`
      -webkit-flex-basis: ${ value };
      flex-basis: ${ value };
    `;
  },

  flex: (flexGrow, flexShrink, flexBasis) => {
    return css`
      -webkit-box: ${ flexGrow };
      -moz-box: ${ flexGrow };
      -webkit-flex: ${ flexGrow } ${ flexShrink } ${ flexBasis };
      -ms-flex: ${ flexGrow } ${ flexShrink } ${ flexBasis };
      flex: ${ flexGrow } ${ flexShrink } ${ flexBasis };
    `;
  },

  justifyContent: (value) => {
    let staticVendorStyle;

    if(value === 'flex-start') {
      staticVendorStyle = css`
        -webkit-box-pack: start;
        -moz-box-pack: start;
        -ms-flex-pack: start;
      `;
    } else if(value === 'flex-end') {
      staticVendorStyle = css`
        -webkit-box-pack: end;
        -moz-box-pack: end;
        -ms-flex-pack: end;
      `;
    } else if(value === 'space-between') {
      staticVendorStyle = css`
        -webkit-box-pack: justify;
        -moz-box-pack: justify;
        -ms-flex-pack: justify;
      `;
    } else if(value === 'space-around') {
      staticVendorStyle = css`
        -ms-flex-pack: distribute;
      `;
    } else {
      staticVendorStyle = css`
        -webkit-box-pack: ${ value };
        -moz-box-pack: ${ value };
        -ms-flex-pack: ${ value };
      `;
    }

    return css`
      ${ staticVendorStyle }
      -webkit-justify-content: ${ value };
      justify-content: ${ value };
    `;
  },

  alignItems: (value) => {
    let staticVendorStyle;

    if(value === 'flex-start') {
      staticVendorStyle = css`
        -webkit-box-align: start;
        -moz-box-align: start;
        -ms-flex-align: start;
      `;
    } else if(value === 'flex-end') {
      staticVendorStyle = css`
        -webkit-box-align: end;
        -moz-box-align: end;
        -ms-flex-align: end;
      `;
    } else {
      staticVendorStyle = css`
        -webkit-box-align: ${ value };
        -moz-box-align: ${ value };
        -ms-flex-align: ${ value };
      `;
    }

    return css`
      ${ staticVendorStyle }
      -webkit-align-items: ${ value };
      align-items: ${ value };
    `;
  },

  alignSelf: (value) => {
    let staticVendorStyle;

    if(value === 'flex-start') {
      staticVendorStyle = css`
        -ms-flex-item-align: start;
      `;
    } else if(value === 'flex-end') {
      staticVendorStyle = css`
        -ms-flex-item-align: end;
      `;
    } else {
      staticVendorStyle = css`
        -ms-flex-item-align: ${ value };
      `;
    }

    return css`
      -webkit-align-self: ${ value };
      ${ staticVendorStyle };
      align-self:${ value };
    `;
  },

  alignContent: (value) => {
    let staticVendorStyle;

    if(value === 'flex-start') {
      staticVendorStyle = css`
        -ms-flex-line-pack: start;
      `;
    } else if(value === 'flex-end') {
      staticVendorStyle = css`
        -ms-flex-line-pack: end;
      `;
    } else {
      staticVendorStyle = css`
        -ms-flex-line-pack: ${ value };
      `;
    }

    return css`
      -webkit-align-content: ${ value };
      ${ staticVendorStyle }
      align-content: ${ value };
    `;
  }
};

