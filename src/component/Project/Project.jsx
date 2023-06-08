import { Card, Button, Grid, Typography } from "@mui/material"

import project from "./project.json"
import { Stack } from "react-bootstrap";

export default function Project() {

    const projects = project.map((e, i) => {

        var tags = e.tag;
        var printtag = tags.map((e) => (
            <p style={{ paddingRight: 10, height: 24, margin: 0 }}>{e}</p>
        ))

        return (
            <Grid item xs={6}>
                <Card sx={{ background: "none" }} elevation={0}>
                    <h2>{e.title}</h2>
                    <div style={{ height: 24, display: "flex", flexDirection: "row", paddingBottom: 10 }}>
                        {printtag}
                    </div>


                    <div style={{ height: 24, display: "flex", flexDirection: "row" }}>
                        <Button style={{ padding: 0, marginRight: 10 }}><p style={{ color: "white" }}>View Project</p></Button>
                        <Button style={{ padding: 0 }}><p style={{ color: "white" }}>View Code</p></Button>
                    </div>


                </Card>
            </Grid >
        )
    })

    return (<>
        <h1>Projects</h1>
        <Grid container spacing={1}>
            {projects}
        </Grid>
    </>)
}