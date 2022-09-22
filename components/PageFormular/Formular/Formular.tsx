//libraries
import { useState } from "react";
//components
import {
  Alert,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
//google
import { appendSpreadsheet } from "../../../lib/google";
//data
import { data } from "./Formular.data";

const initialState = {
  pohlavi: "",
  email: "",
  datum: "",
};

const Formular = ({ courseType }: { courseType: string }) => {
  const [formState, setFormState] = useState(initialState);
  const [courseData, setCourseData] = useState(data[courseType]);
  const [loading, setLoading] = useState(false);
  const [isAlertActive, setIsAlertActive] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await appendSpreadsheet(formState, courseData.sheetId);
    setLoading(false);
    setFormState(initialState);
    setIsAlertActive(true);
  };

  const handleAlertClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsAlertActive(false);
  };

  const handleSnackbarClose = () => {
    setIsAlertActive(false);
  };

  return (
    <Container sx={{ pt: "2rem" }}>
      <Typography variant="h3" component="h1" sx={{ mb: "2rem" }}>
        Vybraný kurz: {courseData.name}
      </Typography>
      <Snackbar
        open={isAlertActive}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleAlertClose} severity="success">
          Odeslání bylo úspěšné !
        </Alert>
      </Snackbar>
      <form onSubmit={submitHandler}>
        <Grid direction="column" container spacing={4} alignItems="flex-start">
          <Grid item>
            <FormControl required>
              <FormLabel>Pohlaví</FormLabel>
              <RadioGroup
                name="pohlavi"
                onChange={handleChange}
                value={formState.pohlavi}
              >
                <FormControlLabel label="Muž" value="muz" control={<Radio />} />
                <FormControlLabel
                  label="Žena"
                  value="zena"
                  control={<Radio />}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl required>
              <FormLabel>E-mail</FormLabel>
              <TextField
                variant="standard"
                placeholder="kontaktní e-mail"
                name="email"
                onChange={handleChange}
                value={formState.email}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl required sx={{ width: "10rem" }}>
              <InputLabel id="select-label">Čas kurzu</InputLabel>
              <Select
                labelId="select-label"
                label="Čas kurzu"
                name="datum"
                onChange={(e) => handleChange(e)}
                value={formState.datum}
              >
                <MenuItem value="str-15">Středa 15:00</MenuItem>
                <MenuItem value="str-17">Středa 17:00</MenuItem>
                <MenuItem value="ctv-15">Čtvrtek 15:00</MenuItem>
                <MenuItem value="ctv-17">Čtvrtek 17:00</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <LoadingButton variant="outlined" type="submit" loading={loading}>
              odeslat
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default Formular;
