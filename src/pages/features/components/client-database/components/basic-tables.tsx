import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import StageTag from '@shared/components/StageTag';
import TagTableAlert from '@shared/components/TagTableAlert';

function createData(name: string, stage: 'hot' | 'warm' | 'cold', lastActivity: string, tag: string) {
  return { name, stage, lastActivity, tag };
}

const rows = [
  createData('John Doe', 'hot', '2h ago', 'Real Estate'),
  createData('Alex Smith', 'warm', '2h ago', 'Real Estate'),
  createData('Mike Joghson', 'cold', '2h ago', 'Real Estate'),
];

export default function BasicTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TableContainer
      component={Paper}
      sx={{
        border: '1px solid #EFF0F1',
        overflowX: 'auto',
      }}
    >
      <Table size={isMobile ? 'small' : 'medium'} sx={{ minWidth: isMobile ? 350 : 450 }} aria-label="responsive table">
        <TableHead sx={{ backgroundColor: '#EFF0F1' }}>
          <TableRow>
            <TableCell sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}>Name</TableCell>
            <TableCell sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}>Stage</TableCell>
            <TableCell sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}>Last Activity</TableCell>
            <TableCell sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}>Tag</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}>
                {row.name}
              </TableCell>
              <TableCell sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}>
                <StageTag status={row.stage} text={row.stage} />
              </TableCell>
              <TableCell sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}>{row.lastActivity}</TableCell>
              <TableCell sx={{ fontSize: isMobile ? '0.75rem' : '1rem' }}>
                <TagTableAlert text={row.tag} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
