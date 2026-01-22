"use client"

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextIcon from '@mui/icons-material/TextFields';
import ParagraphIcon from '@mui/icons-material/Description';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SelectIcon from '@mui/icons-material/FormatListBulleted';
import { Grid } from "@mui/material";
import { LeftSidebarProps } from '@/types/user';


export const LeftSidebar = ({addText, addParagraph, addCheckBox, addSelect}: LeftSidebarProps) => {
    return (    
        <div className="p-8">
        <Card className="p-6">
          {/* Card Header */}
          <h2 className="text-2xl font-bold mb-4">Add Form Elements</h2>
          {/* Card Buttons */}
          <Grid container rowSpacing={1} columnSpacing={2}>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" className="p-4" startIcon={<TextIcon/>} onClick={addText} 
                sx={{ color: 'black', borderColor: 'black', height: 60 ,width: 150 }}>
                <h1>Text</h1>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" className="p-4" startIcon={<ParagraphIcon/>} onClick={addParagraph} 
                sx={{ color: 'black', borderColor: 'black', height: 60 ,width: 150 }}>
                <h1>Paragraph</h1>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined"className="p-4" startIcon={<CheckBoxIcon/>} onClick={addCheckBox} 
                sx={{ color: 'black', borderColor: 'black', height: 60 ,width: 150 }}>
                <h1>Checkbox</h1>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" className="p-4" startIcon={<SelectIcon/>} onClick={addSelect} 
                sx={{ color: 'black', borderColor: 'black', height: 60 ,width: 150 }}>
                <h1>Select</h1>
              </Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
}