import { Box, Container, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from '@remix-run/react';

export default function PCBAssembly() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        PCB Assembly Services
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Professional PCB assembly with component sourcing and quality control
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                SMT Assembly
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Component Types"
                    secondary="01005, 0201, 0402, 0603, 0805, 1206"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Package Types"
                    secondary="QFN, BGA, CSP, LGA, SOP, QFP"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Placement Accuracy"
                    secondary="±0.025mm"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Minimum Pitch"
                    secondary="0.3mm"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Through-Hole Assembly
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Component Types"
                    secondary="Axial, Radial, DIP, SIP"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Process"
                    secondary="Wave soldering, Selective soldering"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Lead Spacing"
                    secondary="2.54mm standard"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Component Height"
                    secondary="Up to 25mm"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Quality Control
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Visual Inspection"
                    secondary="100% visual inspection of all components"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="AOI Testing"
                    secondary="Automated Optical Inspection"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="X-Ray Inspection"
                    secondary="For BGA and hidden solder joints"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Functional Testing"
                    secondary="Custom test fixtures and procedures"
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
          Upload your BOM and get an instant quote
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