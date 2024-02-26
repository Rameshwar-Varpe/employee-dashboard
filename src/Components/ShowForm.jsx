import { Button, Container, Stack, Table, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import { useState } from "react";

function ShowForm(props) {
    const [editMode, setEditMode] = useState(false);
    const [originalSelectedEmployee, setOriginalSelectedEmployee] = useState({...props.selectedEmployee});

    const handleEdit = () => {
        setEditMode(true);
    }

    const handleSave = () => {
        setEditMode(false);
        if (props.selectedEmployee) {
            props.updateEmployee(props.selectedEmployee);
        }
    }

    const handleChange = (fieldName, value) => {
        props.setSelectedEmployee(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    }

    const handleClose = () => {
        setEditMode(false)
        props.setShowForm(false)
    }

    const handleCancle = () => {
        setEditMode(false);
        props.setSelectedEmployee(originalSelectedEmployee);
        // props.setShowForm(false);
        // props.setShowForm(true);
    }

    const handleDelete = () => {
        props.setShowForm(false);
        props.handleDelete(props.selectedEmployee)
    }

    return (
        <>
            {props.showForm ? (
                <Container>
                    <TableContainer>
                        <Table>
                            <TableRow>
                                <TableCell sx={{ color: "blue" }}>ID: </TableCell>
                                <TableCell>
                                    <TextField variant="standard" value={props.selectedEmployee.ID} readOnly />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "blue" }}>Name: </TableCell>
                                <TableCell>
                                    {editMode ? (
                                        <TextField
                                            variant="standard"
                                            value={props.selectedEmployee.name}
                                            onChange={(e) => handleChange("name", e.target.value)}
                                        />
                                    ) : (
                                        <TextField variant="standard" value={props.selectedEmployee.name} readOnly />
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "blue" }}>Designation: </TableCell>
                                <TableCell>
                                    {editMode ? (
                                        <TextField
                                            variant="standard"
                                            value={props.selectedEmployee.designation}
                                            onChange={(e) => handleChange("designation", e.target.value)}
                                        />
                                    ) : (
                                        <TextField variant="standard" value={props.selectedEmployee.designation} readOnly />
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "blue" }}>department: </TableCell>
                                <TableCell>
                                    {editMode ? (
                                        <TextField
                                            variant="standard"
                                            value={props.selectedEmployee.department}
                                            onChange={(e) => handleChange("department", e.target.value)}
                                        />
                                    ) : (
                                        <TextField variant="standard" value={props.selectedEmployee.department} readOnly />
                                    )}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "blue" }}>Salary: </TableCell>
                                <TableCell>
                                    {editMode ? (
                                        <TextField
                                            variant="standard"
                                            value={props.selectedEmployee.salary}
                                            onChange={(e) => handleChange("salary", e.target.value)}
                                        />
                                    ) : (
                                        <TextField variant="standard" value={props.selectedEmployee.salary} readOnly />
                                    )}
                                </TableCell>
                            </TableRow>
                        </Table>
                    </TableContainer>

                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        margin={"2% 4% 2% 4%"}
                    >
                        {editMode ? (
                            <>
                                <Button
                                    variant="contained"
                                    onClick={handleSave}
                                    size="small"
                                >
                                    Save
                                </Button>

                                <Button
                                    variant="contained"
                                    onClick={handleCancle}
                                    size="small"
                                >
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="contained"
                                    onClick={handleEdit}
                                    size="small"
                                >
                                    Edit
                                </Button>

                                <Button
                                    variant="contained"
                                    onClick={handleDelete}
                                    size="small"
                                >
                                    Delete
                                </Button>

                                <Button
                                    variant="contained"
                                    onClick={handleClose}
                                    size="small"
                                >
                                    Close
                                </Button>
                            </>
                        )}
                    </Stack>
                </Container>
            ) : (
                <></>
            )}
        </>
    );
}

export default ShowForm;

