import { Grid, Container } from '@mui/material';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&h=250&q=60',
    title: 'San Francisco',
  },
  {
    src: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=400&h=250&q=60',
    title: 'New York',
  },
  {
    src: 'https://images.unsplash.com/photo-1617009723534-632d3eef4f1e?auto=format&fit=crop&w=400&h=250&q=80',
    title: 'Washington DC',
  },
  {
    src: 'https://images.unsplash.com/photo-1634221558053-3a617b5201d9?auto=format&fit=crop&w=400&h=250&q=60',
    title: 'Orlando',
  },
  {
    src: 'https://images.unsplash.com/photo-1594664233467-708a77a3299f?auto=format&fit=crop&w=400&h=250&q=60',
    title: 'Seattle',
  },
  {
    src: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&w=400&h=250&q=80',
    title: 'Las Vegas',
  },
];

export default function ImageGrid() {
  return (
    <Container maxWidth="xl" sx={{ mt: 30 }}>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div style={{ position: 'relative' }}>
              <img
                src={image.src}
                alt={image.title}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  border: '1px solid rgb(210,210,210)',
                  borderRadius: '5%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '20px',
                  boxSizing: 'border-box',
                  color: '#fff',
                  padding: '10px',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                }}
              >
                {image.title}
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
