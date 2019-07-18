import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles/index';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: metrics.basePadding,
        borderRadius: metrics.borderRadius,
        marginTop: metrics.basePadding,
        marginHorizontal: metrics.basePadding,
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatar: {
        width: 54,
        height: 54,
    },
    
    info: {
        marginLeft: metrics.basePadding,
        flex: 1,
    },

    title: {
        color: colors.darker,
        fontWeight: 'bold',
    },

    description: {
        color: colors.dark ,
        marginTop: 3,
        fontSize: 12,

    }
})

export default styles;