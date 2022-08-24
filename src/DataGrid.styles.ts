import { createStyles, CSSObject } from '@mantine/core';

export type DataGridStylesParams = {
  height?: number;
  noEllipsis?: boolean;
  withFixedHeader?: boolean;
};

const ellipsis: CSSObject = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export default createStyles((theme, { height, noEllipsis, withFixedHeader }: DataGridStylesParams) => ({
  scrollArea: {
    position: 'relative',
    height: height ? height : undefined,
  },
  table: {
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  thead: {
    position: 'relative',
    '::after': {
      content: "' '",
      backgroundColor: theme.colors.dark[4],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '2px',
    },
    ...(withFixedHeader && {
      position: 'sticky',
      top: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      transition: 'box-shadow 150ms ease',
    }),
  },
  tbody: {
    minHeight: '160px',
  },
  tr: {},
  th: { position: 'relative' },
  td: {},
  headerCell: {
    display: 'flex',
    width: 'inherit',
    height: 'inherit',
    justifyContent: 'space-between',
  },
  headerCellContent: {
    ...(!noEllipsis && ellipsis),
  },
  headerCellButtons: {
    display: 'inline-flex',
    gap: '4px',
    alignItems: 'center',
  },
  dataCell: {
    display: 'flex',
    width: 'inherit',
    justifyContent: 'space-between',
  },
  dataCellContent: {
    ...(!noEllipsis && ellipsis),
  },
  resizer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 4,
    borderRight: `1px dashed ${theme.colors.dark[5]}`,
    cursor: 'col-resize',
    ':hover': {
      backgroundColor: theme.colors.dark[5],
    },
  },
  sorter: {},
  filter: {},
  globalFilter: {},
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      justifyContent: 'space-between',
    },
  },

  pagination_info: {
    display: 'none',

    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      display: 'inline-block',
    },
  },

  pagination_size: {
    display: 'none',

    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      display: 'flex',
      alignItems: 'center',
      gap: `${theme.spacing.xs}px`,
    },
  },

  pagination_page: {},
}));
