import React, { FunctionComponent, ReactElement, PureComponent } from 'react';
import { View, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { Theme } from '@new-space/teaset';
import TopBar from './TopBar';
import ErrorView from '../ErrorView';
import { scaleSize } from '../../utils/screenUtil';
import { PageProps, PageError, ContentStyle } from '../typings/page';

class ErrorHandler extends PureComponent<PageError> {
  render(): Element {
    const { isError, children, ...errorProps } = this.props
    return isError ? <ErrorView {...errorProps} /> : children as ReactElement
  }
}

const Page: FunctionComponent<PageProps> = ({
  hiddenTopBar,
  loading,
  bodyStyle,
  scroll = true,
  error,
  footer,
  footerStyle = {},
  children,
  navBar,
  fixed,
  contentBgColor,
  viewProps = {},
  ...TopBarProps
}) => {

  const body: ContentStyle = {
    flex: 1,
    backgroundColor: contentBgColor || '#FFF',
  }

  // useEffect(()=>{
  // StatusBar.setBarStyle(TopBarProps.statusBarStyle || 'dark-content')
  // }, [TopBarProps])

  const StatusBarAndNarBarHeight = !hiddenTopBar ? Theme.statusBarHeight + Theme.navBarContentHeight : 0
  body.marginTop = body.marginTop || StatusBarAndNarBarHeight
  // 若footerStyle里定义了height，则使用footerStyle里的height作为高度设置footer高度
  const footerHeight = footerStyle.height || scaleSize(140)
  footerStyle.height = footerHeight

  return (
    <View style={styles['flex']} {...viewProps}>
      {/* top bar */}
      {!hiddenTopBar && (navBar || <TopBar {...TopBarProps} />)}
      {/* body */}
      <View style={[body, bodyStyle]}>
        {/* loading */}
        {loading ? (
          <View style={[styles['loadingWrapper']]}>
            <ActivityIndicator size="large"/>
          </View>
        ) : null}
        {/* content */}
        <ErrorHandler {...error}>
          {/* children */}
          <View style={[styles['flex'], { marginBottom: footer ? footerHeight : 0 }]}>
            {scroll ? <ScrollView>{children}</ScrollView> : children}
          </View>
          {fixed ? fixed : null}
          {/* footer */}
          {footer ? <View style={[styles['footer'], footerStyle]}>{footer}</View> : null}
        </ErrorHandler>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  loadingWrapper: {
    position: 'absolute',
    width: '100%',
    marginTop: scaleSize(10),
    zIndex: 9999,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})

export default Page;
