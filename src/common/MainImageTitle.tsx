import { createStyles, Card, Overlay, CardProps, Button, Text, Box, Stack } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 240,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  content: {
    position: 'absolute',
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    color: theme.white,
    maxWidth: 220,
  },
}));

interface MainImageTitleProps {
  title: React.ReactNode;
  description1: React.ReactNode;
  subtitle: React.ReactNode;
  description2: React.ReactNode;
  description3: React.ReactNode;
  description4: React.ReactNode;
  image: string;

}

export function MainImageTitle({
  title,
  description1,
  subtitle,
  description2,
  description3,
  description4,
  image,

}: MainImageTitleProps & Omit<CardProps, keyof MainImageTitleProps | 'children'>) {
  const { classes, cx, theme } = useStyles();

  return (
    <Card
      radius="md"
      style={{ height:600, backgroundImage: `url(${image})` }}
      className={cx(classes.card)}
    >
      <Overlay
        gradient={`linear-gradient(0deg, rgba(17,16,16,1) 2%, rgba(17,16,16,0.8547794117647058) 17%, rgba(255,255,255,0) 54%)`}
        opacity={1}
        zIndex={0}
      />

      <Stack spacing={1} justify="flex-end" className={classes.content}>
        <Text size={28} weight={700} className={classes.title}>
          {title}
        </Text>
        <Text size={20} className={classes.description} sx={{maxWidth: "100%"}}>
          {description1}
        </Text>
        <Text size={15} weight={700} className={classes.title}>
          {subtitle}
        </Text>
        <Text size={12} className={classes.description} sx={{maxWidth: "100%"}}>
          {description2}
        </Text>
        <Text size={12} className={classes.description} sx={{maxWidth: "100%"}}>
          {description3}
        </Text>
        <Text size={12} className={classes.description} sx={{maxWidth: "100%"}}>
          {description4}
        </Text>
      </Stack>
    </Card>
  );
}