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
    const iconSize = 18

    return (
        <Group spacing="xs">
            <SocialItem icon={<IconBrandPinterest size={iconSize} />} label="PINTEREST" url="https://pinterest.com"/>
            <SocialItem icon={<IconBrandInstagram size={iconSize} />} label="INSTAGRAM" url="https://instagram.com"/>
            <SocialItem icon={<IconBrandBehance size={iconSize} />} label="BEHANCE" url="https://behance.net"/>
        </Group>
    )

    type SocialItemProps = {
        icon: React.ReactNode,
        url: string,
        label: string,
    }
    function SocialItem(props: SocialItemProps) {
        return (
            <Tooltip color="white" style={{color: "black", fontSize: 12, fontWeight: 900}} label={props.label} transition="slide-left" transitionDuration={300}>
            <ActionIcon variant="transparent" className={classes.icon} component="a" href={props.url} target="_blank">
                {props.icon}
            </ActionIcon>
            </Tooltip>
        );

    }
}
