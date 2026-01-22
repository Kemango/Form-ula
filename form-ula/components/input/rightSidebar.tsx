"use client"

import Card from '@mui/material/Card';
import { FormControlLabel, FormGroup, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';

export const RightSidebar = () => {
  const [title, settitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const savedTitle = localStorage.getItem('formTitle');
    const savedDescription = localStorage.getItem('formDescription');
    if (savedTitle) {
      settitle(savedTitle);
    }
    if (savedDescription) {
      setDescription(savedDescription);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('formTitle', title);
  }, [title]);
  useEffect(() => {
    localStorage.setItem('formDescription', description);
  }, [description]);
  
  return (
      <div className="p-8">
        <Card>
          {/* Header */}
          <div className="px-8 items-center bg-purple-100">
            <TextField
              fullWidth
              placeholder="Form Title"
              variant="standard"
              value={title}
              onChange={(e) => settitle(e.target.value)}
              margin="normal"
              InputProps={{
                disableUnderline: true,
                style: { fontSize: '30px' ,fontWeight: 'bold'},
              }}
            />
            <TextField
              fullWidth
              placeholder="Form Description"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              InputProps={{
                disableUnderline: true,
              }}
              />      
          </div>
          {/* Body */}
          <div className="flex items-center justify-center">
            <Card className="p-10 w-full bg-gray-100">
              {/* Header */}
              <div className="mb-4 flex">
                <TextField
                  fullWidth
                  placeholder="New Text Field"
                  variant="standard"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: 'bold'},
                  }}
                />
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="required" />
                </FormGroup>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </div>
              <TextField
                  fullWidth
                  placeholder="Follow the word above"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: 'bold'},
                  }}
                />
            </Card>


            {/* <p className="text-gray-500">No form fields added yet. Use the panel on the left to add form elemets</p> */}
          </div>
        </Card>
      </div>
  );
}