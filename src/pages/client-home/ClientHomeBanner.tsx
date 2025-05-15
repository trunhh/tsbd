import React from 'react';
import { Box, createStyles, Grid, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import { Car, HeartHandshake, Stars } from 'tabler-icons-react';
import { ClientCarousel } from 'components';
import banner01 from '../../images/trangchu/banner1.jpg';
import banner02 from '../../images/trangchu/banner2.webp';
import banner03 from '../../images/trangchu/banner3.jpg';


const useStyles = createStyles((theme) => ({
  rightBanner: {
    flexWrap: 'unset',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    borderRadius: theme.radius.md,
  },
}));

function ClientHomeBanner() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Grid>
      <Grid.Col md={7} lg={8}>
        <ClientCarousel>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage:`url(${banner01})`,
              backgroundSize: 'cover', // Ensure the image covers the box
              backgroundPosition: 'center', // Center the image
            }}
          >
          </Box>
          <Box
            sx={{
              height: '100%',
              minHeight: 315,
              backgroundImage: `url(${banner02})`,
              backgroundSize: 'cover', // Ensure the image covers the box
              backgroundPosition: 'center', // Center the image
            }}
          >
          </Box>
          <Box
            sx={{      
              height: '100%',
              minHeight: 315,
              backgroundImage: `url(${banner03})`,
              backgroundSize: 'cover', // Ensure the image covers the box
              backgroundPosition: 'center', // Center the image
            }}
          >
          </Box>
        </ClientCarousel>
      </Grid.Col>
      <Grid.Col md={5} lg={4}>
        <Stack>
          <Group py="sm" px="md" className={classes.rightBanner}>
            <Car size={65} strokeWidth={1}/>
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size="md" weight={500}>Miễn phí vận chuyển</Text>
              <Text size="sm">100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.</Text>
            </Stack>
          </Group>
          <Group py="sm" px="md" className={classes.rightBanner}>
            <Stars size={65} strokeWidth={1}/>
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size="md" weight={500}>Hỗ trợ 247</Text>
              <Text size="sm">Chúng tôi luôn sẵn sàng hỗ trợ khách hàng giải đáp các thắc mắc mọi lúc mọi nơi.</Text>
            </Stack>
          </Group>
          <Group py="sm" px="md" className={classes.rightBanner}>
            <HeartHandshake size={65} strokeWidth={1}/>
            <Stack spacing={theme.spacing.xs / 4}>
              <Text size="md" weight={500}>Đổi trả 1-1 hoặc hoàn tiền</Text>
              <Text size="sm">Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được nhu cầu.</Text>
            </Stack>
          </Group>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default ClientHomeBanner;
