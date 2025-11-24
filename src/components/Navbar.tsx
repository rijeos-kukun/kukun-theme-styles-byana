import React, { useState } from "react";
import { Box, Typography, IconButton, Divider } from "@mui/joy";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { RightSidebar } from "./RightSidebar";

export const Navbar: React.FC = () => {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  const handleGoHome = () => {
    // Navigate to home - you can add react-router-dom navigation here if needed
    window.scrollTo(0, 0);
  };

  const handleMenuClick = () => {
    window.scrollTo(0, 0);

    if (window.innerWidth < 900) {
      document
        .querySelector("#sidebar-toggle-control button")
        ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    } else {
      setRightSidebarOpen(true);
    }
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          width: "100%",
          height: 70,
          boxShadow: "0px 0px 10px rgba(0,0,0,.15)",
          backgroundColor: "#fff",
          px: { xs: 2, md: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1400,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box onClick={handleGoHome} sx={{ cursor: "pointer" }}>
            <img
              src="/images/newKukun.svg"
              alt="Home"
              style={{
                display: "block",
                width: "auto",
                height: 28,
                maxWidth: 158,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
              flexDirection: "row",
            }}
          >
            <Typography
              level="body-md"
              textColor="#232426"
              sx={{
                display: { xs: "none", md: "block" },
                fontFamily: "Montserrat-Bold",
              }}
            >
              Hello!
            </Typography>

            <Divider
              orientation="vertical"
              sx={{ display: { xs: "none", md: "block" } }}
            />

            <Typography
              level="body-sm"
              fontWeight="lg"
              textColor="#FB0C23"
              sx={{
                fontSize: { xs: "sm", md: "md" },
                fontFamily: "Montserrat-Bold",
              }}
            >
              Admin
            </Typography>

            <Divider
              orientation="vertical"
              sx={{ display: { xs: "none", md: "block" } }}
            />

            <IconButton variant="plain" size="sm" onClick={handleMenuClick}>
              <Icon
                path={mdiMenu}
                style={{ width: "100%", height: "auto", maxWidth: 30 }}
              />
            </IconButton>
          </Box>
        </Box>
        <RightSidebar
          open={rightSidebarOpen}
          onClose={() => setRightSidebarOpen(false)}
        />
      </Box>
    </>
  );
};
