import { Alert,Button, Stack } from "@mui/material";



function AlertBox(props) {

    const handleYesClick = () => {
        props.setAlertMsg(false);
        props.setShowAddEmployeeForm(false);
    }

    const handleNoClick = () => {
        props.setAlertMsg(false);
        props.setShowAddEmployeeForm(true);
    }
    return (
        <>
            <Stack>
                <Alert variant="filled" severity="warning">Fields are empty do you want to close the form</Alert>
                <Stack
                direction={"row"}
                justifyContent={"space-between"}
                marginTop={"5px"}
                >
                <Button
                    onClick={handleYesClick}
                    variant="contained"
                    size="small"
                    // sx={{
                    //     backgroundColor:"#ed6c02"
                    // }}
                >
                    Yes
                </Button>
                <Button
                    onClick={handleNoClick}
                    variant="contained"
                    size="small"
                    // sx={{
                    //     backgroundColor:"#ed6c02"
                    // }}
                >
                    No
                </Button>
                </Stack>
            </Stack>
        </>
    )
}

export default AlertBox;