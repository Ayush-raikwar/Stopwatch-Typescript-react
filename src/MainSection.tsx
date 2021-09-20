import React, { useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SessionTimer } from './SessionTimer';
import styled from 'styled-components';
import { Buttons } from "./Buttons";
import { BreakTimer } from "./BreakTimer";
import Countdown from 'react-countdown';








export const MainSection:React.FC<any> = () => {
    
    
    const dateVariable = Date.now();
    const [currentTime, setCurrentTime] = useState((dateVariable+ 60000))
    const [keyCount, setKeyCount] = useState(1)
    const timerRef:any = useRef()
    

    const Header = styled.header`
        
    `;

    const Heading = styled.h1`
        font-size:2rem;
        margin:1.6rem;
        `;
        
        const CountdownContainer = styled.div`
        font-size:3rem;
        font-weight:900;
        letter-spacing:1.25ch;
        margin:1rem;
        // font-family: 'Play', sans-serif;
        font-family: 'Saira Condensed', sans-serif;
        font-stretch:ultra-condensed;
    `;

    const ButtonsContainer = styled.div`
        // margin:1rem;
    `;

    const Completionist = () => <span>You are good to go!</span>;

    
    const renderer = ({ hours, minutes, seconds,start, completed } :any) => {
      
          return (<span>{hours}:{minutes}:{seconds}</span>);
        
    }
 
    
    const handleMinIncrease = () => {
        setCurrentTime(prevVal => prevVal + 60000) 
    }

    const handleMinDecrease = () => {
        setCurrentTime(prevVal => prevVal - 60000)
        
    }

    const startTimer:any = ():any => {
        timerRef.current.start()
        console.log('aaaaaaaaaaaaaaaaaaaaa =========== ' + Date.now());
        
    }
    
    const pauseTimer:any = ():any => {
        timerRef.current.pause()
    }

    const resetTimer:any = ():any => {
        const x = new Date()
        console.log(x.getSeconds());
        
        
        
    }


    return(
        <>
        <Header className='text-center bg-dark text-light p-3 fw-bold fs-1'>StopWatch</Header>
        
        <Container className='bg-info min-vh-100 min-vw-100'>
            
            <Row className='text-light justify-content-md-center'>
                <Col lg={8} className='m-50'>
                    <Row className='bg-success'>
                        <Col className='text-center'>
                            <Heading>Stopwatch Timer App</Heading>
                        </Col>
                    </Row>
                    <Row className='bg-danger'>
                        <Col className='text-center'>
                            <BreakTimer />
                            <SessionTimer increaseMin={handleMinIncrease} decreaseMin={handleMinDecrease} />
                        </Col>
                    </Row>
                    <Row className='bg-primary text-center'>
                        <Col>
                            <CountdownContainer>
                                <Countdown 
                                    autoStart={false}
                                    date={currentTime}
                                    renderer={renderer}
                                    intervalDelay={0}
                                    precision={3}
                                    ref={timerRef}
                                    key={keyCount}
                                >
                                    <Completionist />
                                </Countdown>
                            </CountdownContainer>
                        </Col>
                    </Row>
                    
                        <Row className='bg-light text-center'>
                            <ButtonsContainer>
                                <Col><Buttons onPlay={startTimer} onPause={pauseTimer} onReset={resetTimer} /></Col>
                            </ButtonsContainer>
                        </Row>
                    
                </Col>
            </Row>

            
        </Container>
        </>
    )
}