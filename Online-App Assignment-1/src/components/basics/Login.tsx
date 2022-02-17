import * as React from "react";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Country from "./Country.json";
import { Container, Col, Row, Stack } from "react-bootstrap";
import "../basics/login.scss";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let checked: boolean = false;

  const navigate = useNavigate();
  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };
  const [login, setlogin] = React.useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    phoneNo: "",
    country: "",
    // agree:""
  });
  let name, value;
  const handleInputs = (e: any) => {
    name = e.target.name;
    value = e.target.value;

    setlogin({ ...login, [name]: value });
  };
  const handleChecked = (e: any) => {
    checked = e.target.checked;
  };
  const PostData = () => {
    let result = Object.values(login).every((o) => o != "") && checked == true;
    if (result == true) {
      navigate("/instruction");
      localStorage.setItem("login", JSON.stringify(login));
      console.log(login);
    } else {
      window.alert("Please fill all mandatory fields");
    }
  };

  return (
    <>
      <div className="bg1">
        <Container className="pt-5 mtop">
          <Row>
            <Col>
              <div className="loginImages">
                <img
                  src={require("../images/login.svg").default}
                  alt="mySvgImage"
                />
              </div>
            </Col>

            <Col>
              <div>
                <form>
                  <h2>
                    Create Your Account.
                    <br></br> 
                    <h6>It's Free And Only Takes A Minutes</h6>
                  </h2>
                  <TextField
                    label="*First Name"
                    size="small"
                    fullWidth
                    margin="dense"
                    name="firstName"
                    id="firstName"
                    value={login.firstName}
                    onChange={handleInputs}
                  />
                  <TextField
                    label="*Last Name"
                    size="small"
                    fullWidth
                    margin="dense"
                    name="lastName"
                    id="lastName"
                    value={login.lastName}
                    onChange={handleInputs}
                  />
                  <TextField
                    label="*User Name"
                    size="small"
                    fullWidth
                    margin="dense"
                    name="userName"
                    id="userName"
                    value={login.userName}
                    onChange={handleInputs}
                  />
                  <TextField
                    label="*Password"
                    size="small"
                    fullWidth
                    margin="dense"
                    name="password"
                    id="password"
                    value={login.password}
                    onChange={handleInputs}
                  />
                  <TextField
                    label="*Email Address"
                    size="small"
                    fullWidth
                    margin="dense"
                    name="email"
                    id="email"
                    value={login.email}
                    onChange={handleInputs}
                  />
                  <TextField
                    label="*Phone No."
                    size="small"
                    fullWidth
                    margin="dense"
                    name="phoneNo"
                    id="phoneNo"
                    value={login.phoneNo}
                    onChange={handleInputs}
                  />
                  <FormControl   fullWidth
                      margin="dense">
                    <InputLabel id="country-select">*Country</InputLabel>
                    <Select
                      size="small"
                      label="Country"
                      labelId="country-select"
                      name="country"
                      id="country"
                      onChange={handleInputs}
                    
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {Country.Countrynames.map((result) => (
                        <MenuItem value={result.countryCode}>
                          {result.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormGroup className="mt-4">
                    <FormControlLabel
                      name="agree"
                      id="agree"
                      //  value={login.agree}
                      onChange={handleChecked}
                      control={<Checkbox />}
                      label="I agree the Terms &#38; Conditions and Privacy
                      Policy."
                    />
                  </FormGroup>

                  <Stack gap={2} className="col-md-5 mx-auto">
                    <Button
                      // onClick={() => navigate("/instruction")}
                      onClick={PostData}
                      size="large"
                      variant="contained"
                    >
                      Register
                    </Button>
                  </Stack>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
