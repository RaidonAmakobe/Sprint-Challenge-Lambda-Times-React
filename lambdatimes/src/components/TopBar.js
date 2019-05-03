import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const superTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;`

const babyShark = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;`

const otherShark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;`

const leftShark = styled.div`
  display: flex;
  justify-contentL none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;`

const rightShark = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;`

const TopBar = () => {
  return (
    <superTopBar>
      <babyShark>
        <leftShark>
          <span>TOPICS</span><span>SEARCH</span>
        </leftShark>
        <otherShark>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </otherShark>
        <rightShark>
          <span>LOG IN</span>
        </rightShark>
      </babyShark>
    </superTopBar>
  )
}

export default TopBar;