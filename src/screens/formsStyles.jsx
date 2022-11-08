import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid} from '@material-ui/core';


export const FormInput = ({ name, label, required, value, onChange, type}) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue=''
        as={TextField}
        name={name}
        control={control}
        render= {({ field }) => (
          <TextField
            {...field}
            name={name}
            label={label}
            required={required}
            fullWidth
            value={value}
            onChange={onChange}
          />)
        }
        error={isError}
      />
    </Grid>
  );
}
