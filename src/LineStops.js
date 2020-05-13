import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LineStop from './LineStop';
import './Section.scss';

class LineStops extends Component{
  static defaultProps={
    line: {
      id: 'loading...',
      name: 'loading...',
      stations: []
    },
    tubeLines: {
    }
  }

  render(){
    const { line } = this.props

    let lineStops = line.stations.map(station => 
      <LineStop key={station.id} station={station}/>
    )

    return(
      <section>
        {/* <div className='sectionTitle'>Line Details</div> */}
        <div className='CardSingle'> 
          <div className='Card'>
            <div className={`row lineColor ${line.id}`}></div>
            <div className='row titleRow'>
              <h1>{line.name}</h1>
              <div className='status'>Stations: {line.stations.length}</div>
            </div>
            <div className='row'>
              <div className='data'>
                {lineStops}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LineStops;
