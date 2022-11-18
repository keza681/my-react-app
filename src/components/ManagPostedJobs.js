import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead, } from '@mui/material';

export default function ManagPostedJobs() {
    return (
        <div>
    <TableContainer component={Paper}>
        <Table aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell>Job Title</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>View Job Detail</TableCell>
                    <TableCell>View All Users</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {TableData.map((row)=>(
                   <TableRow
                    key={row.id}
                    sx={{'&:last-child td, &:last-child': { border:0 }}}>

                    <TableCell>{row.job_title}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.job_detail}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

const TableData = [{
    "job_title": 1,
    "date": "Karon",
    "job_detail": "Sissel",
    "email": "ksissel0@time.com",
    "gender": "Female",
    "ip_address": "68.54.224.213"
}, {
    "job_title": 2,
    "date": "Noella",
    "job_detail": "Paudin",
    "email": "npaudin1@cafepress.com",
    "gender": "Female",
    "ip_address": "32.251.148.67"
}, {
    "job_title": 3,
    "date": "Alisha",
    "job_detail": "Eke",
    "email": "aeke2@google.cn",
    "gender": "Agender",
    "ip_address": "91.186.214.106"
}, {
    "job_title": 4,
    "date": "Broddie",
    "job_detail": "Loverock",
    "email": "bloverock3@weebly.com",
    "gender": "Polygender",
    "ip_address": "89.198.156.40"
}, {
    "job_title": 5,
    "date": "Markos",
    "job_detail": "Dykins",
    "email": "mdykins4@scribd.com",
    "gender": "Male",
    "ip_address": "212.149.239.163"
}, {
    "job_title": 6,
    "date": "Deny",
    "job_detail": "Berk",
    "email": "dberk5@alexa.com",
    "gender": "Female",
    "ip_address": "135.182.203.152"
}, {
    "job_title": 7,
    "date": "Carlita",
    "job_detail": "Sporrij",
    "email": "csporrij6@rambler.ru",
    "gender": "Female",
    "ip_address": "125.108.107.126"
}, {
    "job_title": 8,
    "date": "Charlton",
    "job_detail": "Triggs",
    "email": "ctriggs7@umich.edu",
    "gender": "Male",
    "ip_address": "250.20.182.42"
}, {
    "job_title": 9,
    "date": "Eddie",
    "job_detail": "Illyes",
    "email": "eillyes8@domainmarket.com",
    "gender": "Female",
    "ip_address": "134.182.221.23"
}, {
    "job_title": 10,
    "date": "Fanchette",
    "job_detail": "Whitehouse",
    "email": "fwhitehouse9@alexa.com",
    "gender": "Female",
    "ip_address": "211.8.50.110"
}]
