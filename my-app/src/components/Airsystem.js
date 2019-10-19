import React from 'react';

class Airsystem extends React.Component {
     render() {
          let comp_props = this.props.comp_props
          let comp_2 = comp_props
          return(
               <div className = 'main_component'>
                    Air Systems : {/*{comp_2.airSystem}*/}
                    <Gaskets        className = {this.props.lock_props.gaskets} comp_props        = {comp_2.gaskets} />
                    <Airpressure    className = {this.props.lock_props.airPressure} comp_props    = {comp_2.airPressure} />
                    <Filters        className = {this.props.lock_props.filters} comp_props        = {comp_2.filters} />
                    <Generatorfeeds className = {this.props.lock_props.generatorFeeds} comp_props = {comp_2.generatorFeeds} />
               </div>
          )
     };
}


class Gaskets extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Gaskets : {comp_prop}
               </div>
          );
     };
}

class Airpressure extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Air Pressure : {comp_prop}
               </div>
          );
     };
}


class Filters extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Filters : {comp_prop}
               </div>
          );
     };
}


class Generatorfeeds extends React.Component {
     render() {
          let comp_prop = this.props.comp_props
          return(
               <div className = {this.props.className}>
                   Generator Feeds : {comp_prop}
               </div>
          );
     };
}

export default Airsystem;