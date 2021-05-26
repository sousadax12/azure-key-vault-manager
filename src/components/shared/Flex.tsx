import { styled } from '_theme';

const Flex = styled('div', {
  display: 'flex',

  variants: {
    variant: {
      center: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
});

export default Flex;
