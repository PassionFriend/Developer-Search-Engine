import React, { useState } from "react";
import "./Search.css";

import MicIcon from "@material-ui/icons/Apps";

import SearchIcon from "@material-ui/icons/Search";

import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    console.log("you hit search button", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    // come back and do something

    navigate("/search");
  };

  return (
    <div>
      <form>
        <TextField
          variant="standard"
          value={input}
          placeholder="For best results, use natural language. How to...? Why is...?"
          fullWidth
          margin="dense"
          InputProps={{
            endAdornment: (
              <Button
                aria-label="delete"
                size="large"
                disableRipple
                onClick={search}
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: "transparent",
                }}
              >
                <SearchIcon style={{ color: "#bdc1c5", fontSize: "30px" }} />
              </Button>
            ),

            sx: {
              height: 60,
              fontSize: 20,
              fontWeight: 600,
              color: "#bdc1c5",
              backgroundColor: "#303133",
              paddingLeft: 3,
            },
          }}
          onChange={(e) => setInput(e.target.value)}
        />

        {!hideButtons && (
          <div className="search__buttons">
            <Button type="submit" onClick={search} variant="outlined">
              Search
            </Button>
            <Button variant="outlined">Surprise Me</Button>
          </div>
        )}
      </form>
    </div>
  );
}
export default Search;
