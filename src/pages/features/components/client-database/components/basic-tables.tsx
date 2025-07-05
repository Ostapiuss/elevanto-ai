import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
  return (
    <TableContainer component={Paper} sx={{ border: '1px solid #EFF0F1' }}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#EFF0F1' }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Stage</TableCell>
            <TableCell>Last Activity</TableCell>
            <TableCell>Tag</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                <StageTag status={row.stage} text={row.stage} />
              </TableCell>
              <TableCell>{row.lastActivity}</TableCell>
              <TableCell>
                <TagTableAlert text={row.tag} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
