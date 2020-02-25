import React from 'react';
import { 
  ContextMenu, 
  MenuItem, 
  ContextMenuTrigger 
} from 'react-contextmenu';
import { useDispatch } from 'react-redux';
import { openCourtAddtionForm } from '@actions';
import Style from './contextMenuStyle';

const MapContextMenu = ({ children }) => {
  const dispatch = useDispatch();

  const courtsAdditionTrigger = () => {
    dispatch(openCourtAddtionForm());
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

export default React.memo(MapContextMenu);