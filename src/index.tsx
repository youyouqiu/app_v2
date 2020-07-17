import { TopView } from '@new-space/teaset'
import { connect, MapStateToProps } from 'react-redux'
import React, { PureComponent } from 'react'
import {Text, TextInput} from 'react-native'
import Index from './router'
import { NavigationContainerComponent } from 'react-navigation'
import { setNavigator } from '@/utils/navigation'

// @ts-ignore
Text.defaultProps = Object.assign({}, Text.defaultProps, {allowFontScaling: false})
// @ts-ignore
TextInput.defaultProps = Object.assign({}, TextInput.defaultProps, {allowFontScaling: false})

class RealRoot extends PureComponent {
  render(): Element {
    // let { updateVisble, updateInfo,mainVisble } = this.state
    return (
      <TopView>
        <Index ref={(element: NavigationContainerComponent): any => setNavigator(element)} />
        {/* <UpdateModal visible={updateVisble} updateInfo={updateInfo} setUpdateModa={this.setUpdateModa} /> */}
        {/* <MainModal visible={mainVisble} onClose={this.closeMain} onOk={this.mainUpdate}/> */}
      </TopView>
    )
  }
}

const mapStateToProps: MapStateToProps<any, any, any> = ({}) => ({
})

export default connect(mapStateToProps)(RealRoot)
