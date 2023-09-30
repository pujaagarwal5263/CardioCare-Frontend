import { Box, Flex, Image, Link, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
    {
        path: '/dashboard',
        display: 'Home'
    },
    {
      path: '/recommendation',
      display: 'Recommendation'
    },
    {
        path: '/nearbydoctors',
        display: 'Emergency'
    },
    {
        path: '/email/dashboard',
        display: 'Emails'
    },
    {
      path: '/aboutus',
      display: 'About Us'
    },
];

const Header = () => {
  return (
    <Box as="header" className='header' background='linear-gradient(to left, #ff5757, #8c52ff)' boxShadow="dark-lg"> 
      <Flex align="center" justify="space-between" px={4} py={2}>
        {/* Logo */}
        <Flex align="center">
          <Image
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRig-K3NJgt4Dbe4NYQWQx1XjfjzrnLnEPhV0fQTGUBIaKh4kTmalisU_YtnCC_9brFFlY&usqp=CAU'
            alt='logo'
            width='70px'
            height='70px'
          />
          {/* <Box ml={2}>
            <h1> <b> Cardio Care </b> </h1>
          </Box> */}
        </Flex>

        {/* Menu */}
        <Flex align="center">
          <Box display={{ base: "none", md: "block" }}>
            {navLinks.map((link, index) => (
              <Link
                as={RouterLink}
                key={index}
                to={link.path}
                px={4}
                py={2}
                fontSize="16px"
                fontWeight="500"
                color="white"
                _hover={{ color: "primaryColor" }}
                activeClassName="text-primaryColor"
              >
                <b>{link.display}</b>
              </Link>
            ))}
          </Box>

          <Box display={{ base: "block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Menu"
                icon={<HamburgerIcon />}
                variant="ghost"
                color="textColor"
                fontSize="20px"
                _hover={{ color: "primaryColor" }}
              />
              <MenuList>
                {navLinks.map((link, index) => (
                  <MenuItem
                    key={index}
                    as={RouterLink}
                    to={link.path}
                    fontSize="16px"
                    fontWeight="500"
                    color="textColor"
                    _hover={{ color: "primaryColor" }}
                    activeClassName="text-primaryColor"
                  >
                    {link.display}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
