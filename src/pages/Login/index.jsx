import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Checkbox,
  Link,
  FormControlLabel,
} from "@mui/material";
import MicrosoftIcon from "@mui/icons-material/Window";

export default function Login() {
  const roundedTextFieldStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
    },
    "& .MuiInputBase-input": {
      padding: "13px 14px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#e0e0e0",
    },
  };

  return (
    <Box display="flex" height="100vh">
      {/* Left Side (Form) */}
      <Container
        component={Paper}
        elevation={0}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          height: "100vh",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src="/octopusLogo.svg"
            alt="logo"
            style={{ width: "50px", marginBottom: 10 }}
          />
          <Typography
            component="h1"
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 1 }}
          >
            Welcome back
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Please enter your details to login.
          </Typography>
        </Box>

        {/* Microsoft Sign-in */}
        <Button
          variant="outlined"
          startIcon={<MicrosoftIcon />}
          sx={{
            mb: 2,
            py: 1,
            textTransform: "none",
            width: "60%",
            borderRadius: 2,
          }}
        >
          Sign in with Microsoft
        </Button>

        <Box
          sx={{ display: "flex", alignItems: "center", width: "100%", mb: 2 }}
        >
          <Divider sx={{ flexGrow: 1 }} />
          <Typography variant="body2" color="text.secondary" sx={{ mx: 2 }}>
            OR
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        {/* Login Form */}
        <Box component="form" width="100%" maxWidth={400}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Email
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            placeholder="user@octopus.com"
            autoComplete="email"
            sx={{ mt: 0, mb: 2, ...roundedTextFieldStyle }}
          />

          <Typography variant="body2" sx={{ mb: 1 }}>
            Password
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="********"
            sx={{ mt: 0, mb: 2, ...roundedTextFieldStyle }}
          />

          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember for 30 days"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              textTransform: "none",
              backgroundColor: "#a278f4",
              "&:hover": {
                backgroundColor: "#8a5cf7",
              },
            }}
          >
            Sign in
          </Button>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              No access to Octopus?
            </Typography>
            <Link href="#" variant="body2" sx={{ ml: 1, color: "#a278f4" }}>
              Contact Admin
            </Link>
          </Box>
        </Box>

        <Box sx={{ pt: 4 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ textAlign: "bottom" }}
          >
            © Octopus 2025. All rights reserved.
          </Typography>
        </Box>
      </Container>

      {/* Right Side (Image & Text) */}
      <Box
        flex={1.1}
        display={{ xs: "none", md: "flex" }}
        flexDirection="column"
        alignItems="center"
        sx={{
          position: "relative",
          borderRadius: 7,
          margin: 3,
          backgroundImage: "url('/octopus.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
        <Box
          sx={{
            position: "relative",
            maxWidth: "85%",
            bgcolor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
            padding: 2,
            paddingRight: 20,
            paddingBottom: 10,
            borderRadius: 5,
            marginY: 7,
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ mt: 3, textAlign: "left" }}
          >
            All your workspace in one place
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
