"use client";

import Card from "@mui/material/Card";
import { FormControl, FormControlLabel, FormGroup, Input, InputLabel, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Select as SelectDrop } from '@mui/material';
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { SelectForm } from "@/types/user";
import { useState } from "react";

type Props = {
  element: SelectForm;
  removIt: (id: string) => void;
  header: (id: string, value: string) => void;
  content: (id: string, value: string) => void;
  isRequired: (id: string, value: boolean) => void;
  isPreview: boolean;
  updateOptions: (id: string, options: string[]) => void;
};

export const Select = ({ element, removIt, header, content, isPreview, isRequired, updateOptions}: Props) => {
  const fixHeader = element.header? element.header: "(Empty Header)";
  const headerText = fixHeader + (element.required ? " *" : "");
  const [click , setClick] =  useState(false);
  const options = element.options ?? ["Option 1", "Option 2"];
  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    updateOptions(element.id, newOptions);
  };
  const deleteOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    updateOptions(element.id, newOptions);
  }

  const value = element.placeholder ?? "";
  const showError =
    isPreview && element.required && click && value.trim() === "";
  return (
    <div className="flex items-center justify-center">
    <Card className="p-10 w-full bg-gray-100">
      {/* Header */}
      <div className="mb-4 flex">
          {isPreview ? (
            <span style={{ fontWeight: 700, color: "black" }}>{headerText}</span>
          ) : (
            <TextField
              fullWidth
              placeholder="New Select Field"
              value={element.header} 
              onChange={(e) => header(element.id, e.target.value)}
              variant="standard"
              InputProps={{
                readOnly: isPreview,
                disableUnderline: true,
                style: { fontWeight: "bold", color: "black" },
              }}
            />
          )}
        {!isPreview &&( 
          <FormGroup>
            <FormControlLabel control={<Checkbox disabled={isPreview} onChange={(e) => isRequired(element.id, e.target.checked)} 
            checked={element.required || false} />} label="required" />
          </FormGroup>
        )}
        {!isPreview &&( 
          <IconButton aria-label="delete" onClick={() => removIt(element.id)}>
            <DeleteIcon />
          </IconButton>          
        )}
      </div>

      <FormControl fullWidth>
        <SelectDrop
          labelId="simpleSelectLabel"
          id="simpleSelect"
          displayEmpty
          value={value}
          onChange={(e) => content(element.id, String(e.target.value))}
          renderValue={
            value !== "" ? undefined : () => <em>Select an option</em>
          }>
          <MenuItem value="">
            <em>Select an option</em>
          </MenuItem>
          {options.map((opt, index) => (
            <MenuItem key={index} value={opt}>
              {opt || `Option ${index + 1}`}
            </MenuItem>
          ))}
        </SelectDrop>
      </FormControl>
      
      {!isPreview && (
        <>
        <h2 className="mt-4 mb-2 font-semibold">Options:</h2>
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <TextField
              fullWidth
              placeholder={`Option ${index + 1}`}
              color="secondary"
              value={option}
              onChange={(e) => updateOption(index, e.target.value)}
            />
              <IconButton
                aria-label="delete"
                onClick={() => deleteOption(index)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
        ))}
        </>
      )}
    </Card>
  </div>
  );
}