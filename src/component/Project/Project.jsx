import { Card, Button, Grid, Typography, Box } from "@mui/material"
import Image from 'mui-image'
import { useState } from "react";


import project from "./project.json"

import logo1 from "../../assets/images/thumbnail-project-1-large.webp";
import logo2 from "../../assets/images/thumbnail-project-2-large.webp";
import logo3 from "../../assets/images/thumbnail-project-3-large.webp";
import logo4 from "../../assets/images/thumbnail-project-4-large.webp";
import logo5 from "../../assets/images/thumbnail-project-5-large.webp";
import logo6 from "../../assets/images/thumbnail-project-6-large.webp";
import ProjectCards from "./ProjectCards";


export default function Project() {

    var projects = project.map((e, i) => {
        return (
            <ProjectCards data={e} />
        )
    })



    return (<>
        <Box sx={{ marginLeft: "120px", marginRight: "120px" }}>
            <h1>Projects</h1>
            <Grid container spacing={1}>
                {projects}
            </Grid>
        </Box>
    </>)
}