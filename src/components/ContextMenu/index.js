import React from 'react';
import { 
  ContextMenu, 
  MenuItem, 
  ContextMenuTrigger 
} from 'react-contextmenu';

const MapContext = ({ children }) => {
  return (
    <div>
      <ContextMenuTrigger id='map_wrapper'>
        { children }
      </ContextMenuTrigger>

      <ContextMenu id='map_wrapper'>
        <MenuItem >Add a place</MenuItem>
      </ContextMenu>
    </div>
  );
}

export default MapContext;