import React from "react";
import styled from "styled-components";
import Countdown from 'react-countdown';


export const DisplayStopwatch:React.FC = () => {

    const Completionist = () => <span>You are good to go!</span>;

    return(
        <>
        <Countdown date={Date.now() + 5000}>
            <Completionist />
        </Countdown>
        </>
    )
}