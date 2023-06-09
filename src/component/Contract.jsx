
import { Box, Grid, TextField } from "@mui/material";
import PageAppBar from "./PageNavbar";

export default function Contract() {
    return (<>
        <Box style={{ background: "#242424", height: 400, display: "flex", flexDirection: "column", alignItems: "center", marginTop: 20 }}>
            <Grid container sx={{ pt: 5 }}>
                <Grid item sm={12} md={6} lg={6} >
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
                        <h1>Contract</h1>
                        <p style={{ maxWidth: 400, textAlign: "center" }}>I would love to hear about your project and how I could help.Please fill in the form. and I'll get back to you as soon as possible.</p>
                    </Box>
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                    <TextField label="Name" variant="standard" InputLabelProps={{ style: { color: "white" } }} style={{ width: 400 }} sx={{
                        input: {
                            color: "#ffffff",
                            borderBottom: "1px solid #ffffff",
                        },
                    }} />

                    <TextField label="Email" variant="standard" InputLabelProps={{ style: { color: "white" } }} style={{ width: 400 }} sx={{
                        input: {
                            color: "#ffffff",
                            borderBottom: "1px solid #ffffff",
                        },
                    }} />
                    <TextField label="Message" variant="standard" InputLabelProps={{ style: { color: "white" } }} style={{ width: 400 }} sx={{
                        input: {
                            color: "#ffffff",
                            borderBottom: "1px solid #ffffff",
                        },
                    }} />
                </Grid>
            </Grid>
            <PageAppBar style={{ width: "100vw" }} />
        </Box>

    </>)
}