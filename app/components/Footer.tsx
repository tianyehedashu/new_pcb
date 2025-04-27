import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import { Link } from '@remix-run/react';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'PCB Manufacturing', path: '/pcb-manufacturing' },
      { name: 'PCB Assembly', path: '/pcb-assembly' },
      { name: 'Price Calculator', path: '/price-calculator' },
      { name: 'Quote', path: '/quote' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerLinks.map((section) => (
            <Grid xs={12} sm={6} md={3} key={section.title}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <MuiLink
                      component={Link}
                      to={link.path}
                      sx={{
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {link.name}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
          <Grid xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: info@innopcb.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +86 123 4567 8900
            </Typography>
            <Typography variant="body2">
              Address: 123 PCB Street, Shenzhen, China
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} INNO PCB. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}