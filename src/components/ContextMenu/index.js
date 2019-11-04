import React, { useContext } from 'react';
import { 
  ContextMenu, 
  MenuItem, 
  ContextMenuTrigger 
} from 'react-contextmenu';
import { CourtContext } from '../../courtStore/CourtStore';
import { OPEN_COURTADDITION } from '../../config/constants';
import Style from './indexStyle';
import PropTypes from 'prop-types';

const MapContextMenu = ({ children }) => {
  const { uiToggleDispatch } = useContext(CourtContext);

  const courtsAdditionTrigger = () => {
    uiToggleDispatch({ type: OPEN_COURTADDITION });
  };

  return (
    <Style.ContextMenuWrapper>
      <ContextMenuTrigger 
        id='map_wrapper'
        holdToDisplay={ -1 }
        disable={ true }
      >
        { children }
      </ContextMenuTrigger>

      <ContextMenu id='map_wrapper'>
        <MenuItem
          onClick={ courtsAdditionTrigger }
        >
          Add a place
        </MenuItem>
      </ContextMenu>
    </Style.ContextMenuWrapper>
  );
};

MapContextMenu.propTypes = {
  uiToggleDispatch: PropTypes.func
};

export default MapContextMenu;