import React from 'react';
import { TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import Colors from '../../Utils/Common/Colors';


const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        color: Colors.PrimaryMedium,
        border: '1px solid ' + Colors.PrimaryDark,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#f3f3f3',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: Colors.PrimaryDark,
            color: Colors.PrimaryMedium
        },
    },
    '& .MuiInputLabel-root': {
        color: Colors.PrimaryMedium,
        '&.Mui-focused': {
            color: Colors.PrimaryLight
        },
    }
}));

const CustomInput = ({ label, defaultValue, onChange }) => {
    return (
        <RedditTextField
            label={label}
            defaultValue={defaultValue}
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={onChange}
        />
    );
};

export default CustomInput;