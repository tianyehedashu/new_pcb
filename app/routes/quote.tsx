import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import { FileUpload } from '../components/FileUpload';

export default function Quote() {
  const [pcbType, setPcbType] = useState('standard');
  const [layers, setLayers] = useState('2');
  const [quantity, setQuantity] = useState('5');
  const [dimensions, setDimensions] = useState({
    width: '100',
    height: '100',
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Get a Quote
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Upload your design files and specifications to get an instant quote
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              PCB Specifications
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>PCB Type</InputLabel>
                  <Select
                    value={pcbType}
                    label="PCB Type"
                    onChange={(e) => setPcbType(e.target.value)}
                  >
                    <MenuItem value="standard">Standard PCB</MenuItem>
                    <MenuItem value="hdi">HDI PCB</MenuItem>
                    <MenuItem value="flex">Flexible PCB</MenuItem>
                    <MenuItem value="rigid-flex">Rigid-Flex PCB</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Number of Layers</InputLabel>
                  <Select
                    value={layers}
                    label="Number of Layers"
                    onChange={(e) => setLayers(e.target.value)}
                  >
                    <MenuItem value="1">1 Layer</MenuItem>
                    <MenuItem value="2">2 Layers</MenuItem>
                    <MenuItem value="4">4 Layers</MenuItem>
                    <MenuItem value="6">6 Layers</MenuItem>
                    <MenuItem value="8">8 Layers</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Width (mm)"
                  type="number"
                  value={dimensions.width}
                  onChange={(e) =>
                    setDimensions({ ...dimensions, width: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Height (mm)"
                  type="number"
                  value={dimensions.height}
                  onChange={(e) =>
                    setDimensions({ ...dimensions, height: e.target.value })
                  }
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Upload Design Files
              </Typography>
              <FileUpload onFileUpload={handleFileUpload} />
              {uploadedFile && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Uploaded file: {uploadedFile.name}
                </Typography>
              )}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Price Summary
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography>PCB Manufacturing</Typography>
                </Grid>
                <Grid item>
                  <Typography>$XX.XX</Typography>
                </Grid>
              </Grid>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ mb: 2 }}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h6">Total</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">$XX.XX</Typography>
                </Grid>
              </Grid>
            </Box>
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 2 }}
            >
              Place Order
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}