import { Grid, styled, Typography, Container } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import { Downloading } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";

    const Hero = () => {
        const StyledHero = styled("div")(({theme}) => ({
          backgroundColor: theme.palette.primary.main,
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }))

        const StyledImg = styled("img")(() => ({
            width: "100%",
            borderRadius: "50%"
        }))
        
    return (
      <>
        <StyledHero>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <StyledImg src={Avatar} />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography color="primary.contrastText" variant="h1" textAlign="center">Vitor Matheus de Moraes</Typography>
                <Typography color="primary.contrastText" variant="h2" textAlign="center">Eu sou estudante</Typography>
                <Grid container display="flex" justifyContent="center" spacing={3}>
                  <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledButton>
                        <Downloading />
                        <Typography>Download CV</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledButton>
                      <EmailIcon />
                        <Typography>Entre em contato</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid> 
          </Container>
        </StyledHero>
      </>
    )
  }

  
  export default Hero