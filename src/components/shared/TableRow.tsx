import * as React from 'react';
import Flex from './Flex';
import Text from './Text';

interface TableRowProps<TModel> {
  dataKeys: (keyof TModel)[];
  dataRow: TModel;
}

function TableRow<TModel>({
  dataKeys,
  dataRow,
}: TableRowProps<TModel>): JSX.Element {
  return (
    <Flex as="tr" css={{ py: '$base' }}>
      {dataKeys.map((key) => (
        <Text
          as="td"
          key={String(key)}
          css={{
            textAlign: 'center',
            flex: '1',
            fontSize: 'sm',
            color: '$middarkgrey',
          }}
        >
          {dataRow[key]}
        </Text>
      ))}
    </Flex>
  );
}

export default TableRow;
