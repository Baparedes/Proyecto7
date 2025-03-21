import { useNavigate } from 'react-router-dom';
import ProductsList from '../ProductsList/ProductsList';
import {
  Button,
  CardContent,
  Box,
} from '@mui/material';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 1 }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              sx={{
                mb: -4,
                color: 'white',
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
                bgcolor: 'rgba(12, 38, 63, 0.36)',
              }}
              onClick={() => {
                navigate('/cart');
              }}
            >
              Ver mi carrito
            </Button>
          </Box>
        </CardContent>
      <ProductsList />
    </Box>
  );
};

export default Profile;
