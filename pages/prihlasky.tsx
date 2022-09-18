import {
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Input,
  InputLabel,
  FormHelperText,
  Typography,
  TextField,
  RadioGroup,
  Radio,
  Button,
  Switch,
  Paper,
  Checkbox,
  Grid,
} from "@mui/material";
//interfaces
import type { NextPage } from "next";

const Prihlasky: NextPage = () => {
  return (
    <div>
      <h1>heelooo</h1>
      <form>
        <Paper variant="outlined" sx={{ padding: 2, margin: 4 }}>
          <Grid container spacing={4} direction="column">
            <Grid item>
              <FormControl required>
                <FormLabel>Tábor</FormLabel>
                <Typography>Vyberte tábor, o který máte zájem</Typography>
                <RadioGroup>
                  <FormControlLabel label="T2" value="t2" control={<Radio />} />
                  <FormControlLabel label="T3" value="t3" control={<Radio />} />
                  <FormControlLabel label="T4" value="t4" control={<Radio />} />
                  <FormControlLabel label="T5" value="t5" control={<Radio />} />
                  <FormControlLabel label="T6" value="t6" control={<Radio />} />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl required>
                <FormLabel>Telefon</FormLabel>
                <Typography>Kontakt na zákonného zástupce</Typography>
                <TextField variant="standard" placeholder="Vaše odpověď" />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl required>
                <FormLabel>E-mail</FormLabel>
                <Typography>Kontakt na zákonného zástupce</Typography>
                <TextField variant="standard" placeholder="Vaše odpověď" />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl required>
                <FormLabel>Bude dítě odcházet z tábora samo?</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    label="Ano"
                    value="ano"
                    control={<Radio />}
                  />
                  <FormControlLabel label="Ne" value="ne" control={<Radio />} />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl required>
                <FormLabel>Souhlas s podmínkami</FormLabel>
                <Typography>
                  Odesláním přihlášky potvrzuji, že jsem se seznámil s
                  podmínkami přijetí. S podmínkami souhlasím a moje dítě je
                  splňuje.
                </Typography>
                <FormControlLabel label="Ano" value="ano" control={<Radio />} />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <FormLabel>Upozornění</FormLabel>
                <TextField placeholder="Vaše odpověď" variant="standard" />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <FormLabel>Jak jste se o nás dozvěděli?</FormLabel>
                <Typography>
                  Například "z vyhledávání na internetu či FB, od známých, z
                  reklamy v MHD, z letáčků, ze slevových kupónů....."
                </Typography>
                <FormGroup sx={{ alignItems: "flex-start" }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Internet"
                    value="internet"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Reklama v MHD"
                    value="reklama"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Od známých"
                    value="znamost"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Facebook"
                    value="facebook"
                  />
                  <FormControlLabel
                    sx={{ margin: "0" }}
                    control={
                      <TextField
                        sx={{ marginLeft: ".5rem" }}
                        variant="standard"
                      />
                    }
                    label="Jiné:  "
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <FormLabel>Platba</FormLabel>
                <RadioGroup>
                  <FormControlLabel
                    control={<Radio />}
                    label="Hotově"
                    value="hotove"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Převodem"
                    value="prevodem"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
        <Button variant="outlined" type="submit">
          submit
        </Button>
      </form>
      {/* <FormGroup>
        <FormControl>
          <InputLabel htmlFor="my-input">email address</InputLabel>
          <Input id="my-input" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">email address</InputLabel>
          <Input id="my-input" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="my-input">email address</InputLabel>
          <Input id="my-input" />
        </FormControl>
      </FormGroup>
*/}
      <Button variant="contained">submit me!</Button>
    </div>
  );
};

export default Prihlasky;
