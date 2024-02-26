import { Avatar, Box, Stack, Typography } from "@mui/material";

function Appbar(props) {

    return (
        <>
            <Stack
                // direction={"row"}
                // justifyContent={"space-between"}
                // alignItems={"center"}
                sx={{
                    bgcolor: "#19A7CE"
                }}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    spacing={3}
                    margin={"0 30px 0 30px"}
                >
                    <Box sx={{ height: "5%" }}>
                        <Avatar
                            src="https://media.licdn.com/dms/image/D4D0BAQGmReuRWIQY0w/company-logo_200_200/0/1666424143657?e=2147483647&v=beta&t=GiAyYnr4tUwvRRn4ThXsb58xc7Cya4bEYljnkss72Hg"
                            alt="AYS Software Solution"
                            sx={{
                                height: "12vh",
                                width: "12vh",
                                padding: 1
                            }}
                        />
                    </Box>
                    <Typography variant="h5" component={"h2"} color={"whitesmoke"}>Employees: {props.employees.length}</Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default Appbar;