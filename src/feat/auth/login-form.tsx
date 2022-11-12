import {
  Box,
  Link,
  NoSsr,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PrimaryButton } from "@/common/components/button";
import { useLogin, useVerifyToken } from "@/common/hooks/use-login";
import useLocalStorage from "@/common/hooks/use-local-storage";
import { useRouter } from "next/router";
import CustomSnackbar from "@/common/components/snackbar";
import { useLabelSnackbar } from "@/common/hooks/use-snackbar";

const LoginForm = () => {
  const theme = useTheme();
  const router = useRouter();
  const nextPath = router.query.continue as string;
  const [errorSnackbar, setErrorSnackbar] = useLabelSnackbar();

  const [token, setToken] = useLocalStorage("token", "");
  const [userId, setUserId] = useLocalStorage("userId", "");
  const [userRole, setUserRole] = useLocalStorage("userRole", "");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { mutateAsync: handleLogin } = useLogin({
    config: {
      onSuccess: (data) => {
        setIsLoggedIn(true);
        setToken(data.token.accessToken);
        setUserId(data.user.id);
        setUserRole(data.user.role);

        router.push(nextPath || "/");
      },
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSession = async (token: string) => {
    const verify = await useVerifyToken(token);

    if (verify) {
      router.push("/");
    }
  };

  useEffect(() => {
    if (!token || isLoggedIn) return;

    handleSession(token);
  }, [token]);

  return (
    <NoSsr>
      {errorSnackbar && <CustomSnackbar message={errorSnackbar} type="error" />}

      <Box
        sx={{
          backgroundImage: `url('/images/background-login.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: theme.palette.primary.main,
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "562px",
            minWidth: "550px",
            background: "#fff",
            padding: "40px 80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            overflowY: "auto",
            "@media (max-width: 550px)": {
              minWidth: "unset",
              width: "100%",
              padding: "40px 16px",
            },
          }}
        >
          <Box className="div-center" sx={{ mb: 3 }}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={150}
              layout="fixed"
              priority
            />
          </Box>

          <Box sx={{ mb: 3, width: "402px" }}>
            <Box
              component="form"
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  await handleLogin({ email, password });
                } catch {
                  setErrorSnackbar("Email or password is incorrect!");
                }
              }}
              sx={{ display: "block" }}
            >
              <TextField
                name="email"
                type="email"
                autoComplete="email"
                placeholder={"Email"}
                label={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                name="password"
                type="password"
                autoComplete="password"
                placeholder={"Password"}
                label={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
              <PrimaryButton
                type="submit"
                fullWidth
                sx={{ mb: 2 }}
                size="large"
              >
                Login
              </PrimaryButton>
              <Box
                sx={{ width: "100%", textAlign: "center", cursor: "pointer" }}
              >
                <Link>
                  <Typography
                    variant="button"
                    sx={{
                      textAlign: "center",
                      color: theme.palette.primary.main,
                    }}
                  >
                    Forgot Password
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>

          <Typography variant="caption" sx={{ color: "grey.600" }}>
            Blended Learning App 1.0.0
          </Typography>
        </Box>
      </Box>
    </NoSsr>
  );
};

export default LoginForm;
