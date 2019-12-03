import React, { Component } from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import shortCurts from '../../constants/shortCuts';

const labelStyles = {
    marginTop: 10
};
const iconStyles = {
    display: 'inline-block',
    position: 'relative',
    width: 48,
    height: 44,
    marginLeft: 27 ,
};

class HeaderBar extends Component{
    customRenderer = () => {
        return (
            <span>
                <div class="ms-BrandIcon--icon48 ms-BrandIcon--excel" />
            </span>
        );
    }
  render = () => {
    return (
        <div className="pv-mt-5">
            <Pivot>
                {shortCurts.map(item => {
                    const { id, icon, value, name, shortCurt, onRenderItemLink } = item;
                    return(
                        <PivotItem name={value} key={id} headerText={name} itemCount={shortCurt} itemIcon={icon} onRenderItemLink={onRenderItemLink && this.customRenderer}>
                            <Label styles={labelStyles}>Pivot #1</Label>
                        </PivotItem>                        
                    )
                })}
            </Pivot>
      </div>
    );
  }
}

export default HeaderBar;
