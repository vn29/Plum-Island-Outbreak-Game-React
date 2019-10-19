import React from 'react';





class Biohazardlevel extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          return(
               <div className = {this.props.className}>
                    Biohazard Level : {comp_props}
               </div>
          )
     };
}

export default Biohazardlevel;