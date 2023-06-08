
import PageAppBar from "./PageNavbar";
import { Box, TextField } from "@mui/material";

export default function Contract() {
    return (<>
        <Box style={{ height: 400, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Contract</h1>
            <p style={{ maxWidth: 400, textAlign: "center" }}>I would love to hear about your project and how I could help.Please fill in the form. and I'll get back to you as soon as possible.</p>
            <TextField label="Name" variant="standard" InputLabelProps={{ style: { color: "white" } }} style={{ width: 400 }} />
            <TextField label="Email" variant="standard" InputLabelProps={{ style: { color: "white" } }} style={{ width: 400 }} />
            <TextField label="Message" variant="standard" InputLabelProps={{ style: { color: "white" } }} style={{ width: 400 }} />
        </Box>
        <PageAppBar />
    </>)
}