import React from "react";
import styled from "styled-components";

export const BreakTimer:React.FC = () => {

    const SessionDiv = styled.div`
        display:inline-block;
        margin:1rem;
    `;

    const SvgContainer = styled.div`
        cursor:pointer;
        display:inline-block;
    `;

    const upArrow = (
        <SvgContainer>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z"/></svg>
        </SvgContainer>
    )

    const downArrow = (
        <SvgContainer>
            <svg id='session-increment' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z"/></svg>
        </SvgContainer>
    )

    return(
        <>
        
        <SessionDiv>
            Break length :  {upArrow}  {downArrow}
        </SessionDiv>
        </>
    )
}