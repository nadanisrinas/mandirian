import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/action";
import { Button } from "@mui/material";
import { Drawer } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import moment from "moment";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterArticle = ({ page, setPage }) => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    left: false,
    title: "",
    fromDate: moment(new Date()).format("dd/MM/yyyy"),
    toDate: moment(new Date()).format("dd/MM/yyyy"),
  });
  const initialState = { ...state };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (open) {
      setState(initialState);
    }
    setState({ ...state, left: open });
  };

  const startSearch = () => {
    let params = {
      q: "bitcoin",
      searchIn: "title",
      from: state.fromDate,
      to: state.toDate,
      page: page,
      pageSize: 10 * page,
      apiKey: "70f987d0e66c40ea856ca262778431bf",
    };
    dispatch(getData(axios, params));
    toggleDrawer(false);
  };
  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer(true)}>OPEN FILTER</Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{
              width: 250,
            }}
            role="presentation"
            // onClick={toggleDrawer(false)}
            // onKeyDown={toggleDrawer(false)}
          >
            <Stack spacing={3} padding={3}>
              <Typography>Search By</Typography>

              <TextField
                id="outlined-input"
                label="title"
                value={state.title}
                onChange={(event) =>
                  setState({ ...state, title: event.target.value })
                }
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="From Publish Date"
                  inputFormat="dd/MM/yyyy"
                  minDate={moment(new Date()).format("dd/MM/yyyy")}
                  value={state.fromDate}
                  onChange={(fromDate) =>
                    setState({ ...state, fromDate: fromDate })
                  }
                  renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker
                  label="To Publish Date"
                  inputFormat="dd/MM/yyyy"
                  minDate={state.fromDate}
                  value={state.toDate}
                  onChange={(toDate) => setState({ ...state, toDate: toDate })}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Button startIcon={<SearchIcon />} onClick={startSearch}>
                SEARCH
              </Button>
            </Stack>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default FilterArticle;
