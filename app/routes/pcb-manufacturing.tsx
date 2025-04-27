import { Box, Container, Grid, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { Link } from '@remix-run/react';

export default function PCBManufacturing() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        PCB Manufacturing Services
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        High-quality PCB manufacturing with fast turnaround times and competitive pricing
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mt: 4 }}>
        <Grid xs={12} md={6} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Standard PCB
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Layers"
                    secondary="1-32 layers"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Materials"
                    secondary="FR4, Aluminum, Rogers"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Turnaround Time"
                    secondary="3-5 days standard, 24-48 hours express"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Min. Line Width/Space"
                    secondary="3/3 mil"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Advanced PCB
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="HDI PCB"
                    secondary="Microvias, blind/buried vias"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Flexible PCB"
                    secondary="Single/double-sided flex circuits"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Rigid-Flex PCB"
                    secondary="Combination of rigid and flexible PCBs"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="High-Frequency PCB"
                    secondary="Rogers, Taconic materials"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Ready to Order?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Upload your design files and get an instant quote
        </Typography>
        <Link
          to="/price-calculator"
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Typography
            variant="button"
            sx={{
              display: 'inline-block',
              mt: 2,
              p: 2,
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: 1,
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            Get Instant Quote
          </Typography>
        </Link>
      </Box>
    </Container>
  );
}