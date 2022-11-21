import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead, } from '@mui/material';
// import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ManagPostedJobs() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

    return (
        <div>
    <TableContainer component={Paper}>
        <Table aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell >Job Title</TableCell>
                    <TableCell align='center'>Date</TableCell>
                    <TableCell align='center'>Job Detail</TableCell>
                    <TableCell align='center'>Candidates</TableCell>


                </TableRow>
            </TableHead>

            <TableBody>
                {TableData.map((row)=>(
                   <TableRow
                    key={row.id}
                    sx={{'&:last-child td, &:last-child': { border:0 }}}>

                    <TableCell>{row.job_title}</TableCell>
                    <TableCell align='center'>{row.date}</TableCell>
                    <TableCell align='center' color='primary'>{row.job_detail}</TableCell>
                    <TableCell 
                    align='center'><Button onClick={handleOpen}>{row.candidates}</Button>
                    </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

const TableData = [{
    "job_title": "Senior Back-end developer",
    "date": "Sep 12th, 2021",
    "job_detail": "View",
    "candidates": "View",
    "gender": "Female",
    "ip_address": "68.54.224.213"
}, {
    "job_title": "Middle DevOps engineer",
    "date": "Dec 12th, 2021",
    "job_detail": "View",
    "candidates": "View",
    "gender": "Female",
    "ip_address": "32.251.148.67"
}, {
    "job_title": "Junior Java developer",
    "date": "Jan 12th, 2021",
    "job_detail": "View",
    "candidates": "View",
    "gender": "Agender",
    "ip_address": "91.186.214.106"
}, {
    "job_title": "Junior Software engineer",
    "date": "Mar 12th, 2021",
    "job_detail": "View",
    "candidates": "View",
    "gender": "Polygender",
    "ip_address": "89.198.156.40"
}, {
    "job_title": "Middle Platform engineer",
    "date": "Oct 12th, 2021",
    "job_detail": "View",
    "candidates": "View",
    "gender": "Male",
    "ip_address": "212.149.239.163"
}, {
    "job_title": "Senior Reliability engineer",
    "date": "Dec 12th, 2021",
    "job_detail": "View",
    "candidates": "View",
    "gender": "Female",
    "ip_address": "135.182.203.152"
}, {
    "job_title": "Middle Cloud system engineer",
    "date": "May 12th, 2021",
    "job_detail": "View",
    "candidates": "View",
    "gender": "Female",
    "ip_address": "125.108.107.126"
}, {
    "job_title": "Junior Software engineer",
    "date": "Aug 12th, 2021",
    "job_detail": "View",
    "candidates": "View",
    "gender": "Male",
    "ip_address": "250.20.182.42"
}, {
    "job_title": "Senior Cloud/software developer",
    "date": "Jun 12th, 2021",
    "job_detail": "View",
    "candidates": "View",
    "gender": "Female",
    "ip_address": "134.182.221.23"
}, {
    "job_title": "Senior Web developer",
    "date": "Jul 12th, 2021",
    "job_detail": "View",
    "candidates": "View",
    "gender": "Female",
    "ip_address": "211.8.50.110"
}]
