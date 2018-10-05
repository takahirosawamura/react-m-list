import React from 'react'
import { AppBar, Paper, Tabs } from '@material-ui/core'
import Tab from '@material-ui/core/Tab';
import withWidth from '@material-ui/core/withWidth';

export default withWidth()(
  ({ muscles, category, onSelect, width }) => {
    const index = category
      ? muscles.findIndex(group => group === category) + 1
      : 0

    const onIndexSelect = (e, index) =>
      onSelect(index === 0 ? '' : muscles[index - 1])


    return <AppBar position= 'static'>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== 'xs'}
        scrollable={width === 'xs'}
      >

        <Tab label="All" />
        {muscles.map(group =>
          <Tab key={group} label={group} />
        )}
      </Tabs>
     </AppBar>
  }
)
