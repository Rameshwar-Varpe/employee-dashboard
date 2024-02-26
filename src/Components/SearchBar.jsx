import {TextField, Box } from "@mui/material";
// import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar(props) {
    // const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        // setSearchTerm(event.target.value);
        props.setSearchTerm(event.target.value);
        // props.setSearchedEmployee(searchTerm);
    };

    return (
        <Box
            marginRight={"20px"}
        >
            <TextField
                id="search"
                type="search"
                label="Search"
                size="small"
                autoFocus="true"
                // focused
                // value={searchTerm}
                sx={{ width: "20.7%" }}
                InputProps={{
                    endAdornment: (
                        // <InputAdornment >
                            <SearchIcon />
                        // </InputAdornment>/
                    )
                }}
                onChange={handleChange}
            />
        </Box>
    )
}

export default SearchBar;
