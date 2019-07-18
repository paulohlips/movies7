import { StyleSheet } from 'react-native';
import { Styles } from './styles';
import { colors, metric } from '../../styles';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },

    empty: {
        alignSelf: 'center',
        color: colors.white,
        fontSize : 14,
        marginTop: metrics.basePadding,
    },



});

export default styles;