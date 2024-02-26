import { Button, Paper } from "@mui/material";

function EmployeeList(props) {

    const handleClick = (employee) => {
        props.setShowForm(true);
        props.setSelectedEmployee(employee);
    }

    return (
        <>
            <Paper
                elevation={10}
                sx={{
                    width: "20vw",
                    margin: 1,
                    // backgroundColor: "#F5E8DD"
                    // padding:1,
                    // boxSizing: "border-box",
                    // boxShadow: "5"
                }}
            >
                {props.employees.map((employee, index) => (
                    <Button
                        variant="contained"
                        sx={{
                            // position: "flex",
                            width: "100%",
                            margin: 0.5,
                            // backgroundColor:"#556052",
                            // props.showForm ?{ 
                            // bgcolor:props.selectedEmployee === employee ? "red" : "#556052"},
                            // bgcolor: props.showForm ? props.selectedEmployee === employee ? "red" : "#556052",
                            // margin: "2px 0px "

                            bgcolor: props.showForm
                                ? props.selectedEmployee === employee
                                    ? "red"
                                    : "#556052"
                                : "#556052",
                        }}
                        onClick={() => handleClick(employee)}
                    >
                        {employee.name}
                    </Button>
                ))}
            </Paper>
        </>
    )
}

export default EmployeeList;