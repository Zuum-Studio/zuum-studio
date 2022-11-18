import { IconArrowUp } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';

export function ScrollUp() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>

      <Affix position={{ bottom: 20, right: 20 }}>
      
        <Transition transition="slide-up" mounted={scroll.y > 0}>
        
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}