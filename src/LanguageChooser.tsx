import { IconBrandPinterest, IconBrandInstagram, IconBrandBehance } from '@tabler/icons';
import { Group, ActionIcon, Tooltip, createStyles, Text } from '@mantine/core';
import i18n from './i18n';

const useStyles = createStyles((theme) => ({

    icon: {
        color: theme.colors.gray[5],
        '&:hover': {
            color: theme.colors.gray[8],
            cursor: 'pointer',
        }
    },
    
}));

export function LanguageChooser() {
    const { classes, cx } = useStyles();
    const iconSize = 18

    return (
        <Group spacing="xs">
            <LanguageChooserItem displayName="PL" code="pl"/>
            <LanguageChooserItem displayName="EN" code="en"/>
        </Group>
    )

    type LanguageChooserItemProps = {
        code: string
        displayName: string
    }
    
    function LanguageChooserItem(props: LanguageChooserItemProps) {
        return (
            <Text onClick={() => i18n.changeLanguage(props.code)}>{props.displayName}</Text>
        );

    }
}
