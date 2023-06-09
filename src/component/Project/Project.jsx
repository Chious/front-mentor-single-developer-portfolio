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


export default function Project() {

    const images = [logo1, logo2, logo3, logo4, logo5, logo6]

    var [isHovered, setIsHovered] = useState(false);

    var handleMouseEnter = (e) => {
        setIsHovered(true);
    };

    var handleMouseLeave = () => {
        setIsHovered(false);
    };


    const projects = project.map((e, i) => {

        var tags = e.tag;
        var printtag = tags.map((e) => { <p key={i} style={{ paddingRight: 10, height: 24, margin: 0 }}>{e}</p> })

        /*onMouseLeave={handleMouseLeave} */


        return (
            <Grid item md={6} lg={6} sm={12}>
                <Card sx={{ background: "none" }} elevation={0}>
                    <div className="Image" style={{ width: "100%", height: "100%" }}>
                        {isHovered &&
                            <Box className="overlay" style={{ zIndex: 1, width: "100%", height: "100%", position: "relative", top: 105, display: "flex", alignItems: "center", color: "white", background: "rgb(36 36 36 / 50%)", justifyContent: "center" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <Button style={{ padding: 0, marginRight: 10 }}><p style={{ color: "white" }}>View Project</p></Button>
                                    <Button style={{ padding: 0 }}><p style={{ color: "white" }}>View Code</p></Button>
                                </div>
                            </Box>}
                        <Image src={images[e.img]} height="100%" width="100%" duration={0} onMouseEnter={handleMouseEnter} />
                    </div>
                    <h2>{e.title}</h2>
                    <div style={{ height: 24, display: "flex", flexDirection: "row", paddingBottom: 10 }}>
                        {printtag}
                    </div>





                </Card>
            </Grid >
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