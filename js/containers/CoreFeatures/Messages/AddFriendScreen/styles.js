import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../../shared/utils/colors/colors';
import {safeTopHeight, ScreenWidth} from '../../../../shared/utils/dimension/Divices';
import {RADIUS, SPACINGS} from '../../../../themes';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        flex: 1,
        paddingVertical: SPACINGS.xLarge,
        // paddingHorizontal: SPACINGS.xxLarge,
    },
    topView: {
        position: 'absolute',
        height: Platform.OS == 'ios' ? 120 : 100,
        width: '100%',
        backgroundColor: colors.pinkBackground
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: safeTopHeight,
        marginBottom: SPACINGS.xxLarge,
        paddingHorizontal: SPACINGS.xxLarge,
    },
    listMessages: {
        // marginTop: SPACINGS.xLarge,
    },
    textInputHeader: {
        paddingHorizontal: SPACINGS.xxLarge,
        width: ScreenWidth - SPACINGS.xxLarge * 2,
        height: 48,
        borderRadius: 2 * RADIUS.backIco,
        borderWidth: 0,
    },
    separatorView: {
        marginLeft: SPACINGS.xxLarge,
        width: ScreenWidth - SPACINGS.xxLarge * 2,
        height: 1,
        backgroundColor: colors.borderColor
    }
});

export default {
    styles
};
