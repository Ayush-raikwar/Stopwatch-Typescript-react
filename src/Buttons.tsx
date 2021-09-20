import React from "react";
import styled from "styled-components";

export const Buttons:React.FC<any> = (props:any) => {

    const Play = ({onPlayerClick}:any) => {
        
        return (
          <BtnContainer>
              <svg onClick={()=> {props.onPlay()} } cursor='pointer' className="button" width="40px" viewBox="0 0 60 60" >
                <polygon points="0,0 50,30 0,60" />
              </svg>
          </BtnContainer>
        )
      }

      
      const Pause:any = ():any => {
          const styles:any={
            marginLeft:"10px"
          }
        return (
          <BtnContainer>
              <svg style={styles} onClick={()=> {props.onPause()} } cursor='pointer' className="button text-center" width="40px" viewBox="0 0 60 60" >
                <polygon points="0,0 15,0 15,60 0,60" />
                <polygon points="25,0 40,0 40,60 25,60" />
              </svg>
          </BtnContainer>
        )
      }
      const Reset = () =>{
          return(
            <BtnContainer>
                <svg onClick={()=> {props.onReset()} } cursor='pointer' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
                    
                    <linearGradient id="95F_jjTRbyNtAmgVFg~qQa" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#05acb3"/>
                        <stop offset="1" stop-color="#038387"/>
                    </linearGradient>
                    <path fill="url(#95F_jjTRbyNtAmgVFg~qQa)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
                    <path d="M33.015,15.079c-0.297-0.301-0.778-0.317-1.077-0.018l-2.795,2.795	c-0.272,0.272-0.269,0.699-0.021,0.993c3.257,3.865,1.569,9.537-1.962,11.534c-1.291,0.73-5.064,0.858-7.126-0.57	c-2.249-1.557-5.077-6.463-2.162-9.942l2.147,2.147C20.75,22.75,22,22.232,22,21.197V13c0-0.552-0.448-1-1-1h-8.468	c-0.934,0-1.402,1.13-0.742,1.791l2.25,2.25c-4.183,4.705-4.045,12.078,0.374,16.735c4.55,4.794,12.973,5.637,17.651,1.435	C37.02,29.76,39.608,21.751,33.015,15.079z" opacity=".05"/>
                    <path d="M33.015,15.579c-0.289-0.308-0.778-0.317-1.077-0.018l-2.287,2.287	c-0.277,0.277-0.273,0.711-0.022,1.01c3.109,3.7,1.964,9.273-1.846,11.674c-1.969,1.24-5.624,1.314-7.972-0.285	c-3.181-2.162-4.879-7.369-1.941-10.876l2.037,2.037c0.587,0.587,1.592,0.171,1.592-0.659V13.5c0-0.552-0.448-1-1-1h-7.384	c-0.781,0-1.172,0.944-0.62,1.496l2.044,2.044c-4.235,4.764-4.035,12.185,0.595,16.754c4.541,4.495,12.363,4.917,16.969,0.719	C36.995,29.055,38.419,21.342,33.015,15.579z" opacity=".07"/>
                    <path fill="#fff" d="M28.409,30.682c-2.634,1.771-6.184,1.771-8.817,0c-4.323-2.907-4.739-8.848-1.248-12.339	l-2.828-2.828c-4.79,4.79-4.676,12.654,0.341,17.298c4.532,4.195,11.754,4.196,16.287,0.002c4.826-4.465,5.117-11.911,0.873-16.736	c-0.279-0.317-0.778-0.317-1.077-0.018L30.16,17.84c-0.282,0.282-0.278,0.723-0.022,1.028	C33.098,22.404,32.522,27.916,28.409,30.682z"/>
                    <path fill="#fff" d="M20,13h-6.3c-0.627,0-0.941,0.758-0.498,1.202l6.596,6.596C20.242,21.242,21,20.927,21,20.3V14	C21,13.448,20.552,13,20,13z"/>
                </svg>
            </BtnContainer>
          )
          
        }

        const BtnContainer = styled.div`
            display:inline-block;
            margin:20px;
            text-align:center;
            border:2px solid transparent;
            padding:0.5rem;
            border-radius:10px ;
            transition:border 0.5s;
            &:hover{
              transition:border 0.5s;
              border:2px solid black;
            }
       `;


      

    return(
        <>
          
            <Play />
        
            <Pause />
         
            <Reset />
        
        </>
    )
}