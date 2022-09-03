import { IconBrandPinterest, IconBrandInstagram, IconBrandBehance } from '@tabler/icons';
import { Group, ActionIcon, Tooltip, createStyles } from '@mantine/core';


const useStyles = createStyles((theme) => ({

    icon: {
        color: theme.colors.gray[5],
        '&:hover': {
            color: theme.colors.gray[8],
            cursor: 'pointer',
        }
    },
    
}));

export function Socials() {
    const { classes, cx } = useStyles();

    return (
        <Group spacing="xs">
            <Tooltip label="Pinterest" withArrow>
                <ActionIcon variant="transparent" className={classes.icon}>
                    <IconBrandPinterest size={18} />
                </ActionIcon>
            </Tooltip>
            <Tooltip label="Instagram" withArrow>
            <ActionIcon variant="transparent" className={classes.icon}>
                    <IconBrandInstagram size={18} />
                </ActionIcon>
            </Tooltip>
            <Tooltip label="Behance" withArrow>
                <ActionIcon variant="transparent" className={classes.icon}>
                    <IconBrandBehance size={18} />
                </ActionIcon>
            </Tooltip>
        </Group>
    )
}
