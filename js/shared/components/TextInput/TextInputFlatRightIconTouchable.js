/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Animated, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import fonts from '../../utils/fonts/fonts';
import {colors} from '../../utils/colors/colors';
import {SPACINGS, FONTSIZES, SIZES, RADIUS} from '../../../themes';
import TextNormal from '../Text/TextNormal';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {containerStyle} from '../../../themes/styles';

const TextInputFlatRightIconTouchable = ({placeHolder, onSubmitEditing, hideText, maxLength, value, props, onPress, onBlur, style, textInputStyle, onChangeText, text, hasLeftIcon, ico, secureText, icoDisabled, onPressIco, keyboardType}) => {
	const [focusing, setIsFocus] = useState(false);
	const {colorsApp} = props.theme;
	return (
		<Animatable.View style={[styles.container, style]}>
			{hideText && hideText ? null : <TextNormal props={props} text={text} />}
			<TouchableOpacity onPress={onPress} style={[styles.containerInput]}>
				<TextInput
					style={[styles.default, textInputStyle || {}, {
						backgroundColor: colorsApp.backgroundInput || colors.blackInput,
						color: colorsApp.textColor || colors.black,
						borderColor: focusing ? colorsApp.main : colorsApp.borderColor,
					}]}
					placeholder={placeHolder || ''}
					placeholderTextColor={colorsApp.textColor || colors.black_lightly}
					onFocus={onPress}
					maxLength={maxLength ? maxLength : 50}
					value={value}
					onSubmitEditing={onSubmitEditing ? onSubmitEditing : (onBlur ? onBlur : () => { })}
					onKeyPress={onBlur ? onBlur : () => { }}
					returnKeyType="done"
					selectionColor={colorsApp.textColor}
					keyboardType={keyboardType && keyboardType || 'default'}
					onChangeText={onChangeText}
					secureTextEntry={secureText && secureText}
					onBlur={() => { setIsFocus(false); }}
				/>
				{hasLeftIcon && hasLeftIcon ?
					<TouchableOpacity onPress={onPressIco} disabled={icoDisabled && icoDisabled} style={styles.rightIcon}>
						<Animatable.View animation="fadeIn">
							{ico}
						</Animatable.View>
					</TouchableOpacity> : null}
			</TouchableOpacity>
		</Animatable.View>
	);
};


export default TextInputFlatRightIconTouchable;

const styles = StyleSheet.create({
	container: {
		// marginBottom: SPACINGS.sSmall
	},
	containerInput: {
		width: SIZES.textInput.width,
		height: SIZES.textInput.height,
	},
	rightIcon: {
		position: 'absolute',
		right: SPACINGS.large,
		height: '100%',
		alignSelf: 'center',
		alignContent: 'center',
		top: '25%',
	},
	default: {
		width: SIZES.textInput.width,
		height: SIZES.textInput.height,
		backgroundColor: colors.backgroundInput || colors.blackInput,
		color: colors.textColor || colors.black,
		borderRadius: RADIUS.default,
		fontSize: FONTSIZES.avg,
		// marginTop: SPACINGS.sSmall,
		letterSpacing: 0.5,
		borderWidth: 0.5,
		fontFamily: fonts.family.nunito.semiBold,
		paddingLeft: SPACINGS.avg
	}
});