import * as React from 'react';
import Flex from './Flex';
import Text from './Text';

interface TableRowProps {
  dataRow: string;
}

function TableRow({ dataRow }: TableRowProps): JSX.Element {
  return (
    <Flex as="tr" css={{ py: '$base' }}>
      <Text
        as="td"
        css={{
          textAlign: 'center',
          flex: '1',
          fontSize: 'sm',
          color: '$middarkgrey',
        }}
      >
        {dataRow}
      </Text>
    </Flex>
  );
}

export default TableRow;
