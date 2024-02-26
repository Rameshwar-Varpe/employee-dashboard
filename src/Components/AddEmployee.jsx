import { Button, Container, Stack, Table, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import AlertBox from './AlertBox.jsx';


function AddEmployee(props) {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeDesignation, setEmployeeDesignation] = useState('');
    const [employeeDepartment, setEmployeeDepartment] = useState('');
    const [employeeSalary, setEmployeeSalary] = useState('');
    const [alertMsg, setAlertMsg] = useState(false);

    const handleClick = () => {
        if (employeeName && employeeDepartment && employeeDesignation && employeeSalary) {
            const employee = {
                ID: props.employees.length + 1,
                name: employeeName,
                designation: employeeDesignation,
                department: employeeDepartment,
                salary: employeeSalary
            }
            props.setNewEmployee(employee);
            props.setShowAddEmployeeForm(false);
        }
        else {
            // props.setShowAddEmployeeForm(false);
            setAlertMsg(true);
        }
        // props.setShowForm(true);
    }

    return (
        <Container>
            {/* <Paper elevation={10}
                sx={{
                    flexDirection: "column",
                    marginBottom: 1,
                    paddingBottom: 1
                }}> */}

                {
                    !alertMsg ?
                        (<>
                            <Stack>
                                <TableContainer >
                                    <Table>
                                        <TableRow>
                                            <TableCell sx={{ color: "blue" }}>Enter Name: </TableCell>
                                            <TableCell>
                                                <TextField
                                                    variant="standard"
                                                    onChange={(e) => setEmployeeName(e.target.value)}
                                                ></TextField>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ color: "blue" }}> Enter Designation: </TableCell>
                                            <TableCell>
                                                <TextField
                                                    variant="standard"
                                                    onChange={(e) => setEmployeeDesignation(e.target.value)}
                                                ></TextField>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ color: "blue" }}>Enter Department: </TableCell>
                                            <TableCell>
                                                <TextField
                                                    variant="standard"
                                                    onChange={(e) => setEmployeeDepartment(e.target.value)}
                                                ></TextField>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ color: "blue" }}>Enter Salary: </TableCell>
                                            <TableCell>
                                                <TextField
                                                    variant="standard"
                                                    type="number"
                                                    onChange={(e) => setEmployeeSalary(e.target.value)
                                                    }
                                                ></TextField>
                                            </TableCell>
                                        </TableRow>
                                    </Table>
                                </TableContainer>
                            </Stack>

                            <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                margin={" 2% 4% 0 4%"}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => props.setShowAddEmployeeForm(false)}
                                    size="small"
                                >close</Button>

                                <Button
                                    variant="contained"
                                    onClick={handleClick}
                                    size="small"
                                >Add</Button>
                            </Stack>
                        </>
                        )
                        :
                        (
                            <AlertBox
                                setAlertMsg={setAlertMsg}
                                setShowAddEmployeeForm={props.setShowAddEmployeeForm}
                            />
                        )
                }
            {/* </Paper> */}
        </Container>
    )
}

export default AddEmployee;