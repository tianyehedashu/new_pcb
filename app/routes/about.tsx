import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import FactoryIcon from '@mui/icons-material/Factory';
import EngineeringIcon from '@mui/icons-material/Engineering';
import QualityIcon from '@mui/icons-material/Verified';
import SupportIcon from '@mui/icons-material/Support';

export default function About() {
  const features = [
    {
      icon: <FactoryIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'State-of-the-Art Facilities',
      description: 'Modern manufacturing facilities with advanced equipment and technology',
    },
    {
      icon: <EngineeringIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Expert Team',
      description: 'Experienced engineers and technicians with years of industry expertise',
    },
    {
      icon: <QualityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Quality Assurance',
      description: 'ISO 9001 certified with strict quality control processes',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Customer Support',
      description: '24/7 technical support and dedicated account managers',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About INNO PCB
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Your trusted partner in PCB manufacturing and assembly
      </Typography>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2024, INNO PCB has quickly established itself as a leading provider of
          high-quality PCB manufacturing and assembly services. Our mission is to deliver
          reliable, cost-effective solutions while maintaining the highest standards of
          quality and customer service.
        </Typography>
        <Typography variant="body1" paragraph>
          With state-of-the-art facilities and a team of experienced professionals, we
          specialize in manufacturing a wide range of PCBs, from simple single-layer boards
          to complex multi-layer designs. Our commitment to innovation and continuous
          improvement drives us to provide the best possible service to our customers.
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Why Choose Us
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 2,
                }}
              >
                <CardContent>
                  {feature.icon}
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Our Capabilities
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              PCB Manufacturing
            </Typography>
            <Typography variant="body1" paragraph>
              • 1-32 layer PCBs
              <br />
              • HDI and microvia technology
              <br />
              • Flexible and rigid-flex PCBs
              <br />
              • High-frequency PCBs
              <br />
              • Aluminum and metal core PCBs
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              PCB Assembly
            </Typography>
            <Typography variant="body1" paragraph>
              • SMT and through-hole assembly
              <br />
              • BGA and fine-pitch components
              <br />
              • Component sourcing
              <br />
              • Testing and inspection
              <br />
              • Box build assembly
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 