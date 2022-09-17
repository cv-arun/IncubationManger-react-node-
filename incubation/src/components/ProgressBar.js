import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Progressbar(props) {
  return (
    <ProgressBar>
      <ProgressBar striped variant={props.varient} now={props.value} key={1} />
    </ProgressBar>
  );
}

export default Progressbar;