import * as React from 'react';
import { styled } from '_theme';
import Flex from './Flex';
import TableRow from './TableRow';

const Box = styled('div', {
  backgroundColor: '$darkBlue',
  width: '20px',
  height: '20px',
});

const TableHeader = styled('th', {
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '$base',
  textAlign: 'center',
  flex: '1',
  color: '$darkgrey',
});

const TableWrapper = styled('table', {
  flexDirection: 'column',

  'tbody tr:nth-of-type(odd)': {
    backgroundColor: '$darkwhite',
  },
});

interface TableProps {
  columnHeaders: string[];
  dataRows: string[];
}

function Table({ columnHeaders, dataRows }: TableProps): JSX.Element {
  return (
    <TableWrapper as="table">
      <Box as="thead">
        <Flex as="tr" css={{ marginBottom: '$lg' }}>
          {columnHeaders.map((header) => (
            <TableHeader as="th" key={header}>
              {header}
            </TableHeader>
          ))}
        </Flex>
      </Box>

      <Box as="tbody">
        {dataRows.map((data, index) => (
          <TableRow key={index} dataRow={data} />
        ))}
      </Box>
    </TableWrapper>
  );
}

export default Table;
