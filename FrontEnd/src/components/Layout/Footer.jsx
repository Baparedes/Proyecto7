import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backdropFilter: 'blur(30px)',
        bgcolor: 'rgba(8, 26, 44, 0.8)',
        color: 'white',
        py: 3,
        textAlign: 'center',
        minWidth: '100vw',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © {new Date().getFullYear()} Este es un sitio realizado para Nimbus
          Technology netamente con fines académicos. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </Box>
  );
}
