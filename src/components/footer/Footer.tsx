import React from 'react';
import { Box, Flex, Text, Link, Container, Grid, Heading, TextField, Button } from '@radix-ui/themes';
import {
  HeartIcon,
  PhoneIcon,
  MailIcon,
  SendIcon
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  /*
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription submitted');
  };
  */

  return (
    <footer>
      <Box px={'4'} style={{ marginTop: '200px', borderTopWidth: '1px', borderTopStyle: 'solid', borderColor: 'var(--gray-7)' }}>
        <Container size="4">
          {/* Main Footer Content */}
          <Grid columns={{ initial: '1', xs: '2', md: '4' }} gap="9" py="8">
            {/* Company Info */}
            <Box>
              <Heading as="h3" size="3" mb="3">KAPI ?</Heading>
              <Text style={{ textAlign: 'justify' }} as="p" size="2" color="gray" mb="3">
                Mes esame bendruomenė, teikianti naujienas apie technologijas, finansus ir inovacijas. Prisijunkite prie mūsų sparčiai augančio portalo!{' '}
              </Text>
              <HeartIcon size={24} color='var(--orange-11)' />

            </Box>

            {/* Quick Links */}
            <Box>
              <Heading as="h3" size="3" mb="3">Navigacija</Heading>
              <Flex direction="column" gap="2">
                <Link href="/" size="2" color="gray" highContrast>Pagrindinis</Link>
                <Link href="/news" size="2" color="gray" highContrast>Naujienos</Link>
              </Flex>
            </Box>

            {/* Contact Info */}
            <Box>
              <Heading as="h3" size="3" mb="3">Kontaktai</Heading>
              <Flex direction="column" gap="3">
                <Flex align="center" gap="2">
                  <PhoneIcon style={{ width: 16, height: 16 }} />
                  <Link size="2" color="gray" highContrast>+370 620 0000</Link>
                </Flex>
                <Flex align="center" gap="2">
                  <MailIcon style={{ width: 16, height: 16 }} />
                  <Link size="2" color="gray" highContrast>info@kapi.lt</Link>
                </Flex>
              </Flex>
            </Box>

            {/* Newsletter */}
            <Box>
              <Heading as="h3" size="3" mb="3">Naujienlaiškis</Heading>
              <Text as="p" size="2" color="gray" mb="3">
                Prenumeruokite, jeigu norite matyti specialius pasiūlymus, naujienas bei kitą informaciją susijusią su KAPI platforma
              </Text>
              <form>
                <Flex direction="column" gap="2">
                  <TextField.Root
                    placeholder="El. paštas"
                    type="email"
                    required
                  />
                  <Button variant="solid" type="submit">
                    <SendIcon style={{ width: 16, height: 16 }} />
                    Prenumeruoti
                  </Button>
                </Flex>
              </form>
            </Box>
          </Grid>

          {/* Footer Bottom */}
          <Box style={{ borderTopWidth: '1px', borderTopStyle: 'solid', borderColor: 'var(--gray-5)' }}>
            <Flex
              direction={{ initial: 'column', md: 'row' }}
              justify="between"
              align="center"
              py="4"
              gap="4"
            >
              <Flex align="center" gap="2">
                <Text size="2" color="gray">
                  © {currentYear} KAPI
                </Text>
              </Flex>

              <Flex gap="6" align="center">
                <Link size="2" color="gray" highContrast>Privatumo politika</Link>
                <Link size="2" color="gray" highContrast>Naudotojo taisyklės</Link>
                <Link size="2" color="gray" highContrast>Slapukų politika</Link>
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
