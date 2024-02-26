import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Sort(props) {
    const handleClick = (e) => {
       props.handleSort(e.target.value);
    }



    return (
        <Box>
            <FormControl >
                <InputLabel labelId="sorting-label"
                    justifyContent={"center"}
                >Sort</InputLabel>
                <Select
                    // value={sortOrder}
                    labelId="sorting-label"
                    id="sorting"
                    label="Sort"
                    onChange={handleClick}
                    size="small"
                    sx={{
                        width:"8vw"
                    }}
                >
                    <MenuItem
                        value="asc"
                        sx={{
                            color: "blue"
                        }}>
                        asc
                    </MenuItem>
                    <MenuItem
                        value="desc"
                        sx={{
                            color: "blue"
                        }}>
                        desc
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default Sort;
