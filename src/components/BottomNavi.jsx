import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import GridOnIcon from '@mui/icons-material/GridOn';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

export const BottomNavi = (props) => {
    const { activePage, setActivePage } = props;
    return (
        <Box
            sx={{
                width: '100%',      // 幅を画面全体に広げる
                position: 'fixed',  // 位置を固定する
                bottom: 0,          // 画面下部に配置
                left: 0,            // 左端に配置 (right: 0 と合わせて幅一杯にする)
                right: 0,           // 右端に配置
                zIndex: (theme) => theme.zIndex.appBar,
                boxShadow: 3, // Boxに影をつける場合
            }}>
            <BottomNavigation
                showLabels
                value={activePage}
                onChange={(event, newValue) => {
                    setActivePage(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Scoresheet" icon={<GridOnIcon />} />
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
            </BottomNavigation>
        </Box>
    );
}