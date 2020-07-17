import React, {PureComponent} from 'react'
import {View, TextInput, Image, ImageSourcePropType, ViewStyle, TextInputProps} from 'react-native'
import myStyle from '../style'


interface LoginInputProps {
  leftIcon: ImageSourcePropType
  placeholder?: string
  rightIcon?: ImageSourcePropType
  placeholderTextColor?: string
  style?: ViewStyle
  onChange?: (text: string) => void
  secureTextEntry?: boolean
  textContentType?: TextInputProps['textContentType']
}

class LoginInput extends PureComponent<LoginInputProps> {

  render(): Element {
    const { leftIcon, placeholder, rightIcon, placeholderTextColor = '#425673', onChange, style, ...otherProps} = this.props
    return (
      <View style={[myStyle['LoginInput'], style]}>
        <Image source={leftIcon} style={myStyle['inputLeftIcon']}/>
        <TextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          style={myStyle['input']}
          onChangeText={onChange}
          selectionColor="#fff"
          {...otherProps}
        />
        {
          rightIcon && <Image source={rightIcon} style={myStyle['inputRightIcon']}/>
        }
      </View>
    )
  }
}

export default LoginInput
