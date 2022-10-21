import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OrangeButton from '../CourseComponent/OrangeButton'
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontFamily: 'Montserrat',
        backgroundColor: '#5B4947',
        color: theme.palette.common.white,
        fontWeight: 500,
        fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
        fontFamily: 'Montserrat',
        fontWeight: 500,
        fontSize: 16,
        color: '#4F4F4F'
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const InvoiceTable = (props) => {
    const { headerList, dataList, id, CurrencyConvert, dateConvert } = props
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {
                        headerList.map((data) =>
                            <StyledTableCell align="center">{data}</StyledTableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    dataList.map((data,index) => (
                        <StyledTableRow key={data.idInvoice}>
                            <StyledTableCell align="center">{index+1}</StyledTableCell>
                            <StyledTableCell align="center">{data.invNum}</StyledTableCell>
                            <StyledTableCell align="center">{dateConvert(data.date)}</StyledTableCell>
                            <StyledTableCell align="center">{data.totalCourse}</StyledTableCell>
                            <StyledTableCell align="center">IDR {CurrencyConvert(data.totalPrice)}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Link to={'./detail/'+data.idInvoice}>
                                    <OrangeButton
                                        title='Details'>
                                    </OrangeButton>
                                </Link>
                            </StyledTableCell>
                        </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default InvoiceTable