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
            <Tooltip label="Pinterest">
                <ActionIcon variant="transparent" className={classes.icon} component="a" href="https://pinterest.com" target="_blank">
                    <IconBrandPinterest size={18} />
                </ActionIcon>
            </Tooltip>
            <Tooltip label="Instagram">
            <ActionIcon variant="transparent" className={classes.icon} component="a" href="https://instagram.com" target="_blank">
                    <IconBrandInstagram size={18} />
                </ActionIcon>
            </Tooltip>
            <Tooltip label="Behance">
                <ActionIcon variant="transparent" className={classes.icon} component="a" href="https://behance.net" target="_blank">
                    <IconBrandBehance size={18} />
                </ActionIcon>
            </Tooltip>
        </Group>
    )
}
