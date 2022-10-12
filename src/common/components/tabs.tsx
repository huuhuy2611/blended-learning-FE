import { ReactNode } from 'react';
import { Tabs, Tab, Box, useTheme, TabsProps } from '@mui/material';
import { alpha } from '@mui/material/styles';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

export interface TabItem {
  iconLabel?: JSX.Element;
  label: string | ReactNode;
  render?: ReactNode;
}

interface IProps {
  tabs: TabItem[];
  tab: number;
  onChange: (index: number) => void;
  TabsProps?: TabsProps;
}

const BasicTabs = (props: IProps) => {
  const { tabs, onChange, tab, TabsProps } = props;
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={tab}
        onChange={handleChange}
        sx={{
          width: '100%',
          background: alpha(theme.palette.grey[500], 0.08),
          borderRadius: '8px 8px 0 0',
          mb: 4,
          '& .MuiButtonBase-root.MuiTabScrollButton-root.Mui-disabled': {
            opacity: 0.3,
          },
        }}
        variant="scrollable"
        scrollButtons="auto"
        {...TabsProps}
      >
        {tabs.map(({ label, iconLabel }, i) => (
          <Tab
            sx={{
              whiteSpace: 'nowrap',
              textAlign: 'center',
              px: 2,
              margin: '0 !important',
              borderRadius: 0,
              '&.Mui-selected': {
                background: alpha(theme.palette.primary.main, 0.08),
                color: theme.palette.primary.main,
              },
            }}
            key={i}
            icon={iconLabel}
            label={label}
          />
        ))}
      </Tabs>
      {tabs.map(({ render }, i) => (
        <TabPanel value={tab} index={i} key={i}>
          {render}
        </TabPanel>
      ))}
    </Box>
  );
};

export default BasicTabs;
