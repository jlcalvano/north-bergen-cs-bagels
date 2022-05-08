import React from 'react';

function Done(props) {
    const values = props.props;
    return (
    <>
    <div><b>Name: </b>{values.name}</div>
    <div><b>Bagel: </b>{values.bagel}</div>
    <div><b>Bagel Type:</b> {values.bagelType}</div>
    <div><b>Spread Type:</b> {values.spreadType}</div>
    <div><b>Demo:</b> {values.demoType}</div>
    </>
  )
}

export default Done;