import { Button, Box, Divider, Card, Grid } from "@mui/material"
import skill from "./skill.json"

export default function Protfolio() {


    const skills = skill.map((e, i) => (
        <Grid item xs={4}>
            <Card sx={{ background: "none" }}>
                <h1>{e.skill}</h1>
                <p>{e.description}</p>
            </Card>
        </Grid>
    ))

    return (<>
        <Box>
            <h1>Nice to meet you!</h1>
            <h1>I'm Adam Keyes</h1>
            <p>Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love </p>

            <Button>CONTRACT ME</Button>
        </Box>

        <Divider sx={{ background: "gray" }} />
        <Grid container spacing={1}>
            {skills}
        </Grid>
    </>)
}