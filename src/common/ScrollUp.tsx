import { IconArrowUp } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Box, Button, Text, Transition } from '@mantine/core';
import React, { useRef, useState } from 'react';

export const SCROLLABLE_CONTENT_ID = "scrollable-content-id"
const SCROLL_UP_THRESHOLD = 500

interface ScrollUpProps {
  
}

interface ScrollUpState {
  scrollThresholdReached: boolean
}

export class ScrollUp extends React.Component<ScrollUpProps, ScrollUpState> {

  constructor(props: ScrollUpProps) {
    super(props);
    this.state = {
      scrollThresholdReached: false
    };
  }

  componentDidMount() {
    const scrollableContent = document.getElementById(SCROLLABLE_CONTENT_ID);
    scrollableContent!.addEventListener("scroll", event => {
      if (scrollableContent!.scrollTop > SCROLL_UP_THRESHOLD) {
        this.setState({scrollThresholdReached: true})
      } else {
        this.setState({scrollThresholdReached: false})
      }
    }, { passive: true });
  }

  render() {
    return (
      <Affix position={{ bottom: 20, right: 20 }}>
        <Box id="scroll-value"></Box>
        <Transition transition="slide-up" mounted={this.state.scrollThresholdReached}>
          
          {(transitionStyles) => (
        
            <Button
              leftIcon={<IconArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => {
                document.getElementById(SCROLLABLE_CONTENT_ID)!.scrollTop = 100
              }
            }
            >
              Do góry
            </Button>
          )}
        </Transition>
      </Affix>
    );  
  }
}