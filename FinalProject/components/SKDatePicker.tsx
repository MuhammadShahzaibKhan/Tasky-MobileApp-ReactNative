import React, {useState} from 'react';
import {Button, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import rncStyles from 'rncstyles';
import ABButton from './SKButton';

export default function SKDatePicker({onChange, label, value}: any) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ABButton
        color="info"
        label={label}
        onPress={() => {
          setOpen(true);
        }}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          value = {value};
          handleClose();
          setDate(date);
          onChange(date);
        }}
        onCancel={() => {
          handleClose();
        }}
      />
    </>
  );
}
